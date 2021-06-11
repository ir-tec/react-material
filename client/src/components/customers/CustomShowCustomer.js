import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Visibility } from "@material-ui/icons";

const CustomShowCustomer = (props) => {
  const { mobile, name, email, gender, birthDay, job } = props;

  return (
    <Popup
      contentStyle={{
        backgroundColor: "white",
        width: "40%",
        height: "fit-content",
        fontFamily: "vasir",
        fontSize: "12px",
        direction: "rtl",
        fontWeight: "1",
        boxShadow: "0 0 5px #333",
      }}
      trigger={
        <span style={{ width: "100%" }}>
          <Visibility color="primary" />
        </span>
      }
      position="top left"
    >
      <div className="customShowCustomer">
        <h3>نام : {name}</h3>
        <h3>شماره تلفن : {mobile}</h3>
        <h3>ایمیل : {email}</h3>
        <h3>جنیست : {gender}</h3>
        <h3>تاریخ :{birthDay}</h3>
        <h3>شغل : {job}</h3>
      </div>
    </Popup>
  );
};

export default CustomShowCustomer;
