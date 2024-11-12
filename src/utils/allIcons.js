// allIcons.js

import * as ReactIcons from "react-icons/fa"; // Import all FontAwesome icons
import * as ReactGiIcons from "react-icons/gi"; // Import all GameIcons

// Combine all icons from the libraries into one object
export const allIcons = {
  ...ReactIcons,
  ...ReactGiIcons,
};

// Get the names of all icons as an array of strings
export const iconNames = Object.keys(allIcons);
