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
    <header className="flex justify-between items-center py-12 px-6 md:px-12 lg:px-24">
      <div>
        <img src={Logo} alt={"Logo manage"} />
      </div>
      <div
        className="cursor-pointer fixed right-6 sm:hidden z-10"
        onClick={() => setView(!view)}
      >
        {renderView()}
      </div>
      <div
        className={`text-darkBlue fixed top-0 bg-gradient-to-b from-white to-darkBlue/50 h-screen w-full px-6 py-24  ${
          view ? "hamburguerMenuActive" : "closeMenuActive "
        } sm:static sm:flex sm:w-auto sm:p-0 sm:h-auto sm:opacity-1 sm:bg-none`}
      >
        <ul className="flex flex-col sm:flex-row gap-8 md:gap-6 bg-white max-w-full lg:gap-8 text-center py-8 rounded-lg font-bold sm:py-0 sm:w-auto sm:bg-inherit opacity-1">
          <li className="cursor-pointer hover:text-darkGrayishBlue">Pricing</li>
          <li className="cursor-pointer hover:text-darkGrayishBlue">Product</li>
          <li className="cursor-pointer hover:text-darkGrayishBlue">
            About Us
          </li>
          <li className="cursor-pointer hover:text-darkGrayishBlue">Careers</li>
          <li className="cursor-pointer hover:text-darkGrayishBlue">
            Community
          </li>
        </ul>
      </div>
      <div className="hidden lg:block">
        <ButtonStarted />
      </div>
    </header>
  );
};

export { Header };
