import React from "react";
import FooterNav from "./FooterNav";
import "./Footer.css";
import FooterMain from "./FooterMain";
import FooterCopyright from "./FooterCopyright";

const Footer = () => {
  return (
    <div className="footer">
      <FooterNav />
      <FooterMain />
      <FooterCopyright />
    </div>
  );
};

export default Footer;
