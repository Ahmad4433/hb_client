import React from "react";
import "./singleReview.css";
import { Rating } from "@mui/material";
const SingleReview = ({ item }) => {
  return (
    <div className="single_review_main">
      <div className="single_review_user">
        <div className="flex_center_between">
          <span className="review_user_name">
            {item?.name?.substring(0, 2)}
          </span>
          <Rating readOnly defaultValue={item?.rating || 0} size="small" />
        </div>
        <span className="single_review_date">
          {new Date(item?.date).toLocaleDateString()}
        </span>
      </div>
      <p style={{ lineHeight: "1.6" }} className="small">
        {item?.review}
      </p>
    </div>
  );
};

export default SingleReview;
