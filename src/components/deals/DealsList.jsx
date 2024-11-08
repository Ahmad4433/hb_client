import React from "react";
import dealImg from "../../assets/deal.jpg";
import SingleDeal from "./SingleDeal";
import "./dealList.css";
import PagePagination from "../common/PagePagination";
import useScrollTop from "../../hooks/useScrollTop";
const DealsList = () => {
  useScrollTop();
  const deals = [
    {
      img: dealImg,
      date: new Date().toLocaleDateString(),
      type: "sale",
      item: "house",
      title: "10  marla brand new house ",
      price: 45000000,
      detail:
        "Successfully closed a deal for a brand new 10 marla house. Congratulations to our valued clients on finding their dream home!",
      location: "bahria town sector c",
      customer: "mr ali",
    },
    {
      img: dealImg,
      date: new Date().toLocaleDateString(),
      type: "sale",
      item: "house",
      title: "10  marla brand new house ",
      price: 45000000,
      detail:
        "Successfully closed a deal for a brand new 10 marla house. Congratulations to our valued clients on finding their dream home!",
      location: "bahria town sector c",
      customer: "mr ali",
    },
    {
      img: dealImg,
      date: new Date().toLocaleDateString(),
      type: "sale",
      item: "house",
      title: "10  marla brand new house ",
      price: 45000000,
      detail:
        "Successfully closed a deal for a brand new 10 marla house. Congratulations to our valued clients on finding their dream home!",
      location: "bahria town sector c",
      customer: "mr ali",
    },
    {
      img: dealImg,
      date: new Date().toLocaleDateString(),
      type: "sale",
      item: "house",
      title: "10  marla brand new house ",
      price: 45000000,
      detail:
        "Successfully closed a deal for a brand new 10 marla house. Congratulations to our valued clients on finding their dream home!",
      location: "bahria town sector c",
      customer: "mr ali",
    },
    {
      img: dealImg,
      date: new Date().toLocaleDateString(),
      type: "sale",
      item: "house",
      title: "10  marla brand new house ",
      price: 45000000,
      detail:
        "Successfully closed a deal for a brand new 10 marla house. Congratulations to our valued clients on finding their dream home!",
      location: "bahria town sector c",
      customer: "mr ali",
    },
    {
      img: dealImg,
      date: new Date().toLocaleDateString(),
      type: "sale",
      item: "house",
      title: "10  marla brand new house ",
      price: 45000000,
      detail:
        "Successfully closed a deal for a brand new 10 marla house. Congratulations to our valued clients on finding their dream home!",
      location: "bahria town sector c",
      customer: "mr ali",
    },
    {
      img: dealImg,
      date: new Date().toLocaleDateString(),
      type: "sale",
      item: "house",
      title: "10  marla brand new house ",
      price: 45000000,
      detail:
        "Successfully closed a deal for a brand new 10 marla house. Congratulations to our valued clients on finding their dream home!",
      location: "bahria town sector c",
      customer: "mr ali",
    },
  ];

  return (
    <div className="deals_main">
      <div className="deals_banner">
        <div className="deals_overlay">
          <p>Our Recent Successful Deals</p>
          <p>
            Take a look at our latest completed real estate deals, showcasing a
            range of properties sold, leased, and rented. From luxury homes to
            commercial spaces, these successful transactions highlight our
            commitment to connecting clients with their perfect property.
          </p>
        </div>
      </div>
      <div className="deals_container">
        <div>
          {deals.map((item, index) => (
            <SingleDeal item={item} key={index} />
          ))}
        </div>
        <PagePagination count={10} />
      </div>
    </div>
  );
};

export default DealsList;
