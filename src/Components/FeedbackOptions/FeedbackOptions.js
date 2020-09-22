import React from "react";
import PropTypes from "prop-types";
// import { button, box } from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map((option) => (
      <button
        type="button"
        name={option}
        key={option}
        onClick={onLeaveFeedback}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.protoTypes = {
  options: PropTypes.arrayOf(PropTypes.number),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

// className={box}
// className={button}
