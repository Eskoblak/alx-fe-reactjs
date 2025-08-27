import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// ✅ Validation schema with Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

function FormikForm() {
  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Formik Registration Form</h2>

      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Form submitted:", values);
          alert("Form submitted successfully!");
          resetForm();
        }}
      >
        {() => (
          <Form>
            {/* Name Field */}
            <div>
              <Field type="text" name="name" placeholder="Name" />
              <ErrorMessage name="name" component="p" style={{ color: "red" }} />
            </div>

            {/* Email Field */}
            <div>
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="p" style={{ color: "red" }} />
            </div>

            {/* Password Field */}
            <div>
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="p" style={{ color: "red" }} />
            </div>

            {/* Submit Button */}
            <button type="submit" style={{ marginTop: "10px" }}>
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikForm;
