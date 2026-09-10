import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + "Child constructor");
    this.state = {
      userInfo: {
        name: "",
        avatar_url: "",
      },
    };
  }
  async componentDidMount() {
    console.log(this.props.name + "child comp did mount");
    //API call
    const user = await fetch("https://api.github.com/users/krishna-1234");
    const json = await user.json();
    console.log("json", json);
    this.setState({
      userInfo: json,
    });
    this.timer = setInterval(() => {
        console.log("NAMASTE REACT OP")
    }, 1000);
  }
  componentDidUpdate() {
    console.log("DID UPDATE");
  }
  componentWillUnmount() {
    console.log("WILL UNMOUNT");
    clearInterval(this.timer);
  }
  render() {
    console.log(this.props.name + "Child render");
    const { userInfo } = this.state;
    return (
      <div className="user-card">
        <img src={userInfo.avatar_url} />
        <h2>{userInfo.login}</h2>
        <h3>Location: {this.props.location}</h3>
      </div>
    );
  }
}

export default UserClass;
