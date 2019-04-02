import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div class="fade"></div>
      <section class="star-wars">
        <div class="crawl">
          <div class="title">
            <h1>Hello</h1>
            <p>My name is Travis Simpson.</p>
          </div>
          <p>I'm a Front End Web Developer.</p>
          <p>I love to travel.</p>
          <p>And ride motorcycles.</p>
          <p>I'm also an avid Coffee Addict.</p>
        </div>
      {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
  </div> */}
      </section>
  </Layout>
)

export default IndexPage
