// src/App.jsx
import React from "react";
import FormikForm from "./components/formikForm";   
import RegistrationForm from "./components/RegistrationForm"; 

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>React Form Handling</h1>

      {/* Simple Formik demo form */}
      <FormikForm />

      <hr style={{ margin: "20px 0" }} />

      {/* Full Registration form */}
      <RegistrationForm />
    </div>
  );
}

export default App;
