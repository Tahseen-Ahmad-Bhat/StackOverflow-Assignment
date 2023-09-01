import React from "react";
import "./FooterNav.css";
import { AiOutlineDribbble, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";

const FooterNav = () => {
  return (
    <div className="footerNav">
      {/* FooterNav Items */}
      <ul className="footerNav__items">
        <li>
          <a href="#">about us</a>
        </li>
        <li>
          <a href="#">tour</a>
        </li>
        <li>
          <a href="#">help</a>
        </li>
        <li>
          <a href="#">chat</a>
        </li>
        <li>
          <a href="#">data</a>
        </li>
        <li>
          <a href="#">legal</a>
        </li>
        <li>
          <a href="#">privacy policy</a>
        </li>
        <li>
          <a href="#">work here</a>
        </li>
        <li>
          <a href="#">advertising info</a>
        </li>
        <li>
          <a href="#">mobile</a>
        </li>
        <li>
          <a href="#">contact us</a>
        </li>
        <li>
          <a href="#">feedback</a>
        </li>
      </ul>

      {/* FooterNav Socials */}
      <div className="footerNav__socials">
        <AiOutlineTwitter className="footerNav__socials-icons" />
        <BiLogoFacebook className="footerNav__socials-icons" />
        <AiOutlineDribbble className="footerNav__socials-icons" />
      </div>
    </div>
  );
};

export default FooterNav;
