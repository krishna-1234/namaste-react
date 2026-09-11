import React from "react";
import User from "../User";
import UserClass from "../UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log(" Parent constructor");
  }
  componentDidMount(){
        console.log("Parent  comp did mount");
    }
  render() {
    console.log("parent render");
    return (
      <>
        <h1>About Us page</h1>
        <UserClass name="one-1" location="Noida" />
      </>
    );
  }
}

export default About;
