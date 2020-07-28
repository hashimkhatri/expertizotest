import React from "react";
import { PropTypes } from "prop-types";

const BottomBar = ({
  percentage,
  correctPercentage,
  wrongPercentage,
  score,
}) => {
  return (
    <div className="bottomBarPosition">
      <div className="paddingBottomBar">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
            <span className="scoreText">Score: {score}%</span>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-right">
            <span className="scoreText">Max Score: 75%</span>
          </div>
        </div>
        <div className="progress mainBar">
          <div
            className="progress bottomInnerBar bottomInnerBar1"
            role="progressbar"
            style={{ width: `${percentage}%` }}
            aria-valuenow={percentage}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="progress bottomInnerBar bottomInnerBar2"
              role="progressbar"
              style={{
                width: `${correctPercentage}%`,
              }}
              aria-valuenow={correctPercentage}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
            <div
              className="progress bottomInnerBar bottomInnerBar3"
              role="progressbar"
              style={{
                width: `${wrongPercentage}%`,
              }}
              aria-valuenow={wrongPercentage}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

BottomBar.propTypes = {
  correctPercentage: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
  wrongPercentage: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};
export default BottomBar;
