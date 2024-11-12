import React, { useEffect, useState } from "react";
import "./addProjectCategories.css";
import { TextField, Button, Card, Autocomplete } from "@mui/material";
import useProvideGeneralHooks from "../../../hooks/useProvideGeneralHooks";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import FileUploader from "../../common/FileUploader";
import { getErrorElement } from "../../../utils/getErrorElement";
import { ArrowForward } from "@mui/icons-material";
import httpActions from "../../../utils/httpAction";
import apis from "../../../utils/apis";
import toast from "react-hot-toast";
const AddProjectCategory = () => {
  const categoriesName = ["1-bed", "2-bed", "studio", "shop"];
  const [files, setFiles] = useState([]);
  const { navigate, dispatch } = useProvideGeneralHooks();
  const [projects, setProjects] = useState([]);
  const [type, setType] = useState(null);
  const initialState = {
    project: "",
    category: "",
    downPayment: "",
    area: "",
    bath: "",
    kitchen: "",
    floor: "",
  };

  const validationSchema = Yup.object({
    project: Yup.string().trim().required("Project is required"),
    category: Yup.string().trim().required("Category is required"),
    downPayment: Yup.number().required("Down-payment is required"),
    // area: Yup.number().required("Area is required"),
    // bath: Yup.number().required("No of bath is required"),
    kitchen: Yup.number().required("No of kitchen required"),
    floor: Yup.string().required("Floor is required"),
  });

  const schema2 = Yup.object({
    project: Yup.string().trim().required("Project is required"),
    category: Yup.string().trim().required("Category is required"),
    downPayment: Yup.number().required("Down-payment is required"),
    area: Yup.number().required("Area is required"),
    bath: Yup.number().required("No of bath is required"),
    kitchen: Yup.number().required("No of kitchen required"),
    // floor: Yup.string().required("Floor is required"),
  });

  useEffect(() => {
    if (files.length > 0) {
      getErrorElement("category_image_error", "");
    }
  }, [files]);

  const submitHandler = async (values) => {
    if (files.length === 0) {
      getErrorElement("category_image_error", "image is required");
      return;
    }

    const categoryData = {
      ...values,
      image: files[0],
    };
    const data = {
      url: apis().addProjectCategory,
      method: "POST",
      body: { data: categoryData },
    };
    const result = await dispatch(httpActions(data));
    if (result?.status) {
      toast.success(result?.message);
    }
  };

  useEffect(() => {
    const getProjectDropdown = async () => {
      const data = {
        url: apis().getProjectDropdown,
      };

      const result = await dispatch(httpActions(data));
      if (result?.status) {
        const formatedProjects = result?.list?.map((item) => {
          return item.title;
        });
        setProjects(formatedProjects);
      }
    };
    getProjectDropdown();
  }, []);

  const floors = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Basement",
    "Rooftop",
  ];

  return (
    <div className="add_prject_category_main">
      <Card sx={{ padding: "2rem" }}>
        <Formik
          onSubmit={submitHandler}
          validationSchema={type === "shop" ? validationSchema : schema2}
          initialValues={initialState}
        >
          {({
            handleBlur,
            handleChange,
            touched,
            errors,
            values,
            setFieldValue,
          }) => (
            <Form>
              <div className="row g-3">
                <div className="col-md-6">
                  <Autocomplete
                    value={values.project}
                    onChange={(event, newValue) => {
                      setFieldValue("project", newValue);
                    }}
                    size="small"
                    options={projects}
                    renderInput={(params) => (
                      <TextField
                        onBlur={handleBlur}
                        error={touched.project && Boolean(errors.project)}
                        helperText={touched.project && errors.project}
                        name="project"
                        fullWidth
                        {...params}
                        label="Select Project"
                      />
                    )}
                  />
                </div>
                <div className="col-md-3">
                  <Autocomplete
                    onChange={(event, newValue) => {
                      setFieldValue("category", newValue);
                      setType(newValue);
                    }}
                    value={values.category}
                    fullWidth
                    size="small"
                    options={categoriesName}
                    renderInput={(params) => (
                      <TextField
                        onBlur={handleBlur}
                        error={touched.category && Boolean(errors.category)}
                        helperText={touched.category && errors.category}
                        name="category"
                        {...params}
                        label="Select Category"
                      />
                    )}
                  />
                </div>
                <div className="col-md-3">
                  <TextField
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.downPayment}
                    name="downPayment"
                    error={touched.downPayment && Boolean(errors.downPayment)}
                    helperText={touched.downPayment && errors.downPayment}
                    type="number"
                    label="Down Payment"
                    size="small"
                    fullWidth
                  />
                </div>
                <div className="col-md-6">
                  <TextField
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.area}
                    name="area"
                    error={touched.area && Boolean(errors.area)}
                    helperText={touched.area && errors.area}
                    size="small"
                    fullWidth
                    label="Area in SqFt"
                    type="number"
                  />
                </div>
                {values.category !== "shop" ? (
                  <>
                    <div className="col-md-3">
                      <TextField
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.bath}
                        error={touched.bath && Boolean(errors.bath)}
                        helperText={touched.bath && errors.bath}
                        size="small"
                        name="bath"
                        fullWidth
                        label="No of bath"
                        type="number"
                      />
                    </div>
                    <div className="col-md-3">
                      <TextField
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.kitchen}
                        error={touched.kitchen && Boolean(errors.kitchen)}
                        helperText={touched.kitchen && errors.kitchen}
                        name="kitchen"
                        label="No of kitchen"
                        fullWidth
                        size="small"
                        type="number"
                      />
                    </div>
                  </>
                ) : (
                  <div className="col-md-6">
                    <Autocomplete
                      options={floors}
                      onChange={(event, newValue) => {
                        setFieldValue("floor", newValue);
                      }}
                      value={values.floor}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Select floor"
                          size="small"
                          fullWidth
                          onBlur={handleBlur}
                          error={touched.floor && Boolean(errors.floor)}
                          helperText={touched.floor && errors.floor}
                          name="floor"
                        />
                      )}
                    />
                  </div>
                )}

                <div className="col-12">
                  <h6>Upload Category Image</h6>
                  <span
                    id="category_image_error"
                    className="error_message"
                  ></span>
                  <FileUploader count={1} files={files} setFiles={setFiles} />
                </div>
                <div className="col-12">
                  <div className="add_category_actions">
                    <Button type="submit" variant="contained" color="secondary">
                      Add Category
                    </Button>
                    <Button
                      onClick={() => navigate("/project/add")}
                      endIcon={<ArrowForward />}
                      variant="outlined"
                      color="secondary"
                    >
                      add new ptoject
                    </Button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  );
};

export default AddProjectCategory;
