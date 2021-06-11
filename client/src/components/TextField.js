import { Field } from "formik";
import React from "react";
import { TextField } from "formik-material-ui";
function TextFields({ name, label }) {
  return (
    <Field
      component={TextField}
      name={name}
      label={label}
      variant="outlined"
      size="small"
      color="secondary"
    />
  );
}

export default TextFields;
