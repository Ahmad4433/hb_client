import React, { useEffect, useState } from "react";
import "./projectsList.css";
import { Button } from "@mui/material";
import SingleProject from "./SingleProject";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import useProvideGeneralHooks from "../../hooks/useProvideGeneralHooks";
import apis from "../../utils/apis";
import httpActions from "../../utils/httpAction";

const ProjectsList = () => {
  const { dispatch } = useProvideGeneralHooks();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      const data = {
        url: apis().getProjectList,
      };
      const result = await dispatch(httpActions(data));
      console.log(result);
      if (result?.status) {
        setProjects(result?.list);
      }
    };
    getProjects();
  }, []);

  return (
    <div className="project_list_main">
      <div className="project_list">
        {projects?.map((item, index) => (
          <SingleProject key={index} item={item} index={index} />
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
