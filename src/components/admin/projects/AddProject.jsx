import React, { useEffect, useRef, useState } from "react";
import CustomModal from "../../common/CustomModal";
import AddAmmenity from "../../common/AddAmmenity";
import useProvideGeneralHooks from "../../../hooks/useProvideGeneralHooks";
import SelectAmmenties from "../../common/SelectAmmenties";
import { getErrorElement } from "../../../utils/getErrorElement";
import FileUploader from "../../common/FileUploader";
import httpActions from "../../../utils/httpAction";
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
import apis from "../../../utils/apis";
import toast from "react-hot-toast";

// Define the Yup validation schema
const validationSchema = Yup.object({
  title: Yup.string().trim().required("Title is required"),
  address: Yup.string().trim().required("Address is required"),
  down_payment: Yup.number()

    .required("Down payment is required")
    .positive("Must be a positive number"),
  building_area: Yup.number()

    .required("Building area is required")
    .positive("Building area must be a positive number"),
  unit: Yup.string().trim().required("Unit is required"),
  video_url: Yup.string().trim().required("Video url required"),
  map_url: Yup.string().trim().required("Map location url is required"),
  user: Yup.string().trim().required("User is required"),
});

const AddProject = () => {
  const { navigate, dispatch } = useProvideGeneralHooks();
  const [users, setUsers] = useState([]);
  const [ammenity, setAmmenity] = useState([]);
  const [files, setFiles] = useState([]);
  const [newAmmenity, setNewAmmenity] = useState("");
  const initialValues = {
    title: "",
    address: "",
    down_payment: "",
    building_area: "",
    unit: "marla",
    video_url: "",
    map_url: "",
    user: "",
  };

  const [openAddAmmenityModal, setOpenAddAmmenityModal] = useState(false);

  const closeAddAmmenityModel = () => {
    setOpenAddAmmenityModal(false);
  };

  const units = ["marla", "kanal", "sqft"];

  useEffect(() => {
    const getUsers = async () => {
      const data = {
        url: apis().getUserDropdown,
        method: "GET",
      };
      const result = await dispatch(httpActions(data));
      if (result?.status) {
        setUsers(result?.list);
      }
    };
    getUsers();
  }, []);

  useEffect(() => {
    if (ammenity.length > 0) {
      getErrorElement("ammenity_name", "");
    }
    if (files.length > 0) {
      getErrorElement("project_image", "");
    }
  }, [ammenity, files]);

  const onSubmit = async (values) => {
    if (ammenity.length === 0) {
      getErrorElement("ammenity_name", "ammenties are required");
      return;
    }
    if (files.length === 0) {
      getErrorElement("project_image", "Elevation images required");
      return;
    }

    const data = {
      title: values.title,
      buildingArea: values.building_area + " " + values.unit,
      downPayment: values.down_payment,
      mapUrl: values.map_url,
      videoUrl: values.video_url,
      address: values.address,
      elevation: files,
      ammenity: ammenity,
      user: values.user,
    };

    const data2 = {
      url: apis().addProject,
      method: "POST",
      body: { data: data },
    };
    const result = await dispatch(httpActions(data2));
    if (result?.status) {
      toast.success(result?.message);
    }
  };

  const onAddAmmenity = (newAmm) => {
    setNewAmmenity(newAmm);
  };

  return (
    <div className="add_project_main">
      <div className="add_project_header">
        <div>
          <Button
            onClick={() => setOpenAddAmmenityModal(true)}
            variant="contained"
            color="secondary"
          >
            Add New Ammenity
          </Button>
        </div>
        <div>
          <Button variant="outlined">View All Projects</Button>
        </div>
        <div>
          <Button
            variant="outlined"
            onClick={() => navigate("/project/category/add")}
          >
            Add New Category
          </Button>
        </div>
        <div>
          <Button
            onClick={() => navigate("/user/add")}
            variant="outlined"
            color="secondary"
          >
            Add new User
          </Button>
        </div>
      </div>
      <CustomModal
        show={openAddAmmenityModal}
        onClose={closeAddAmmenityModel}
        title="Add New Ammenity"
      >
        <AddAmmenity
          onAddAmmenity={onAddAmmenity}
          setClose={setOpenAddAmmenityModal}
        />
      </CustomModal>
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
                  <div className="col-md-4">
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
                  <div className="col-md-4">
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
                  <div className="col-md-4">
                    <Autocomplete
                      options={users}
                      onChange={(event, newValue) => {
                        setFieldValue("user", newValue);
                      }}
                      value={values.user}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          fullWidth
                          onBlur={handleBlur}
                          size="small"
                          error={touched.user && Boolean(errors.user)}
                          helperText={touched.user && errors.user}
                          name="user"
                          label="select user"
                        />
                      )}
                    />
                  </div>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="py-2">
                        <h5>Select Ammenties</h5>
                      </div>
                      <div className="col-md-6">
                        <span
                          id="ammenity_name"
                          className="error_message"
                        ></span>
                      </div>
                      <div className="px-2">
                        <SelectAmmenties
                          newAmmenity={newAmmenity}
                          ammenity={ammenity}
                          setAmmenity={setAmmenity}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="py-2">
                        <h5>Upload Elevations</h5>
                      </div>

                      <div>
                        <span
                          id="project_image"
                          className="error_message"
                        ></span>
                      </div>
                      <FileUploader
                        multiple={true}
                        files={files}
                        setFiles={setFiles}
                        count={8}
                      />
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-end">
                  <Button type="submit" variant="contained" color="primary">
                    Save Project
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>

        <div className="row">
          <div className="col-6 mx-4"></div>
        </div>
      </Card>
    </div>
  );
};

export default AddProject;
