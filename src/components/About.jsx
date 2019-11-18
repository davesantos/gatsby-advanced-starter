import React, { Component } from "react";
import styled from "styled-components"


const About = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  min-height: 300px;
  color: red;
`

class AboutPage extends Component {
  render() {
    return (
      <About>
        <h1>
          Edit AboutPage component or pages/about.jsx to include your information.
        </h1>
      </About>
    );
  }
}

export default AboutPage;
