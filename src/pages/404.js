import React from "react"

import Helmet from "react-helmet";
import Layout from "src/layout";
import config from "data/SiteConfig";

const NotFoundPage = () => (
  <Layout>
  <Helmet title={`Not Found | ${config.siteTitle}`} />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
