import React from "react";
import "./QuestionItem.css";
import Tag from "./Tag";
import { FcAnswers } from "react-icons/fc";
import { FiEdit2, FiThumbsUp } from "react-icons/fi";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { GrFormView } from "react-icons/gr";

const QuestionItem = () => {
  return (
    <div className="questionItem">
      <div className="questionItem__question">
        <a href="#" className="selectedAnchor">
          What is react
        </a>
        <Tag />
        {true ? (
          <p>
            <FiEdit2 className="questionItem__icon" />
            <span>Modified</span>
          </p>
        ) : (
          <p>
            <FcAnswers className="questionItem__icon" />
            <span>Answered</span>
          </p>
        )}
      </div>

      <div className="questionItem__metric">
        <div>
          <span>0</span>
          <p>votes</p>
          <FiThumbsUp />
        </div>
        <div>
          <span>0</span>
          <p>answer</p>
          <RiQuestionAnswerLine />
        </div>
        <div>
          <span>0</span>
          <p>views</p>
          <GrFormView />
        </div>
      </div>
    </div>
  );
};

export default QuestionItem;
