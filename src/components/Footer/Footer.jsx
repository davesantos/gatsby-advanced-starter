import React, { Component } from "react";
import { Link } from "gatsby";
import UserLinks from "../UserLinks/UserLinks";

import styled from "styled-components"

const TheFoot = styled.footer`

  justify-content: center;
  align-content: center;

  .notice-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  margin-top: 25px;
  }

  @media (max-width: 640px - 1px) {
  .notice-container {
    justify-content: space-around;
  }
  }

  .notice-container h4 {
  text-align: center;
  margin: 0;
  }
`

class Footer extends Component {
  render() {
    const { config } = this.props;
    const url = config.siteRss;
    const { copyright } = config;
    if (!copyright) {
      return null;
    }
    return (
      <TheFoot>
        <UserLinks config={config} labeled />
          <h4>{copyright}</h4>

          <Link to={url}>
            <button>RSS</button>
          </Link>
      </TheFoot>
    );
  }
}

export default Footer;
