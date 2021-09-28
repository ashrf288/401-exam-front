import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import HomeCard from "./HomeCard";

class Home extends React.Component {
  constructor() {
    super();
    this.state={
      data: [],
    };
  }
  componentDidMount = () => {
    axios.get(process.env.REACT_APP_BASEURI).then((resp) => {
      this.setState({ data: resp.data });
      console.log(this.state.data);
    });
  };

  render() {
    return (
      <>
        <h1>API Fruits</h1>
        <div className="row">
          {this.state.data.map((fruit,index) => {
            return (
              <div className="col-lg-3" key={index}>
                <HomeCard data={fruit} />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Home;
