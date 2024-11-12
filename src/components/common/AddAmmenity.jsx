import React from "react";
import "./addAmmenity.css";
import * as Yup from "yup";
import { Button, TextField } from "@mui/material";
import useProvideGeneralHooks from "../../hooks/useProvideGeneralHooks";
import httpActions from "../../utils/httpAction";
import apis from "../../utils/apis";
import { Formik, Form } from "formik";
import toast from "react-hot-toast";
const AddAmmenity = ({ setClose, onAddAmmenity }) => {
  const { dispatch } = useProvideGeneralHooks();
  const initialState = {
    title: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().trim().required("Title is required"),
  });

  const submitAmmenity = async (values) => {
    const data = {
      url: apis().addAmmenity,
      method: "POST",
      body: { title: values.title },
    };
    const result = await dispatch(httpActions(data));
    if (result?.status) {
      toast.success(result?.message);
      setClose(false);
      onAddAmmenity(result?.savedAmmenity);
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialState}
        validationSchema={validationSchema}
        onSubmit={submitAmmenity}
      >
        {({
          handleBlur,
          handleChange,
          errors,
          setFieldValue,
          values,
          touched,
        }) => (
          <Form>
            <div className="row g-3">
              <div className="col-12">
                <TextField
                  name="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                  error={touched.title && Boolean(errors.title)}
                  helperText={touched.title && errors.title}
                  fullWidth
                  size="small"
                  type="text"
                  label="Title"
                />
              </div>

              <div className="col-12">
                <Button variant="contained" color="secondary" type="submit">
                  Save
                </Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddAmmenity;
