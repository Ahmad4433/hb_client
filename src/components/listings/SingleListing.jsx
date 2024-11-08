import React from "react";
import "./singleListing.css";
import convertToWords from "../../utils/convertAmount";
import { MdOutlineLocationOn } from "react-icons/md";
import { LuAreaChart } from "react-icons/lu";
import { MdOutlineBed } from "react-icons/md";
import { BiBath } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
const SingleListing = ({ item }) => {
  const navigate = useNavigate();

  const navigateToDetail = () => {
    navigate("/listing/detail");
  };

  return (
    <div className="single_listing_main">
      <div className="single_listing_container">
        <div className="single_listing_image">
          {/* <div className="single_listing_overlay">

          </div> */}
          <img src={item?.img} />
        </div>
        <div className="single_listing_content">
          <span className="small captlize">{item?.title}</span>
          <span className="orange">{convertToWords(item?.price)}</span>
          <div className="flex_row">
            <MdOutlineLocationOn className="gray" />
            <span className="small captlize">{item?.location}</span>
          </div>
          <div className="single_listing_features flex_center_between">
            <div className="single_listing_feature_item">
              <LuAreaChart />
              <span>{item?.area}</span>
            </div>
            <div className="single_listing_feature_item">
              <MdOutlineBed />
              <span>{item?.bed}</span>
            </div>
            <div className="single_listing_feature_item">
              <BiBath />
              <span>{item?.bath}</span>
            </div>
          </div>
          <div>
            <Button
              onClick={navigateToDetail}
              fullWidth
              variant="outlined"
              color="primary"
            >
              Detail
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleListing;
