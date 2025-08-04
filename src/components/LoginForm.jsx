import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./formik/FormikControl";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import ErrorText from "./formik/ErrorText";
import { useDispatch } from "react-redux";
import { setLoading } from "../utils/userSlice";
import Loader from "./Loader";
import { useSelector } from "react-redux";
import { IMAGES } from "../utils/constants";
const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isRegistered, setRegistered] = useState(true);
  const [errMessage, setErrMessage] = useState("");
  const { user, loading } = useSelector((state) => state.user);

  const initialValues = {
    name: "",
    contact: "",
    password: "",
  };

  const baseValidation = {
    contact: Yup.string()
      .required("Required")
      .test(
        "is-email-or-phone",
        "Must be a valid email or phone number",
        function (value) {
          const emailValid = Yup.string().email().isValidSync(value);
          const phoneValid = /^[0-9]{10}$/.test(value);

          return emailValid || phoneValid;
        }
      ),
    password: Yup.string()
      .required("Required")
      .min(8)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$?*!&%])[a-zA-Z\d@$?*!&%]{8,}/,
        "Must contain uppercase, lowercase, number, and special character"
      ),
  };
  const validationSchema = Yup.object({
    ...(!isRegistered && { name: Yup.string().required("Required") }),
    ...baseValidation,
  });

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    if (isRegistered) {
      signInWithEmailAndPassword(auth, values.contact, values.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          if (!user) {
            dispatch(() => setLoading(true));
          } else {
            dispatch(() => setLoading(false));
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === "auth/invalid-credential") {
            setErrMessage("Email/Password is incorrect");
          } else {
            setErrMessage(errorMessage);
          }
        });
    } else {
      createUserWithEmailAndPassword(auth, values.contact, values.password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: values.name,
            photoURL: IMAGES.photoURL,
          })
            .then(() => {
              const currentUser = auth.currentUser;
              const { uid, email, displayName, photoURL } = currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })

            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode === "auth/email-already-in-use") {
            setErrMessage("This email is already in use");
          }
        });
    }
    setSubmitting(false);
    //  resetForm();
  };

  useEffect(() => {
    if (user) {
      navigate("/browse", { replace: true });
    }
  }, [navigate, user]);

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnBlur={true}
      validateOnChange={false}
    >
      {(formik) => {
        return (
          <Form className="flex flex-col gap-2 mx-auto">
            <ErrorText
              className="!text-amber-300 text-xl font-bold pb-2"
              children={errMessage}
            />
            <h1 className="text-4xl text-white font-bold pb-6 ">
              {isRegistered ? <span>Sign In</span> : <span>Sign Up</span>}{" "}
            </h1>
            {!isRegistered ? (
              <FormikControl
                control="input"
                type="text"
                placeholder="Full Name"
                name="name"
              />
            ) : null}
            <FormikControl
              control="input"
              type="text"
              placeholder="Email or Phone Number"
              name="contact"
            />
            <FormikControl
              control="input"
              type="password"
              placeholder="Password"
              name="password"
            />

            <button
              type="submit"
              className="btn bg-red-600 p-3 mx-2 rounded-md text-white font-bold text-xl  hover:bg-red-700 transition-all duration-200 cursor-pointer"
            >
              {isRegistered ? loading ? <Loader /> : "Sign In" : "Sign Up"}
            </button>

            {isRegistered ? (
              <p className="text-white text-xl font-semibold pt-5">
                <span className="text-neutral-400">New to Netflix? </span>
                <Link
                  className="hover:underline"
                  onClick={() => setRegistered(false)}
                >
                  Sign up now.
                </Link>
              </p>
            ) : (
              <p className="text-white text-xl font-semibold pt-5">
                <span className="text-neutral-400">Already Registred? </span>
                <Link
                  className="hover:underline"
                  onClick={() => setRegistered(true)}
                >
                  Sign in now.
                </Link>
              </p>
            )}
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
