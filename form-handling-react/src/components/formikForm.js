import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  const initialValues = { name: "", email: "", password: "" };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values) => {
    console.log("Formik form submitted:", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <h2>Formik Registration Form</h2>

        <Field type="text" name="name" placeholder="Name" />
        <ErrorMessage name="name" component="p" style={{ color: "red" }} />

        <Field type="email" name="email" placeholder="Email" />
        <ErrorMessage name="email" component="p" style={{ color: "red" }} />

        <Field type="password" name="password" placeholder="Password" />
        <ErrorMessage name="password" component="p" style={{ color: "red" }} />

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}

export default FormikForm;
