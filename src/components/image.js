import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "avatar.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)
export default Image
/* position: relative;
background: rgb(255, 255, 255);
border-radius: 5px;
box-shadow: 0 1px 10px 3px rgba(0, 0, 0, 0.18);
bottom: -60px;
padding: 30px 0;
max-width: 400px;
margin: auto;*/