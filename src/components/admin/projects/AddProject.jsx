import React from "react";
import Icons from "../../common/Icons";
import {
  Button,
  TextField,
  Card,
  Autocomplete,
  InputAdornment,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./addProject.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Define the Yup validation schema
const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  address: Yup.string().required("Address is required"),
  down_payment: Yup.number()
    .required("Down payment is required")
    .positive("Must be a positive number"),
  building_area: Yup.number()
    .required("Building area is required")
    .positive("Building area must be a positive number"),
  unit: Yup.string().required("Unit is required"),
  video_url: Yup.string().required("Video url required"),
  map_url: Yup.string().required("Map location url is required"),
});

const AddProject = () => {
  const initialValues = {
    title: "",
    address: "",
    down_payment: "",
    building_area: "",
    unit: "marla",
    video_url: "",
    map_url: "",
  };

  const onSubmit = (values) => {
    console.log("Form Data:", values);
  };

  const units = ["marla", "kanal", "sqft"];

  return (
    <div className="add_project_main">
      <Card>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({
            handleChange,
            handleBlur,
            values,
            errors,
            touched,
            setFieldValue,
          }) => (
            <Form>
              <div className="aadd_project_items">
                <div className="row mb-3 g-3">
                  <div className="col-12">
                    <TextField
                      label="Title"
                      name="title"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.title && Boolean(errors.title)}
                      helperText={touched.title && errors.title}
                      fullWidth
                      size="small"
                    />
                  </div>

                  <div className="col-12 ">
                    <TextField
                      label="Address"
                      name="address"
                      value={values.address}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.address && Boolean(errors.address)}
                      helperText={touched.address && errors.address}
                      fullWidth
                      size="small"
                    />
                  </div>
                </div>

                <div className="row mb-3 g-3">
                  <div className="col-md-4">
                    <TextField
                      type="number"
                      label="Down Payment %"
                      name="down_payment"
                      value={values.down_payment}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.down_payment && Boolean(errors.down_payment)
                      }
                      helperText={touched.down_payment && errors.down_payment}
                      fullWidth
                      size="small"
                    />
                  </div>

                  <div className="col-md-4">
                    <TextField
                      type="number"
                      label="Building Area"
                      name="building_area"
                      value={values.building_area}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        touched.building_area && Boolean(errors.building_area)
                      }
                      helperText={touched.building_area && errors.building_area}
                      fullWidth
                      size="small"
                    />
                  </div>

                  <div className="col-md-4">
                    <Autocomplete
                      options={units}
                      value={values.unit}
                      onChange={(event, newValue) => {
                        setFieldValue("unit", newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Select Unit"
                          name="unit"
                          onBlur={handleBlur}
                          error={touched.unit && Boolean(errors.unit)}
                          helperText={touched.unit && errors.unit}
                          fullWidth
                          size="small"
                        />
                      )}
                    />
                  </div>
                </div>

                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <TextField
                      slotProps={{
                        input: {
                          endAdornment: (
                            <InputAdornment position="end">
                              <YouTubeIcon sx={{ color: "red" }} />
                            </InputAdornment>
                          ),
                        },
                      }}
                      name="video_url" // Make sure name matches with validation and initialValues
                      type="text"
                      label="video URL"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.video_url}
                      error={touched.video_url && Boolean(errors.video_url)}
                      helperText={touched.video_url && errors.video_url}
                      fullWidth
                      size="small"
                    />
                  </div>
                  <div className="col-md-6">
                    <TextField
                      slotProps={{
                        input: {
                          endAdornment: (
                            <InputAdornment position="end">
                              <LocationOnIcon sx={{ color: "#4A89F3" }} />
                            </InputAdornment>
                          ),
                        },
                      }}
                      name="map_url"
                      value={values.map_url}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.map_url && Boolean(errors.map_url)}
                      helperText={touched.map_url && errors.map_url}
                      label="map location URL"
                      fullWidth
                      size="small"
                    />
                  </div>
                </div>
                <Icons />
                <Button type="submit" variant="contained" color="primary">
                  Save
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  );
};

export default AddProject;
