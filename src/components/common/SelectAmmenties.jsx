import React, { useEffect, useState } from "react";
import "./selectAmmenties.css";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import useProvideGeneralHooks from "../../hooks/useProvideGeneralHooks";
import httpActions from "../../utils/httpAction";
import apis from "../../utils/apis";
const SelectAmmenties = ({ ammenity, setAmmenity, newAmmenity }) => {
  const [ammenities, setAmmenities] = useState([]);
  const { dispatch } = useProvideGeneralHooks();
  const handleChnageAmmenity = (label, event, index) => {
    const checked = event.target.checked;
    if (checked) {
      setAmmenity((prevAmmenity) => [...prevAmmenity, { title: label }]);
    } else {
      const prevAmmenity = [...ammenity];
      prevAmmenity.splice(index, 1);
      setAmmenity(prevAmmenity);
    }
  };

  useEffect(() => {
    const getAmmenities = async () => {
      const data = {
        url: apis().ammenityList,
      };
      const result = await dispatch(httpActions(data));
      if (result?.status) {
        const formatedAmmenities = result?.list?.map((item) => ({
          title: item.title,
        }));
        setAmmenities(formatedAmmenities);
      }
    };
    getAmmenities();
  }, [newAmmenity]);

  const saveHandler = () => {
    console.log(ammenity);
  };

  return (
    <FormGroup>
      {ammenities?.map((item, index) => (
        <FormControlLabel
          sx={{
            backgroundColor: "#f5f5f5",
            marginBottom: "0.6rem",
            "&:hover": {
              backgroundColor: "#e0e0e0", // Adjust the color as needed for the hover effect
            },
          }}
          control={
            <Checkbox
              onChange={(event) =>
                handleChnageAmmenity(item.title, event, index)
              }
            />
          }
          label={item.title}
        />
      ))}
    </FormGroup>
  );
};

export default SelectAmmenties;
