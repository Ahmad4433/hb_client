import React from "react";
import "./badge.css";
const Badge = ({ children, bg }) => {
  return (
    <div style={{ backgroundColor: bg }} className="badge">
      {children}
    </div>
  );
};

export default Badge;
