// src/components/RegistrationForm.jsx
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// ✅ Validation schema
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  terms: Yup.boolean().oneOf([true], "You must accept the terms"),
});

function RegistrationForm() {
  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>User Registration</h2>

      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          terms: false,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Registered User:", values);
          alert("Registration Successful!");
          resetForm();
        }}
      >
        {() => (
          <Form>
            {/* Name */}
            <div>
              <Field type="text" name="name" placeholder="Name" />
              <ErrorMessage name="name" component="p" style={{ color: "red" }} />
            </div>

            {/* Email */}
            <div>
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="p" style={{ color: "red" }} />
            </div>

            {/* Password */}
            <div>
              <Field type="password" name="password" placeholder="Password" />
              <ErrorMessage name="password" component="p" style={{ color: "red" }} />
            </div>

            {/* Confirm Password */}
            <div>
              <Field type="password" name="confirmPassword" placeholder="Confirm Password" />
              <ErrorMessage name="confirmPassword" component="p" style={{ color: "red" }} />
            </div>

            {/* Terms */}
            <div>
              <label>
                <Field type="checkbox" name="terms" />
                Accept Terms & Conditions
              </label>
              <ErrorMessage name="terms" component="p" style={{ color: "red" }} />
            </div>

            <button type="submit" style={{ marginTop: "10px" }}>
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default RegistrationForm;
