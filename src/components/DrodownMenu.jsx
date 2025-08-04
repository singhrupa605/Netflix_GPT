import { IMAGES } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const DropdownLogo = ({ url, text }) => {
  return (
    <img className="rounded-md" src={url} width={30} height={30} alt={text} />
  );
};

const DropdownMenu = () => {
  const navigate = useNavigate();
  const { up, blueprofile, kidslogo, helpcenter, leave, pencil, user } = IMAGES;
  const handleSignOut = () => {
    if (user) {
      signOut(auth)
        .then(() => {
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("❌ No user is logged-in");
    }
  };

  const listclass = "p-2 text-lg flex";

  return (
    <div>
      <div className="flex justify-end px-5">
        <img src={up} width={15} height={15} alt="Chevron Up" />
      </div>
      <div className="rounded-md bg-black opacity-80 text-white py-6 px-3 border-gray-700 border-1 shadow-2xl">
        <ul>
          <li className={listclass}>
            <DropdownLogo
              url={blueprofile}
              text={"Blue Netflix profile Logo"}
            />
            <Link className="px-3 hover:underline">User 2</Link>
          </li>
          <li className={listclass}>
            <DropdownLogo url={kidslogo} text={"Kids Profile Logo"} />
            <Link className="px-3 hover:underline">Kids Profile</Link>
          </li>
          <li className={listclass}>
            <DropdownLogo url={pencil} text={"Pencil"} />
            <Link className="px-3 hover:underline">Manage Profiles</Link>
          </li>
          <li className={listclass}>
            <DropdownLogo url={leave} text={"Exit Profile Icon"} />
            <Link className="px-3 hover:underline">Exit Profile</Link>
          </li>
          <li className={listclass}>
            <DropdownLogo url={user} text={"Profile Logo"} />
            <Link className="px-3 hover:underline">Account</Link>
          </li>
          <li className={listclass}>
            <DropdownLogo url={helpcenter} text={"Help Center Logo"} />
            <Link className="px-3 hover:underline">Help Center</Link>
          </li>
        </ul>
        <div className="py-4">
          <hr className="border-t border-gray-600 w-full mx-auto" />
        </div>
        <div className="flex justify-center">
          <Link
            onClick={() => handleSignOut()}
            className="text-center hover:underline"
          >
            Sign Out Of Netflix
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
