import Logo from "/logo.svg";
import { RiFacebookBoxFill } from "react-icons/ri";
import { SlSocialYoutube } from "react-icons/sl";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { ButtonStarted } from "../ButtonStarted";

const Footer = () => {
  return (
    <footer className="bg-veryDarkBlue flex flex-col lg:flex-row lg:justify-around lg:items-center">
      <div className="py-16 px-6 text-center lg:order-3 lg:py-10">
        <input
          type="text"
          placeholder="Updates in your inbox..."
          className="rounded-full py-2 px-4 mr-3 placeholder:text-sm outline-none"
        />
        <ButtonStarted text="GO" />
        <p className="hidden lg:block text-darkGrayishBlue mt-6">
          Copyright 2024. All Rights Reserved
        </p>
      </div>
      <div className="flex justify-evenly text-darkGrayishBlue mb-12 lg:order-2  gap-8 lg:m-0">
        <ul>
          <li className="cursor-pointer hover:text-veryLightGray">Home</li>
          <li className="cursor-pointer hover:text-veryLightGray">Pricing</li>
          <li className="cursor-pointer hover:text-veryLightGray">Products</li>
          <li className="cursor-pointer hover:text-veryLightGray">About Us</li>
        </ul>
        <ul>
          <li className="cursor-pointer hover:text-veryLightGray">Careers</li>
          <li className="cursor-pointer hover:text-veryLightGray">Community</li>
          <li className="cursor-pointer hover:text-veryLightGray">
            Privacy Policy
          </li>
        </ul>
      </div>
      <div className="lg:order-1 lg:flex lg:flex-col-reverse ">
        <div className="flex justify-evenly text-veryLightGray text-4xl mb-12 lg:mb-2 lg:gap-2">
          <RiFacebookBoxFill />
          <SlSocialYoutube />
          <FaTwitter />
          <FaPinterest />
          <FaInstagram />
        </div>
        <div className="flex justify-center mb-12 lg:mb-4">
          <img src={Logo} />
        </div>
      </div>
      <p className="text-center text-darkGrayishBlue pb-12 lg:order-4 lg:hidden">
        Copyright 2024. All Rights Reserved
      </p>
    </footer>
  );
};

export { Footer };
