import React from "react";
import "./singleAgent.css";
import { Button } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import { Link } from "react-router-dom";
const SingleAgent = ({ agent }) => {
  return (
    <div className="single_agent_main">
      <div className="single_agent_profile">
        <img src={agent?.profile} />
      </div>
      <div className="single_agent_content">
        <span className="captlize">{agent?.name}</span>
        <span className="captlize gray small">
          {agent?.desigination || "sales executive"}
        </span>
        <div className="single_agent_actions">
          <Link to={`tel:${agent?.mobile}`}>
            <Button
              endIcon={<CallIcon />}
              fullWidth
              variant="contained"
              color="primary"
            >
              Contact
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleAgent;
