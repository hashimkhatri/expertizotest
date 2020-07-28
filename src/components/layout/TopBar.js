import React from "react";
import { PropTypes } from "prop-types";

const TopBar = ({ percentage }) => {
  return (
    <div className="progress mainTopBar">
      <div
        className="progress-bar topInnerBar"
        role="progressbar"
        style={{ width: `${percentage}%` }}
        aria-valuenow={percentage}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
};

TopBar.propTypes = {
  percentage: PropTypes.number.isRequired,
};
export default TopBar;
