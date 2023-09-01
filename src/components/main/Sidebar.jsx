import React from "react";
import "./Sidebar.css";

import stackoverflow from "../../assets/stackOverflowImage.png";
import { IoIosArrowBack } from "react-icons/io";
import { BsQuestion, BsTag, BsBookmark, BsInboxFill } from "react-icons/bs";
import { PiBagSimpleBold } from "react-icons/pi";
import { GrDocumentText, GrAnnounce } from "react-icons/gr";
import { LiaUserSolid } from "react-icons/lia";
import { FaStackExchange } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* StackOverflow Image */}
      <div className="sidebar__image">
        <img src={stackoverflow} alt="STKImage" />
      </div>

      {/* Hide Button */}
      <div className="sidebar__hideButton">
        <div>
          <IoIosArrowBack />
        </div>
      </div>

      {/* Sidebar Nav */}
      <div className="sidebar__nav">
        <ul>
          <li>
            <BsQuestion className="icon" />
            <a href="#" className="active">
              QUESTIONS
            </a>
          </li>
          <li>
            <PiBagSimpleBold className="icon" />
            <a href="#">JOBS</a>
          </li>
          <li>
            <GrDocumentText className="icon" />
            <a href="#">DOCUMENTATION</a>
          </li>
          <li>
            <BsTag className="icon" />
            <a href="#">TAGS</a>
          </li>
          <li>
            <LiaUserSolid className="icon" />
            <a href="#">USERS</a>
          </li>
          <li>
            <BsBookmark className="icon" />
            <a href="#">BADGES</a>
          </li>
          <li>
            <GrAnnounce className="icon" />
            <a href="#">ASK QUESTION</a>
          </li>
          <li>
            <FaStackExchange className="icon" />
            <a href="#">STACK EXCHANGE</a>
          </li>
          <li>
            <BsInboxFill className="icon" />
            <a href="#">INBOX</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
