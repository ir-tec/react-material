import { Field } from "formik";
import { RadioGroup } from "formik-material-ui";
import { FormControlLabel, Radio } from "@material-ui/core";

function RadioGroups() {
  return (
    <Field component={RadioGroup} name="userGender">
      <FormControlLabel value="آقا" control={<Radio />} label="آقا" />
      <FormControlLabel value="خانم" control={<Radio />} label="خانم" />
    </Field>
  );
}

export default RadioGroups;
