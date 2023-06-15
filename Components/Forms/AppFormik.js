import { View, Text } from "react-native";
import React from "react";
import { Formik } from "formik";

const AppFormik = ({initialValues, onSubmit, validationSchema, children}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <>{children}</>
    </Formik>
  );
};

export default AppFormik;
