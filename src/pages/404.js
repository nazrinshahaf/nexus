import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/404.css"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="error-main">
      <h2>:(</h2>
      <h1>404 - PAGE NOT FOUND</h1>
      <div>
        Sorry the page you're looking for might have been removed or is
        currently unavalaible.
      </div>
      <a href="/">Go to Homepage</a>
    </div>
  </Layout>
)

export default NotFoundPage
