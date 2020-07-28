import React from "react";
import { PropTypes } from "prop-types";
import StarRatings from "react-star-ratings";

const Stars = ({ star }) => {
  return (
    <StarRatings
      rating={star}
      numberOfStars={3}
      starRatedColor={"black"}
      starEmptyColor={"#cbcccb"}
      starDimension={"15px"}
      starSpacing={"0px"}
    />
  );
};

Stars.propTypes = {
  star: PropTypes.number.isRequired,
};
export default Stars;
