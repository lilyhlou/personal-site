import React, { useState, useEffect } from 'react';
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
    //const size = useWindowSize();

    let imageData = data.background.childImageSharp.fluid;
    //let width = size.width;
    //if (width < 533) {
    //  imageData = data.backgroundSm.childImageSharp.fluid;
    //} else if (width < 656) {
    //  imageData = data.backgroundMed.childImageSharp.fluid;
    //}


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

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

