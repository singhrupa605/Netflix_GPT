import NETFLIX_BG from "../assets/netflix-bg.jpg";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <div className="relative bg-black h-screen">
      <div className="hidden sm:block md:block lg-block">
        <img className="object-cover w-screen h-screen" src={NETFLIX_BG} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black to-black opacity-58"></div>

      <div className="px-12 py-10 sm:px-8 sm:pb-12 w-full sm:w-[500px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-[50vh] md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 bg-[rgba(0,0,0,0.7)] rounded-md">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
