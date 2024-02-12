import Logo from "/logo.svg";
import HamburgerIcon from "/icon-hamburger.svg";
import { ButtonStarted } from "../ButtonStarted";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-12 px-6 md:px-0 ">
      <div>
        <img src={Logo} alt={"Logo manage"} />
      </div>
      <div className="cursor-pointer sm:hidden">
        <img src={HamburgerIcon} />
      </div>
      <div className=" sm:block text-darkBlue xs:fixed">
        <ul className="flex gap-4 md:gap-6 lg:gap-8 xs:flex">
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
