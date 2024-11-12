import React from "react";
import { BiCategoryAlt } from "react-icons/bi";
import { HiOutlineCash } from "react-icons/hi";
import { LuAreaChart } from "react-icons/lu";
import { Button } from "@mui/material";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineBathroom } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";

import { MdOutlineSoupKitchen } from "react-icons/md";
import "./projectCategory.css";
import useProvideGeneralHooks from "../../hooks/useProvideGeneralHooks";
import convertToWords from "../../utils/convertAmount";
const ProjectCategory = ({ item, user, project }) => {
  const navigateToWhatsapp = () => {
    // Format the phone number by removing leading '0' (for international format)
    const formatedNum = user?.mobile?.replace("0", ""); // Example: '03123456789' becomes '3123456789'
    const projectName = project;

    // Get the current URL (excluding the protocol like 'http://')
    const url = window.location.origin;

    // Define the WhatsApp message
    const message = encodeURIComponent(
      `Hi, I am interested in the "${projectName}" project. Please guide me with more details.`
    );

    // Create the WhatsApp link (include the country code +92, but remove the leading '0' from mobile number)
    const whatsappUrl = `https://wa.me/+92${formatedNum}?text=${message}%20%20Link:%20${encodeURIComponent(
      url
    )}`;

    // Open WhatsApp (this will work both in the web app and mobile app)
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="project_category_main">
      <div className="project_category_image">
        <img src={item?.image} />
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
              <span>{convertToWords(item.downPayment)}</span>
              <span style={{ fontSize: "10px" }} className="orange">
                Down Payment
              </span>
            </div>
            <div className="project_category_itmes_pair flex_center_between">
              <span className="captlize">{item.area}. SqFt</span>
              <span style={{ fontSize: "10px" }} className="orange">
                Area
              </span>
            </div>
          </div>
        </div>

        <div className="project_category_ammenties">
          {item?.category !== "shop" ? (
            <>
              <div className="project_category_ammentt_item">
                <IoBedOutline />
                <span>{item?.category?.replace("-", " ")}</span>
              </div>
              <div className="project_category_ammentt_item">
                <MdOutlineBathroom />
                <span>{item?.bath} Bath</span>
              </div>
              <div className="project_category_ammentt_item">
                <MdOutlineSoupKitchen />
                <span>{item?.kitchen} Kitchen</span>
              </div>
            </>
          ) : (
            <div className="project_category_ammentt_item">
              <FaRegBuilding />
              {item?.floor === "Basement" || item?.floor === "Rooftop" ? (
                <span>{item?.floor}</span>
              ) : (
                <span>Floor {item?.floor}</span>
              )}
            </div>
          )}
        </div>

        <div>
          <Button
            onClick={navigateToWhatsapp}
            fullWidth
            color="secondary"
            variant="contained"
          >
            Get Payment Plan
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCategory;
