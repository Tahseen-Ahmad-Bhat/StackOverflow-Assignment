import React from "react";
import "./Main.css";
import Sidebar from "./Sidebar";
import MainHeader from "./MainHeader";

const Main = () => {
  return (
    <div className="main">
      <Sidebar />
      <div className="main__body">
        <MainHeader />
      </div>
    </div>
  );
};

export default Main;
