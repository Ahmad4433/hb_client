import React from "react";
import "./singleBranchItem.css";
import avatar from "../../../assets/ceo.jpg";
import { Button } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { IoLocationSharp } from "react-icons/io5";
import MapIframe from "../../projects/MapIfram";
import YouTubeEmbed from "../../projects/YoutubeEmbed";
import SingleAgent from "../../agents/SingleAgent";
import { SwiperSlide } from "swiper/react";
import ProjectCategorySlider from "../../projects/ProjectCategorySlider";
import { SiAuth0 } from "react-icons/si";

const SingleBranchItem = () => {
  const agents = [
    {
      name: "name",
      mobile: "03104641760",
      img: avatar,
      desigination: "sales executive",
    },
    {
      name: "name",
      mobile: "03104641760",
      img: avatar,
      desigination: "sales executive",
    },
    {
      name: "name",
      mobile: "03104641760",
      img: avatar,
      desigination: "sales executive",
    },
    {
      name: "name",
      mobile: "03104641760",
      img: avatar,
      desigination: "sales executive",
    },
    {
      name: "name",
      mobile: "03104641760",
      img: avatar,
      desigination: "sales executive",
    },
  ];

  return (
    <div className="single_branch_page_main">
      <div className="single_branch_page_item">
        <div className="single_branch_page_image">
          <img src={avatar} />
        </div>
        <div className="single_branch_page_content">
          <span className="section_title">Al Kabir Town Phase-2</span>
          <div className="single_branch_feature_item">
            <span>CEO</span>
            <p className="captlize orange">Noor Anwar</p>
          </div>
          <div className="single_branch_feature_item">
            <span>Established</span>
            <p>2016</p>
          </div>
          <div className="single_branch_feature_item">
            <span>
              <IoLocationSharp />
            </span>
            <p className="gray">
              15 B commercial Al Kabir Town Pahse-2 Raiwind Road Lahore
            </p>
          </div>
          <div className="sine_branch_page_auth">
            <span>Auhtorized Partner</span>
            <SiAuth0 />
          </div>
          <div className="single_branch_page_action">
            <Button
              variant="outlined"
              color="primary"
              fullWidth
              endIcon={<CallIcon />}
            >
              Call
            </Button>
            <Button
              variant="outlined"
              color="success"
              fullWidth
              endIcon={<WhatsAppIcon />}
            >
              Whatsapp
            </Button>
          </div>
        </div>
      </div>
      <div className="single_branch_page_item">
        <MapIframe />
        <YouTubeEmbed />
      </div>
      <div>
        <span className="section_title">Branch Staff</span>
        <ProjectCategorySlider show={4}>
          {agents.map((item, index) => (
            <SwiperSlide key={index}>
              <SingleAgent agent={item} />
            </SwiperSlide>
          ))}
        </ProjectCategorySlider>
      </div>
    </div>
  );
};

export default SingleBranchItem;
