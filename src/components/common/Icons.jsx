import React, { useState } from "react";
import * as ReactIcons from "react-icons/fa"; // Import all icons from react-icons
import * as ReactGiIcons from "react-icons/gi"; // Import all icons from react-icons
import { TextField } from "@mui/material";
import "./icons.css";

const Icons = () => {
  // Combine both sets of icons into one object
  const allIcons = {
    ...ReactIcons,
    ...ReactGiIcons,
  };

  // Extract all icon names from the combined object
  const iconNames = Object.keys(allIcons);

  const [icons, setIcons] = useState([]);
  const [icon, setIcon] = useState("");
  const [search, setSearch] = useState("");

  const handleChange = (value) => {
    setSearch(value.target.value);
    const foundIcons = iconNames.filter((item) => {
      // Fixed typo: changed toUpperCase to toUpperCase() for correct method
      return item.toUpperCase().includes(value.target.value.toUpperCase());
    });

    setIcons(foundIcons);
  };

  const handleClick = (name) => {
    const foundIcon = allIcons[name];
    console.log(foundIcon);
  };

  return (
    <div>
      <div>
        <TextField
          type="text"
          label="Search Icon"
          onChange={handleChange}
          value={search}
          size="small"
        />
      </div>
      <div className="icons_container">
        {icons.map((iconName) => {
          // Dynamically access the icon component from the combined icons object
          const IconComponent = allIcons[iconName];

          // If the icon is valid, render it with a FormControlLabel
          return (
            <div
              onClick={() => handleClick(iconName)}
              key={iconName}
              className="single_icon"
            >
              <IconComponent />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Icons;
