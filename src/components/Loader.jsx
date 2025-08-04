const Loader = () => {
  return (
    <div className="flex justify-center items-center gap-2">
      <svg
        className="animate-spin h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M12.032 4.578C11.686 4.578 7.063 6.947 6.196 14.343a8 8 0 019.938-10.516v4l3-3-3-3v2z"
        ></path>
      </svg>
    </div>
  );
};


export default Loader
