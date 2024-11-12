import React, { useEffect, useState } from "react";
import "./addUser.css";
import { TextField, Button, Card } from "@mui/material";
import FileUploader from "../../common/FileUploader";
import httpActions from "../../../utils/httpAction";
import useProvideGeneralHooks from "../../../hooks/useProvideGeneralHooks";
import { getErrorElement } from "../../../utils/getErrorElement";
import apis from "../../../utils/apis";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import toast from "react-hot-toast";
const AddUser = () => {
  const { dispatch, navigate } = useProvideGeneralHooks();
  const [files, setFiles] = useState([]);

  const initialState = {
    name: "",
    mobile: "",
  };



  const validationSchema = Yup.object({
    name: Yup.string().trim().required("User name is required"),

    // Mobile number validation
    mobile: Yup.string()
      .trim()
      .required("Mobile number is required")
      .test("len", "Mobile number must be exactly 11 digits", (value) => {
        return value && value.toString().length === 11;
      }),
  });

  const submitaHandler = async (values) => {
    if (files.length === 0) {
      getErrorElement("user_create_image", "image is required");
      return;
    }

    const data = {
      url: apis().addNewUser,
      method: "POST",
      body: {
        data: { name: values.name, mobile: values.mobile, profile: files[0] },
      },
    };
    const result = await dispatch(httpActions(data));
    if (result?.status) {
      toast.success(result?.message);
    }
  };

  useEffect(() => {
    if (files.length > 0) {
      getErrorElement("user_create_image", "");
    }
  }, [files]);

  return (
    <div className="add_user_main">
      <Card sx={{ padding: "2rem" }}>
        <Formik
          initialValues={initialState}
          onSubmit={submitaHandler}
          validationSchema={validationSchema}
        >
          {({ handleBlur, handleChange, values, errors, touched }) => (
            <Form>
              <div className="row g-3">
                <div className="col-md-6">
                  <TextField
                    type="text"
                    name="name"
                    fullWidth
                    size="small"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                    label="User Name"
                  />
                </div>
                <div className="col-md-6">
                  <TextField
                    type="text"
                    name="mobile"
                    fullWidth
                    size="small"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.mobile && Boolean(errors.mobile)}
                    helperText={touched.mobile && errors.mobile}
                    value={values.mobile}
                    label="Mobile number"
                  />
                </div>
                <div className="container py-3">
                  <div className="row">
                    <div className="col-md-12 ">
                      <h5>Upload User Image</h5>
                      <span
                        className="error_message"
                        id="user_create_image"
                      ></span>
                      <FileUploader
                        files={files}
                        setFiles={setFiles}
                        count={1}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="col-md-12"
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button variant="contained" type="submit">
                    Add user
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  );
};

export default AddUser;
