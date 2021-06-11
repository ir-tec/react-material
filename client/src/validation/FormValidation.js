// import * as Yup from "yup-phone"
import * as Yup from "yup";

export const validationSchema = Yup.object({
  userMobile: Yup.string()
    .min(10, "شماره اشتباه است")
    .required("شماره را وارد کنید"),
  userName: Yup.string().required("نام خود را وارد کنید"),
  userEmail: Yup.string()
    .email("ایمیل را صحیح وارد کنید")
    .required("ایمیل را وارد کنید"),
  userGender: Yup.string().required("جنسیت خود را وارد کنید"),

  userJob: Yup.string().required("شغل خود را وارد کنید"),
});

export const initialValue = {
  userMobile: "",
  userName: "",
  userEmail: "",
  userGender: "",
  userBirthday: "",
  userJob: "",
};
