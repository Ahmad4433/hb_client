import React from "react";
import "./branchPageList.css";
import SingleBranchItem from "./SingleBranchItem";
const BranchPagesList = () => {
  return (
    <div className="branch_page_main">
      <div className="branch_page_banner">
        <div className="branch_page_overlay">
          <p>Our Expansive Network of Branches</p>
          <p>
            Discover our widespread presence across multiple locations,
            delivering unmatched real estate services and personalized
            experiences at each branch. Explore a branch near you!
          </p>
        </div>
      </div>
      <div className="branch_page_main_section">
        <div>
          <SingleBranchItem />
          <SingleBranchItem />
          <SingleBranchItem />
          <SingleBranchItem />
        </div>
      </div>
    </div>
  );
};

export default BranchPagesList;
