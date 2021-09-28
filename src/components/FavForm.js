import axios from "axios";
import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
export class FavForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: "",
      image: "",
    };
  }
  changeHndler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  submitHandler=(e)=>{
e.preventDefault();
console.log(this.state);
axios.put(`${process.env.REACT_APP_BASEURI}/updateFruit/${this.props.id}`,this.state).then(resp=>{
    console.log(resp)
})
  }
  render() {
    return (
      <div>
        <Form onSubmit={(e)=>{this.submitHandler(e)}}>
          <Form.Control
            size="lg"
            type="text"
            name="name"
            placeholder="name"
            onChange={(e) => this.changeHndler(e)}
          />
          <br />
          <Form.Control
            type="text"
            name="image"
            placeholder="image"
            size="lg"
            onChange={(e) => this.changeHndler(e)}
          />
          <br />
          <Form.Control
            size="lg"
            type="text"
            name="price"
            placeholder="price"
            onChange={(e) => this.changeHndler(e)}
          />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default FavForm;
