import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { graphql, StaticQuery, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/global.scss';
import MainPage from "./main.js";
import Projects from "./projects.js";
import Writing from "./writing.js";


const IndexPage = () => (
  <StaticQuery
  query={graphql`
  query {
    background: file(relativePath: {eq: "blob.png"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        ...GatsbyImageSharpFluidLimitPresentationSize        }
      }
    }
  }
      `}
  render={data => {
    const imageData = data.background.childImageSharp.fluid
    return (
      <Layout>

    <SEO title="Lily Lou — Personal Site" />

        <BackgroundImage id={`background-intro`} fluid={imageData}>
          <MainPage></MainPage>
        </BackgroundImage>

        <Projects></Projects>
        <Writing></Writing>
        </Layout>

          )


  }}
  />
)
export default IndexPage
