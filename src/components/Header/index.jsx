import React from "react";
import Logo from "/logo.svg";
import HamburgerIcon from "/icon-hamburger.svg";
import CloseIcon from "/icon-close.svg";
import { ButtonStarted } from "../ButtonStarted";
import "./Header.css";

const Header = () => {
  const [view, setView] = React.useState(true);

  const renderView = () => {
    if (view) {
      return <img src={HamburgerIcon} />;
    } else {
      return <img src={CloseIcon} />;
    }
  };

  return (
    <header className="flex justify-between items-center py-12 px-6 md:px-0 ">
      <div>
        <img src={Logo} alt={"Logo manage"} />
      </div>
      <div
        className="cursor-pointer absolute right-6 sm:hidden z-10"
        onClick={() => setView(!view)}
      >
        {renderView()}
      </div>
      <div
        className={`text-darkBlue opacity-50 fixed top-0 left-0 bg-green-200 h-screen w-full px-6 py-24 ${
          view ? "hamburguerMenuActive" : "closeMenuActive"
        }`}
      >
        <ul className="flex flex-col gap-4 md:gap-6 bg-white max-w-full lg:gap-8 text-center py-8 rounded-lg font-bold">
          <li>Pricing</li>
          <li>Product</li>
          <li>About Us</li>
          <li>Careers</li>
          <li>Community</li>
        </ul>
      </div>
      <div className="hidden lg:block">
        <ButtonStarted />
      </div>
    </header>
  );
};

export { Header };
