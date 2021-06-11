import * as actionTypes from "./actionTypes";
import axios from "axios";
import Store from "./Store";

const addUser = (user) => {
  return {
    type: actionTypes.ADD_USER,
    payload: user,
  };
};
export const currentUser = (current) => {
  return {
    type: actionTypes.CURRENT_USER,
    payload: current,
  };
};


const findAllUsers = (users) => {
  return {
    type: actionTypes.All_USERS,
    payload: users,
  };
};

export const findUser = (userObject, Cuser) => {
  return userObject.filter((user) => {
    return user.name.indexOf(Cuser) > -1 || user.job.indexOf(Cuser) > -1;
  });
};

export const saveUserData = (users) => {
  axios
    .post("https://material-reactjs.herokuapp.com/", users)
    .then((res) => {
      console.log(res.data);
      return Store.dispatch(addUser(res));
    });
};

export const findAllUser = async () => {
  await axios
    .get("https://-reactjs.herokuapp.com/allUsers")
    .then((res) => {
      return Store.dispatch(findAllUsers(res.data));
    })
    .catch((err) => {
      console.log(err.message);
    });
};
