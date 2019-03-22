import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hello</h1>
    <p>My name is Travis Simpson.</p>
    <p>I'm a Front End Web Developer.</p>
    <p>I love to travel.</p>
    <p>And ride motorcycles.</p>
    <p>I'm also an avid Coffee Addict.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
