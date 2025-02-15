import React, { Component } from "react";

class UserLinks extends Component {
  getLinkElements() {
    const { userLinks } = this.props.config;
    const { labeled } = this.props;
    return userLinks.map(link => (
      <a href={link.url}>{labeled ? link.label : ""}</a>
    ));
  }

  render() {
    const { userLinks } = this.props.config;
    if (!userLinks) {
      return null;
    }
    return <div>{this.getLinkElements()}</div>;
  }
}

export default UserLinks;
