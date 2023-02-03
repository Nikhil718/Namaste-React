import React from "react";
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: {
        name: "Dummy name",
        location: "Dummy location",
      },
    };
  }

  async componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Nikhil op");
    }, 1000);
    console.log("Child-ComponentDidMount" + this.props.name);
  }
  componentDidUpdate() {
    console.log("Child-componentDidUpdate");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Child-ComponentWillUnmount");
  }
  render() {
    console.log("Child-render" + this.props.name);
    return (
      <div>
        <h4>this is a profile</h4>
        <img src={this.state.userinfo.avatar_url}></img>
        <h3>Name: {this.state.userinfo.name} </h3>
        <h3>Location: {this.state.userinfo.location} </h3>
      </div>
    );
  }
}
export default Profile;
