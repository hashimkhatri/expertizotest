import React from "react";
import { PropTypes } from "prop-types";
import classnames from "classnames";

const RenderOptions = ({ options, onChange, currentAnswer }) => {
  const opt = options.map((element, index) => {
    return (
      <div
        key={index}
        className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center optionPadding"
      >
        <p
          onClick={() => onChange(element)}
          className={classnames("options", {
            selectedAnswer: currentAnswer === element,
          })}
        >
          {element}
        </p>
      </div>
    );
  });
  return opt;
};

RenderOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  currentAnswer: PropTypes.string.isRequired,
};
export default RenderOptions;
