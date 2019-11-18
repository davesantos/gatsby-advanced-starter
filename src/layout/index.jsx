import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import config from "../../data/SiteConfig";
import "normalize.css";
import Footer from "../components/Footer/Footer";


export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <>

        <header>
          <Link to="/">{config.siteTitle}</Link>
        </header>

        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
        </Helmet>
        {children}
        <Footer config={config} />

      </>

    );
  }
}
