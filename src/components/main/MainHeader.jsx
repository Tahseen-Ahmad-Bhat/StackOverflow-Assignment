import React from "react";
import "./MainHeader.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { SlScreenDesktop } from "react-icons/sl";
import { IoMdHelpBuoy } from "react-icons/io";

const MainHeader = () => {
  return (
    <div className="mainHeader">
      <div>
        <GiHamburgerMenu />
        <div className="mainHeader__search">
          <BiSearch />
          <input type="text" name="" id="" placeholder="search" />
        </div>
      </div>
      <div>
        <div className="mainHeader__help">
          <IoMdHelpBuoy className="icon" />
          <p>Help</p>
        </div>
        <div className="mainHeader__tour">
          <SlScreenDesktop className="icon" />
          <p>Tour</p>
        </div>
        <div className="mainHeader__profile">
          <img
            src="https://avatars.githubusercontent.com/u/97308844?v=4"
            alt="Profile Image"
          />
          <MdKeyboardArrowDown className="icon" />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
