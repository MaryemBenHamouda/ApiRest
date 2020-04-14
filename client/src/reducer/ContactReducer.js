import { GET_CONTACT } from "../action/types";

const ContactReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CONTACT:
      return action.payload;
    default:
      return state;
  }
};
export default ContactReducer;
