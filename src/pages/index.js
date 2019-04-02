import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          <h1 class="grow">Hello</h1>
          <p class="grow">My name is Travis Simpson.</p>
          <p class="grow">I'm a Front End Web Developer.</p>
          <p class="grow">I love to travel.</p>
          <p class="grow">And ride motorcycles.</p>
          <p class="grow">I'm also an avid Coffee Addict.</p>
      {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
  </div> */}
  </Layout>
)

export default IndexPage
