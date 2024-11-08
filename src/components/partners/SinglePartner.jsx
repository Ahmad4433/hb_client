import React from "react";
import "./singlePartner.css";
const SinglePartner = ({ item }) => {
  return (
    <div className="single_partner_main">
      <img src={item.img} />
    </div>
  );
};

export default SinglePartner;
