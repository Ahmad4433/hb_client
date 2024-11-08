import React from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { HiOutlineCash } from "react-icons/hi";
import { LuAreaChart } from "react-icons/lu";
import { Button } from "@mui/material";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineBathroom } from "react-icons/md";
import { MdOutlineSoupKitchen } from "react-icons/md";
import "./projectCategory.css";
import convertToWords from "../../utils/convertAmount";
const ProjectCategory = ({ item }) => {
  return (
    <div className="project_category_main">
      <div className="project_category_image">
        <img src={item?.img} />
      </div>
      <div>
        <div className="project_category_content">
          <div className="project_category_items border_right">
            <BiCategoryAlt />
            <HiOutlineCash />
            <LuAreaChart />
          </div>
          <div className="project_category_items full_width">
            <span className="captlize">{item.category}</span>

            <div className="project_category_items_pair flex_center_between">
              <span>{convertToWords(item.downpayment)}</span>
              <span style={{ fontSize: "10px" }} className="orange">
                Down Payment
              </span>
            </div>
            <div className="project_category_itmes_pair flex_center_between">
              <span className="captlize">{item.area}</span>
              <span style={{ fontSize: "10px" }} className="orange">
                Area
              </span>
            </div>
          </div>
        </div>

        <div className="project_category_ammenties">
          <div className="project_category_ammentt_item">
            <IoBedOutline />
            <span>1 Bed</span>
          </div>
          <div className="project_category_ammentt_item">
            <MdOutlineBathroom />
            <span>1 Bath</span>
          </div>
          <div className="project_category_ammentt_item">
            <MdOutlineSoupKitchen />
            <span>1 Kitchen</span>
          </div>
        </div>

        <div>
          <Button fullWidth color="secondary" variant="contained">
            Get Payment Plan
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCategory;
