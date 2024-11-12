import React from "react";
import "./projectAmmenties.css";
import { FaCheckDouble } from "react-icons/fa6";

const ProjectAmmenties = ({ item }) => {
  return (
    <div className="project_ammenty_main">
      <>
        <FaCheckDouble />
      </>
      <span>{item.title}</span>
    </div>
  );
};

export default ProjectAmmenties;
