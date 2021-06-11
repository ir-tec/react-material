import { Field } from "formik";
import React from "react";
import { TextField } from "formik-material-ui";
import profileStyles from "../styles/profileStyles";
function TextFields({ name, label }) {
  const classes= profileStyles()
  return (
    <Field
      component={TextField}
      name={name}
      label={label}
      variant="outlined"
      size="small"
      color="secondary"
      className={classes.textField}
    />
  );
}

export default TextFields;
