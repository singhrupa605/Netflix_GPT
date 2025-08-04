import { IMAGES } from "../utils/constants";
import DropdownMenu from "./DrodownMenu";
import { useState } from "react";
import down from "../assets/down.png";
import { useSelector } from "react-redux";

const Header = () => {
  const [isProfileHovered, setIsProfileHovered] = useState(false);
  const [chevronClass, setChevronClass] = useState("");
  const { user } = useSelector((state) => state.user);
  const { netflixlogo, profilelogo } = IMAGES;

  return (
    <div className="absolute px-8 z-50 bg-gradient-to-b from-black py-3 w-screen flex justify-between items-center">
      <img src={netflixlogo} className="h-12 sm:w-28 sm:h-15 lg:w-55 lg:h-25" />
      {user && (
        <div
          onMouseEnter={() => {
            setIsProfileHovered(true);
            setChevronClass("transition-transform duration-390 rotate-180");
          }}
          onMouseLeave={() => {
            setIsProfileHovered(false);
            setChevronClass("");
          }}
        >
          <div className="flex gap-2 items-center">
            <img
              className="rounded-md"
              width={45}
              height={45}
              src={profilelogo}
              alt="Profile Logo"
            />
            <div>
              <img
                className={chevronClass}
                src={down}
                height={15}
                width={15}
                alt="chevron down"
              />
            </div>
          </div>
          <div
            className={`absolute right-12 w-70 rounded transition-all duration-300 transform
          ${
            isProfileHovered
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2"
          }`}
          >
            {" "}
            <DropdownMenu />{" "}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
