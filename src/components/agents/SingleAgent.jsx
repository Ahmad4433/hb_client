import React from "react";
import "./singleAgent.css";
import { Button } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
const SingleAgent = ({ agent }) => {
  return (
    <div className="single_agent_main">
      <div className="single_agent_profile">
        <img src={agent?.img} />
      </div>
      <div className="single_agent_content">
        <span className="captlize">{agent?.name}</span>
        <span className="captlize gray small">{agent?.desigination}</span>
        <div className="single_agent_actions">
          <Button
            endIcon={<CallIcon />}
            fullWidth
            variant="contained"
            color="primary"
          >
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SingleAgent;
