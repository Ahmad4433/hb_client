import React from "react";
import "./projectsList.css";
import { Button } from "@mui/material";
import SingleProject from "./SingleProject";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
const ProjectsList = () => {
  return (
    <div className="project_list_main">
      <div className="project_list">
        {[1, 2, 3, 4].map((item, index) => (
          <SingleProject key={index} index={index} />
        ))}
        <div className="project_load_action">
          <Button
            endIcon={<RestartAltIcon />}
            variant="outlined"
            color="primary"
          >
            Load More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;
