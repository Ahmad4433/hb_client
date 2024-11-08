import React from "react";
import convertToWords from "../../utils/convertAmount";
import "./singleDeal.css";
const SingleDeal = ({ item }) => {
  return (
    <div className="single_deal_main">
      <div className="deal_image">
        <img src={item?.img} />
      </div>

      <div className="single_deal_content">
        <p className="captlize">{item?.title}</p>
        <div>
          <span className="small gray">Deal Close With</span>
          <span className="single_deal_user" style={{ textTransform: "uppercase" }}>{item?.customer}</span>
        </div>
        {/* <span className="orange bold ">{convertToWords(item?.price)}</span> */}
        <div className="single_deal_features">
          <div>
            <span className="gray captlize">item</span>
            <span>{item?.item}</span>
          </div>
          <div>
            <span className="gray captlize">type</span>
            <span>{item?.type}</span>
          </div>
          <div>
            <span className="gray captlize">date</span>
            <span>{item?.date}</span>
          </div>
        </div>

        <p>{item?.detail}</p>
      </div>
    </div>
  );
};

export default SingleDeal;
