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
import About from "./about.js";


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
    backgroundMed: file(relativePath: {eq: "blob-med.png"}) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        ...GatsbyImageSharpFluidLimitPresentationSize        }
      }
    }
    backgroundSm: file(relativePath: {eq: "blob-sm.png"}) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        ...GatsbyImageSharpFluidLimitPresentationSize        }
      }
    }

  }
      `}
  render={data => {
    let imageData = data.background.childImageSharp.fluid;
    let width = window.innerWidth;
    if (width < 533) {
      imageData = data.backgroundSm.childImageSharp.fluid;
    } else if (width < 656) {
      imageData = data.backgroundMed.childImageSharp.fluid;
    }


    return (
      <Layout>

    <SEO title="Lily Lou — Personal Site" />
        <BackgroundImage id={`background-intro`} fluid={imageData}>
          <MainPage></MainPage>
        </BackgroundImage>

        <Projects></Projects>
        <Writing></Writing>
        <About></About>

        </Layout>

          )


  }}
  />
)
export default IndexPage
