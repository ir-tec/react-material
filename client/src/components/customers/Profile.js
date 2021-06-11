import React from "react";
import { Formik, Form } from "formik";
import { useHistory } from "react-router-dom";
import {
  validationSchema,
  initialValue,
} from "../../validation/FormValidation";

import { Button, Grid, Typography } from "@material-ui/core";

import profileStyles from "../../styles/profileStyles";
import { saveUserData, currentUser } from "../../redux/actions";
import Store from "../../redux/Store";
import TextFields from "../TextField";
import RadioGroups from "../RadioGroups";
const Profile = () => {
  const history = useHistory();
  const classes = profileStyles();
  return (
    <Formik
      initialValues={initialValue}
      validationSchema={validationSchema}
      onSubmit={(values, submitProps) => {
        saveUserData(values);
        submitProps.resetForm();
        document.getElementById("userBirthday").value = "";
        Store.dispatch(currentUser(values));
      }}
      validateOnMount
    >
      {(formik) => {
        return (
          <Grid container spacing={3} className={classes.profileContainer}>
            <Grid item md={12}>
              <Typography variant="body1">پروفایل</Typography>
              <Typography variant="subtitle2">مشتریان / پروفایل</Typography>
            </Grid>
            <Grid container item>
              <Grid item>
                <Typography variant="subtitle2">پروفایل</Typography>
              </Grid>
              <Grid container item>
                <Form>
                  <Grid item>
                    <TextFields name="userMobile" label="شماره موبایل" />
                  </Grid>
                  <Grid item>
                    <TextFields name="userName" label="نام و نام خانوادگی" />
                  </Grid>
                  <Grid item></Grid>
                  <Grid item>
                    <RadioGroups />
                  </Grid>
                  <Grid item>
                    <TextFields name="userJob" label="شغل" />
                  </Grid>

                  <div className="form-submit">
                    <Button
                      type="submit"
                      color="primary"
                      variant="contained"
                      disabled={formik.isValid}
                    >
                      ذخیره
                    </Button>
                    <Button
                      onClick={() => history.push("/")}
                      variant="contained"
                      color="secondary"
                    >
                      انصراف
                    </Button>
                  </div>
                </Form>
              </Grid>
            </Grid>
          </Grid>
        );
      }}
    </Formik>
  );
};

export default Profile;
