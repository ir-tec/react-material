import React from "react";
import DatePicker from "react-multi-date-picker";

function DatePickers() {
  return (
    <DatePicker
    calendarPosition="bottom-left"
    animation
    placeholder="تاریخ تولد"
    type="input-icon"
    inputClass="datePicker"
    format="YYYY/MM/DD"
    calendar="persian"
    locale="fa"
    id="userBirthday"
    arrow={false}
    containerStyle={{ width: "70%" }}
    onFocusedDateChange={(val) => {
      // form.setFieldValue("userBirthday", val.format());
    }}
  />
  );
}

export default DatePickers;
