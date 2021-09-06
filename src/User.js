import React, { Component } from "react";

export class User extends Component {
  render() {
    return <div>
        <h1>Hello! {this.props.username}</h1>
    </div>;
  }
}

export default User;
