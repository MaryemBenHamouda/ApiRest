import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { editContact } from "../action/action";

class EditContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
    };
  }
  componentDidMount() {
    let contac = this.props.contact.filter(
      (el) => String(el._id) === this.props.match.params.id
    );
    this.setState(contac[0]);
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
              value={this.state.name}
            />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label className="lab">Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </Form.Group>
          <Form.Group controlId="formGroupEmail">
            <Form.Label className="lab">Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              name="phone"
              onChange={this.handleChange}
              value={this.state.phone}
            />
          </Form.Group>
          <Button
            className="btn"
            variant="success"
            onClick={() =>
              this.props.editContact(this.state._id, {
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
              })
            }
          >
            Confirm
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
const mapStateToProps = (state) => {
  return { contact: state.contacts };
};

export default connect(mapStateToProps, { editContact })(EditContact);
