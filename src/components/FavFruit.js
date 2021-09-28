import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import { FavCard } from './FavCard';
import axios from 'axios';
class FavFruit extends React.Component {
  constructor() {
    super();
    this.state={
      data: [],
    };
  }
  componentDidMount = () => {
    axios.get(`${process.env.REACT_APP_BASEURI}/user/${this.props.auth0.user.email}`).then((resp) => {
      this.setState({ data: resp.data });
      
    });
  };
  componentDidUpdate = () => {
    axios.get(`${process.env.REACT_APP_BASEURI}/user/${this.props.auth0.user.email}`).then((resp) => {
      this.setState({ data: resp.data });
 
    });
  };

  render() {
    return(
      <>
        <h1>My Favorite Fruits</h1>
        <div className="row">
          {this.state.data.map(fruit=> {
            return (
              <div className="col-lg-3" key={fruit._id} >
                <FavCard data={fruit} id={fruit._id} />
              </div>
            );
          })}
        </div>
      </>
    )
  }
}

export default withAuth0(FavFruit);
