import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "src/layout";
import config from "data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <div className="about-container">
          <Helmet title={`About | ${config.siteTitle}`} />

          <h1>
            Edit AboutPage component or pages/about.jsx to include your information.
          </h1>

        </div>
      </Layout>
    );
  }
}

export default AboutPage;
