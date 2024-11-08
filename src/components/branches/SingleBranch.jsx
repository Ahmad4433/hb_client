import React from "react";
import "./singleBranch.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";
const SingleBranch = ({ item }) => {
  const moveToMapHandler = () => {
    window.open(item?.map, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="single_branch_main">
      <div className="single_branch_image">
        <div className="single_branch_overlay">
          <span>{item?.title}</span>
        </div>
        <img src={item?.img} />
      </div>
      <div className="single_branch_content">
        <Button
          onClick={moveToMapHandler}
          endIcon={<NearMeOutlinedIcon />}
          variant="outlined"
          color="primary"
        >
          view on map
        </Button>
        <Button
          endIcon={<AddIcCallOutlinedIcon />}
          variant="outlined"
          color="success"
        >
          Call
        </Button>
      </div>
    </div>
  );
};

export default SingleBranch;
