import React from "react";
import "./listingDetail.css";
import { buildingImage } from "../../utils/images";
import ProjectCategorySlider from "../projects/ProjectCategorySlider";
import { SwiperSlide } from "swiper/react";
import { Rating, Button } from "@mui/material";
import convertToWords from "../../utils/convertAmount";
import { LuAreaChart } from "react-icons/lu";
import { BiBath } from "react-icons/bi";
import { MdOutlineBed } from "react-icons/md";
import { TbToolsKitchen3 } from "react-icons/tb";
import { LiaParkingSolid } from "react-icons/lia";
import { MdOutlineElevator } from "react-icons/md";
import { FaSwimmingPool, FaWifi } from "react-icons/fa";
import { GiGymBag, GiCctvCamera } from "react-icons/gi";
import ProjectAmmenties from "../projects/ProjectAmmenties";
import YouTubeEmbed from "../projects/YoutubeEmbed";
import MapIframe from "../projects/MapIfram";
import ReviewList from "../reviews/ReviewList";
import ListingList from "../listings/ListingList";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import useScrollTop from "../../hooks/useScrollTop";
const ListingDetail = () => {
  useScrollTop();

  const projectAmenities = [
    { title: "Double Elevator", icon: <MdOutlineElevator /> },
    { title: "Dedicated Parking", icon: <LiaParkingSolid /> },
    { title: "Swimming Pool", icon: <FaSwimmingPool /> },
    { title: "Wi-Fi", icon: <FaWifi /> },
    { title: "Gymnasium", icon: <GiGymBag /> },
    { title: "CCTV Surveillance", icon: <GiCctvCamera /> },
    { title: "CCTV Surveillance", icon: <GiCctvCamera /> },
    { title: "CCTV Surveillance", icon: <GiCctvCamera /> },
    { title: "CCTV Surveillance", icon: <GiCctvCamera /> },
  ];

  return (
    <div className="listing_detail_main">
      <div className="listing_detail_container">
        <div className="listing_detail_galary">
          <ProjectCategorySlider show={1}>
            {buildingImage.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="listing_detail_galary_image">
                  <img src={item} />
                </div>
              </SwiperSlide>
            ))}
          </ProjectCategorySlider>
        </div>
        <div className="listing_detail_content_section">
          <div className="listing_detail_content">
            <p className="listing_detail_title">
              10 marla brand new modern house for sale in bahria town lahore
            </p>
            <div className="listing_detail_pricing">
              <span>Price</span>
              <p className="listing_detail_price">{convertToWords(45000000)}</p>
            </div>

            <div className="listing_detail_location">
              <span>Location:</span>
              <p>bahria town sector c lahore</p>
            </div>

            <div className="listing_detail_features">
              <div className="listing_detail_feature">
                <div className="listing_detail_feature_pair">
                  <BiBath />
                  <span>BathRoom</span>
                </div>
                <span className="listing_detail_feature_count">4</span>
              </div>
              <div className="listing_detail_feature">
                <div className="listing_detail_feature_pair">
                  <MdOutlineBed />
                  <span>BedRoom</span>
                </div>
                <span className="listing_detail_feature_count">4</span>
              </div>
              <div className="listing_detail_feature">
                <div className="listing_detail_feature_pair">
                  <LuAreaChart />
                  <span>Area</span>
                </div>
                <span className="listing_detail_feature_count">10 Marla</span>
              </div>
              <div className="listing_detail_feature">
                <div className="listing_detail_feature_pair">
                  <TbToolsKitchen3 />
                  <span>Kitchen</span>
                </div>
                <span className="listing_detail_feature_count">4</span>
              </div>
            </div>
            <div className="listing_detail_section">
              <span>Detail</span>
              <p className="listing_detail_detail">
                This beautiful house is located in a prime and peaceful
                neighborhood, offering spacious living with multiple bedrooms
                and bathrooms. It features a modern kitchen and open, well-lit
                living spaces, perfect for comfortable family living. The
                property includes ample parking and a landscaped garden, adding
                charm and convenience. Situated close to schools, shopping
                centers, and public transport, it ensures easy access to
                essential amenities. The house is move-in ready, showcasing
                high-quality finishes throughout.
              </p>
            </div>
            <span className="section_title">Ammenties</span>
            <div className="single_project_ammenties">
              {projectAmenities.map((item, index) => (
                <ProjectAmmenties item={item} key={index} />
              ))}
            </div>
          </div>
          <div className="listing_detail_contact">
            <div className="flex_center_between">
              <span className="small gray captlize">Rating</span>
              <Rating size="small" defaultValue={5} readOnly />
            </div>
            <div className="flex_center_between">
              <span className="small gray">Reviews</span>
              <span>55</span>
            </div>
            <div className="flex_center_between">
              <span className="small gray">Listed At</span>
              <span>{new Date().toLocaleDateString()}</span>
            </div>
            <div className="flex_center_between">
              <span className="small gray">Purpose</span>
              <span className="orange">Sale</span>
            </div>

            <div className="listing_contact_actions">
              <span className="section_title">Contact Now</span>
              <Button
                endIcon={<PhoneOutlinedIcon />}
                variant="outlined"
                color="primary"
                fullWidth
              >
                call
              </Button>
              <Button
                endIcon={<WhatsAppIcon />}
                variant="outlined"
                color="success"
                fullWidth
              >
                whatsapp
              </Button>
            </div>
          </div>
        </div>
        <div className="listing_detail_visual">
          <div className="single_project_video">
            <span className="section_title">Site Video</span>
            <YouTubeEmbed videoId="Cqe_Fz7Emak" />
          </div>
          <div className="project_map_location">
            <span className="section_title">Location</span>
            <MapIframe />
          </div>
        </div>

        <ListingList title="Related" />
        <ReviewList show={4} />
      </div>
    </div>
  );
};

export default ListingDetail;
