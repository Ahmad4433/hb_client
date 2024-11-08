import React from "react";
import "./branchList.css";
import { buildingImage } from "../../utils/images";
import SingleBranch from "./SingleBranch";

const BranchList = () => {
  const branches = [
    {
      title: "al kabir town phase-2",
      img: buildingImage[0],
      map: "https://maps.app.goo.gl/hsEp6oUpqaeEqBo37",
    },
    {
      title: "bahria town",
      img: buildingImage[1],
      map: "https://maps.app.goo.gl/hsEp6oUpqaeEqBo37",
    },
    {
      title: "bahria orchard-1",
      img: buildingImage[2],
      map: "https://maps.app.goo.gl/hsEp6oUpqaeEqBo37",
    },
    {
      title: "bahria orchard-2",
      img: buildingImage[0],
      map: "https://maps.app.goo.gl/hsEp6oUpqaeEqBo37",
    },
    {
      title: "new lahore city",
      img: buildingImage[1],
      map: "https://maps.app.goo.gl/hsEp6oUpqaeEqBo37",
    },
    {
      title: "new lahore city",
      img: buildingImage[2],
      map: "https://maps.app.goo.gl/hsEp6oUpqaeEqBo37",
    },
  ];

  return (
    <div className="branch_list_main">
      <span className="section_title">Our Branches</span>
      <div className="branch_list_container">
        {branches.map((item, index) => (
          <SingleBranch key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default BranchList;
