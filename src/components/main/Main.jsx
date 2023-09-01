import React from "react";
import "./Main.css";
import Sidebar from "./Sidebar";
import MainHeader from "./MainHeader";
import MainQuestionSection from "./MainQuestionSection";

const Main = () => {
  return (
    <div className="main">
      <Sidebar />
      <div className="main__body">
        <MainHeader />

        <div className="main__mainSection">
          {/* Main Question Section */}
          <MainQuestionSection />

          {/* Main Job Section */}
          <div>Jobs</div>
        </div>
      </div>
    </div>
  );
};

export default Main;
