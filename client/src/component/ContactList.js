import React, { Component } from "react";
// import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { getContact } from "../action/action";
import ContactItem from "./ContactItem";

class ContactList extends Component {
  componentDidMount() {
    this.props.getContact();
  }
  render() {
    return (
      <div>
        <div>
          {this.props.contacts.map((el) => (
            <ContactItem data={el} />
          ))}
        </div>
        {/* <Button
          onClick={() => this.props.history.goBack()}
          className="btn"
          variant="warning"
        >
          Cancel
        </Button>{" "} */}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
  };
};

export default connect(mapStateToProps, { getContact })(ContactList);
