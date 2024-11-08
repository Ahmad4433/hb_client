import React from "react";
import "./about.css";
import ceo2 from "../../assets/ceo2.jpg";
import YouTubeEmbed from "../projects/YoutubeEmbed";
import BranchList from "../branches/BranchList";
import AgentList from "../agents/AgentList";
import PartnersList from "../partners/PartnersList";
const About = () => {
  return (
    <div className="about_main">
      <div className="about_banner">
        <div className="about_overlay">
          <p>About Hafiz Brothers</p>
          <p>
            With over three decades of excellence, Hafiz Brothers has been a
            trusted name in real estate since 1990. We take pride in delivering
            exceptional services in property sales, purchases, and rentals.
            Discover our commitment to quality and client satisfaction.
          </p>
        </div>
      </div>
      <div className="about_ceo_container">
        <div className="about_ceo_section">
          <div className="about_ceo_image">
            <img src={ceo2} />
          </div>
          <div className="about_content">
            <p className="about_heading">Hafiz Brothers Estate</p>
            <div className="about_established">
              <span>Since</span>
              <span>20000</span>
            </div>
            <div className="about_established">
              <span>CEO</span>
              <span>Hafiz Sajjad Anwar</span>
            </div>
            <p className="about_detail">
              Established in 2000, Hafiz Brothers Real Estate has been a trusted
              leader in the real estate industry for over two decades. Our
              agency has successfully delivered numerous projects, earning the
              trust and satisfaction of countless clients. We specialize in
              property sales, purchases, and rentals, providing tailored
              services that meet the unique needs of each client.
            </p>
            <p className="about_detail">
              At Hafiz Brothers, our reputation is built on transparency,
              reliability, and a client-first approach. Our experienced team is
              committed to guiding you through every step of your real estate
              journey, ensuring a smooth and rewarding experience. Join our
              growing list of satisfied clients and discover why Hafiz Brothers
              is the name to trust in real estate.
            </p>
          </div>
        </div>
        <div className="about_video">
          <YouTubeEmbed videoId="Cqe_Fz7Emak" />
        </div>
        <BranchList />
        <AgentList />
        <PartnersList />
      </div>
    </div>
  );
};

export default About;
