import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { graphql, StaticQuery, Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import SecondPage from "./page-2.js";
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import '../styles/global.scss';
import MainPage from "./main.js";

const IndexPage = () => (
  <StaticQuery
  query={graphql`
  query {
    background: file(relativePath: {eq: "blob.png"}) {
      childImageSharp {
        fluid(maxHeight: 1000) {
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

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <SecondPage></SecondPage>

        <SecondPage></SecondPage>
        </Layout>

          )


  }}
  />
)
export default IndexPage
