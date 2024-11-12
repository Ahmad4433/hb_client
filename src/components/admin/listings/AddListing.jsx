import React, { useEffect, useState } from "react";
import "./addListing.css";
import {
  Button,
  TextField,
  Autocomplete,
  Card,
  InputAdornment,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FileUploader from "../../common/FileUploader";
import SelectAmmenties from "../../common/SelectAmmenties";
import useProvideGeneralHooks from "../../../hooks/useProvideGeneralHooks";
import apis from "../../../utils/apis";
import httpActions from "../../../utils/httpAction";
import { getErrorElement } from "../../../utils/getErrorElement";
import * as Yup from "yup";
import { Formik, Form } from "formik";
const AddListing = () => {
  const [files, setFiles] = useState([]);
  const { dispatch, navigate } = useProvideGeneralHooks();
  const [ammenities, setAmmenities] = useState([]);
  const [users, setUsers] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      const data = {
        url: apis().getUserDropdown,
      };

      const result = await dispatch(httpActions(data));
      if (result?.status) {
        setUsers(result?.list);
      }
    };
    getUsers();
  }, []);

  const initialState = {
    title: "",
    area: "",
    bed: "",
    bath: "",
    address: "",
    detail: "",
    price: "",
    purpose: "",
    videoUrl: "",
    mapUrl: "",
    user: "",
    type: "",
    branch: "",
    unit: "",
    kitchen: "",
  };

  const validationSchmea = Yup.object({
    title: Yup.string().trim().required("Title is required"),
    area: Yup.number().required("Area is required"),
    bed: Yup.number().required("no of bed required"),
    bath: Yup.number().required("no of bath required"),
    price: Yup.number().required("Price is required"),
    purpose: Yup.string().trim().required("purpose is required"),
    detail: Yup.string().trim().required("Detail is required"),
    videoUrl: Yup.string().trim().required("Video url is required"),
    mapUrl: Yup.string().trim().required("Map url is required"),
    user: Yup.string().trim().required("User is required"),
    branch: Yup.string().trim().required("Branch is required"),
    type: Yup.string().trim().required("Type is required"),
    unit: Yup.string().trim().required("Unit is required"),
    address: Yup.string().trim().required("Address is required"),
    kitchen: Yup.number().required("no of kitchen required"),
  });

  const submitHandler = (values) => {};

  const propertyPurpose = ["rent", "sale"];
  const propertyType = ["house", "upper portion", "lower portion", "apartment"];
  const branches = ["bahria", "al kabir town"];
  const units = ["Marla", "Kanal", "SqFt"];
  return (
    <div className="add_listing_main">
      <Card sx={{ padding: "2rem" }}>
        <Formik
          initialValues={initialState}
          validationSchema={validationSchmea}
          onSubmit={submitHandler}
        >
          {({
            handleBlur,
            handleChange,
            errors,
            values,
            touched,
            setFieldValue,
          }) => (
            <Form>
              <div className="row g-3">
                <div className="col-12">
                  <TextField
                    type="text"
                    fullWidth
                    size="small"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.title}
                    error={touched.title && Boolean(errors.title)}
                    helperText={touched.title && errors.title}
                    name="title"
                    label="Title"
                  />
                </div>
                <div className="col-md-4">
                  <Autocomplete
                    options={propertyPurpose}
                    value={values.purpose}
                    onChange={(event, newValue) => {
                      setFieldValue("purpose", newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        type="text"
                        fullWidth
                        size="small"
                        // onChange={handleChange}
                        onBlur={handleBlur}
                        // value={values.title}
                        error={touched.purpose && Boolean(errors.purpose)}
                        helperText={touched.purpose && errors.purpose}
                        name="purpose"
                        label="Select purpose"
                      />
                    )}
                  />
                </div>
                <div className="col-md-4">
                  <Autocomplete
                    options={propertyType}
                    value={values.type}
                    onChange={(event, newValue) => {
                      setFieldValue("type", newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        type="text"
                        {...params}
                        fullWidth
                        size="small"
                        // onChange={handleChange}
                        onBlur={handleBlur}
                        // value={values.title}
                        error={touched.type && Boolean(errors.type)}
                        helperText={touched.type && errors.type}
                        name="type"
                        label="Select type"
                      />
                    )}
                  />
                </div>
                <div className="col-md-4">
                  <Autocomplete
                    options={branches}
                    value={values.branch}
                    onChange={(event, newValue) => {
                      setFieldValue("branch", newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        type="text"
                        {...params}
                        fullWidth
                        size="small"
                        // onChange={handleChange}
                        onBlur={handleBlur}
                        // value={values.branch}
                        error={touched.branch && Boolean(errors.branch)}
                        helperText={touched.branch && errors.branch}
                        name="branch"
                        label="Select branch"
                      />
                    )}
                  />
                </div>
                <div className="col-md-4">
                  <TextField
                    type="number"
                    fullWidth
                    size="small"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.bed}
                    error={touched.bed && Boolean(errors.bed)}
                    helperText={touched.bed && errors.bed}
                    name="bed"
                    label="Bed"
                  />
                </div>
                <div className="col-md-4">
                  <TextField
                    type="number"
                    fullWidth
                    size="small"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.bath}
                    error={touched.bath && Boolean(errors.bath)}
                    helperText={touched.bath && errors.bath}
                    name="bath"
                    label="Bath"
                  />
                </div>
                <div className="col-md-4">
                  <TextField
                    type="number"
                    fullWidth
                    size="small"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.kitchen}
                    error={touched.kitchen && Boolean(errors.kitchen)}
                    helperText={touched.kitchen && errors.kitchen}
                    name="kitchen"
                    label="kitchen"
                  />
                </div>
                <div className="col-md-3">
                  <TextField
                    type="text"
                    fullWidth
                    size="small"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.area}
                    error={touched.area && Boolean(errors.area)}
                    helperText={touched.area && errors.area}
                    name="area"
                    label="Area"
                  />
                </div>
                <div className="col-md-3">
                  <Autocomplete
                    value={values.unit}
                    options={units}
                    onChange={(event, newValue) => {
                      setFieldValue("unit", newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        type="text"
                        {...params}
                        fullWidth
                        size="small"
                        // onChange={handleChange}
                        onBlur={handleBlur}
                        // value={values.title}
                        error={touched.unit && Boolean(errors.unit)}
                        helperText={touched.unit && errors.unit}
                        name="unit"
                        label="Select unit"
                      />
                    )}
                  />
                </div>
                <div className="col-md-6">
                  <TextField
                    type="text"
                    fullWidth
                    size="small"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address}
                    error={touched.address && Boolean(errors.address)}
                    helperText={touched.address && errors.address}
                    name="address"
                    label="Address"
                  />
                </div>
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
                    type="text"
                    fullWidth
                    size="small"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.videoUrl}
                    error={touched.videoUrl && Boolean(errors.videoUrl)}
                    helperText={touched.videoUrl && errors.videoUrl}
                    name="videoUrl"
                    label="Video url"
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
                    type="text"
                    fullWidth
                    size="small"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.mapUrl}
                    error={touched.mapUrl && Boolean(errors.mapUrl)}
                    helperText={touched.mapUrl && errors.mapUrl}
                    name="mapUrl"
                    label="Map url"
                  />
                </div>
                <div>
                  <Button variant="contained">Save</Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  );
};

export default AddListing;
