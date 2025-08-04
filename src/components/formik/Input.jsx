import { Field, ErrorMessage } from "formik";
import ErrorText from "./ErrorText";

const Input = ({ placeholder, name, ...rest }) => {
  return (
    <div className="relative p-3 w-full">
      <Field
        name={name}
        {...rest}
        placeholder={placeholder}
        className="bg-[rgba(23,23,23,0.6)] peer w-full border border-gray-300/40 rounded-md pt-10 pb-3 px-4 text-white placeholder-transparent focus:outline-none focus:border-gray-400 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#141414]"
      />

      <label
        htmlFor={name}
        className="pointer-events-none px-3 pt-4 absolute left-4 top-2 font-semibold text-neutral-400 transition-all duration-200
        peer-placeholder-shown:top-5
         peer-placeholder-shown:font-semibold
        peer-placeholder-shown:text-[20px]
        peer-placeholder-shown:text-neutral-400
        peer-focus:top-2
        peer-focus:text-[16px]
        peer-focus:text-neutral-400
         peer-focus:font-semibold"
      >
        {placeholder}
      </label>

      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
};

export default Input;
