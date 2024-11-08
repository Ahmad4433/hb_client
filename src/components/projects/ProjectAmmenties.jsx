import React from "react";
import "./projectAmmenties.css";
const ProjectAmmenties = ({ item }) => {
  return (
    <div className="project_ammenty_main">
      <>{item.icon}</>
      <span>{item.title}</span>
    </div>
  );
};

export default ProjectAmmenties;
