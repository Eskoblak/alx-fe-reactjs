import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const initialValues = {
  name: "",
  email: "",
};

const FormikForm = () => {
  const handleSubmit = (values) => {
    console.log("Form Data", values);
    alert(`Form submitted! \nName: ${values.name} \nEmail: ${values.email}`);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label>Name:</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" style={{ color: "red" }} />
        </div>

        <div>
          <label>Email:</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" style={{ color: "red" }} />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
