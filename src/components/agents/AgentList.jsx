import React, { useEffect, useState } from "react";
import "./agentList.css";
import { buildingImage } from "../../utils/images";
import SingleAgent from "./SingleAgent";
import { SwiperSlide } from "swiper/react";
import avatar from "../../assets/avatar.jpg";
import ProjectCategorySlider from "../projects/ProjectCategorySlider";
import httpActions from "../../utils/httpAction";
import useProvideGeneralHooks from "../../hooks/useProvideGeneralHooks";
import apis from "../../utils/apis";
const AgentList = () => {
  const [users, setUsers] = useState([]);
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

  const { dispatch, navigate } = useProvideGeneralHooks();

  useEffect(() => {
    const getUsers = async () => {
      const data = {
        url: apis().userList,
      };
      const result = await dispatch(httpActions(data));
      if (result?.status) {
        setUsers(result?.list);
      }
    };
    getUsers();
  }, []);

  return (
    <div className="agent_list_main">
      <span className="section_title">Meet Our Agents</span>
      <div className="agent_container">
        <ProjectCategorySlider show={5}>
          {users?.map((item, index) => (
            <SwiperSlide key={index}>
              <SingleAgent agent={item} />
            </SwiperSlide>
          ))}
        </ProjectCategorySlider>
      </div>
    </div>
  );
};

export default AgentList;
