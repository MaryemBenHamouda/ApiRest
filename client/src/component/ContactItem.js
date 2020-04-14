import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { deletContact } from "../action/action";
import { Link } from "react-router-dom";

class ContactItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="d-felx flex-wrap cart">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{this.props.data.name}</Card.Title>
            <Card.Text>{this.props.data.email}</Card.Text>
            <Card.Text>{this.props.data.phone}</Card.Text>
            <Link to={`/editcontact/${this.props.data._id}`}>
              <Button variant="primary">Edit</Button>
            </Link>

            <Button
              variant="danger"
              onClick={() => this.props.deletContact(this.props.data._id)}
            >
              Delete
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default connect(null, { deletContact })(ContactItem);
