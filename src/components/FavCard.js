import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import React, { Component } from "react";
import { Card,Button } from "react-bootstrap";
import FavModal from "./FavModal";

export class FavCard extends Component {
    constructor(){
        super()
        this.state={
            show:false
        }
    }
    deleteHandler=()=>{
        axios.delete(`${process.env.REACT_APP_BASEURI}/deleteFruit/${this.props.id}`)
        .then(resp=>console.log(resp.data))
    }
    setShow=(bool)=>{
        this.setState({show:bool})
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
                <Button variant="danger" onClick={(e)=>this.deleteHandler(e)}>delete</Button>
                <Button variant="warning" onClick={(e)=>this.setShow(true)}>edit </Button>
               {this.state.show&& <FavModal show={this.state.show} setShow={this.setShow} id={this.props.id}/>}
              </Card.Body>
            </Card>
          </div>
        )
    }
}

export default withAuth0(FavCard)

