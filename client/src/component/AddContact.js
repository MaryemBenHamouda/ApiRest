import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { addContact } from "../action/action";

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="formGroupEmail">
            <Form.Label className="lab">Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              name="name"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label className="lab">Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formGroupEmail">
            <Form.Label className="lab">Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              name="phone"
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button
            className="btn"
            variant="success"
            onClick={() => this.props.addContact(this.state)}
          >
            ADD
          </Button>{" "}
          <Button
            onClick={() => this.props.history.goBack()}
            className="btn"
            variant="warning"
          >
            Cancel
          </Button>{" "}
        </Form>
      </div>
    );
  }
}

export default connect(null, { addContact })(AddContact);
