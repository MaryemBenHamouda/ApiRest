import { GET_CONTACT } from "./types";
import axios from "axios";

export const getContact = () => (dispatch) => {
  axios
    .get("/contacts")
    .then((res) =>
      dispatch({
        type: GET_CONTACT,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const addContact = (newcontact) => (dispatch) => {
  axios
    .post("/newcontact", newcontact)
    .then(() => dispatch(getContact()))
    .catch((err) => console.log(err));
};

export const deletContact = (id) => (dispatch) => {
  axios
    .delete(`/deletcontact/${id}`)
    .then(() => dispatch(getContact()))
    .catch((err) => console.log(err));
};

export const editContact = (id, updatecontact) => (dispatch) => {
  axios
    .put(`/modifyProduct/${id}`, updatecontact)
    .then(() => dispatch(getContact()))
    .catch((err) => console.log(err));
};
