import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { headerMenus } from "../../utils/headerMenus";
const Header = () => {
  return (
    <div className="header_main">
      <div className="header_container flex_center_between">
        <div className="header_logo">
          <h2>Logo</h2>
        </div>
        <div className="header_menus flex_row  ">
          {headerMenus.map((item, index) => {
            return (
              <Link to={item.to} key={index}>
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
