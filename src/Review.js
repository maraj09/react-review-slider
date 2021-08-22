import React from "react";
import { FaQuoteRight } from "react-icons/fa";

const Review = ({ data, active }) => {
  return (
    <div className={`review ${active}`}>
      <div className="img-container">
        <img src={data.image} alt="" />
      </div>
      <div className="info">
        <h4>{data.name}</h4>
        <p>{data.title}</p>
      </div>
      <div className="des">
        <span>{data.quote}</span>
      </div>
      <FaQuoteRight className="icon" />
    </div>
  );
};

export default Review;
