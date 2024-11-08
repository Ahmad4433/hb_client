import React from "react";
import "./comingSoon.css";
import { buildingImage } from "../../../utils/images";
import { Button } from "@mui/material";
const ComingSoon = () => {
  return (
    <div className="cominig_soon_main">
      <div className="coming_soon_overlay">
        <div className="coming_soon_content">
          <p className="coming_soon_heading">
            Reach New Heights with Our Upcoming Iconic Tower!
          </p>
          <p className="coming_soon_detail">
            Get ready for the newest landmark in luxury living! A high-rise
            masterpiece is coming soon, blending modern design with unmatched
            amenities. Perfectly located for convenience and elegance, this
            tower offers stunning views, spacious apartments, and world-class
            facilities. Don’t miss the chance to own your place in this
            prestigious address!
          </p>
          <div>
            <Button variant="contained" color="primary">
              Get In Touch
            </Button>
          </div>
        </div>
        <div className="coming_soong_image">
          <img src={buildingImage[0]} />
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
