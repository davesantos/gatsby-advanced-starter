import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import config from "data/SiteConfig";
import "normalize.css";
import "./index.css";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";


export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
        </Helmet>

        <Header />

        <main>
          {children}
        </main>

        <Footer config={config} />

      </>

    );
  }
}
