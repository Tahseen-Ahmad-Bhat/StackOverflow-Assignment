import React from "react";
import "./MainQuestionSection.css";

const MainQuestionSection = () => {
  return (
    <div className="questionSection">
      <div className="questionSection__header">
        <div>
          <h1>top</h1>
          <p>Questions</p>
        </div>

        <ul className="questionSection__nav">
          <li>interesting</li>
          <li>featured</li>

          <li>hot</li>
          <li>week</li>
          <li>month</li>
        </ul>
      </div>
    </div>
  );
};

export default MainQuestionSection;
