import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import React, { Component } from "react";
import { Card,Button } from "react-bootstrap";

export class HomeCard extends Component {
    clickHandler=()=>{
        axios.post(`${process.env.REACT_APP_BASEURI}/creatFruit/${this.props.auth0.user.email}`,this.props.data)
        .then(resp=>console.log(resp.data))
    }
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.data.image}/>
          <Card.Body>
            <Card.Title>{this.props.data.name}</Card.Title>
            <Card.Text>
              {this.props.data.price}
            </Card.Text>
            <Button variant="primary" onClick={(e)=>this.clickHandler(e)}>add to fav</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default withAuth0(HomeCard);
