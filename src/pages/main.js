import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import BackgroundImage from "gatsby-background-image"
import '../styles/global.scss';
import Typewriter from 'typewriter-effect';
import GraphemeSplitter from "grapheme-splitter";
import { graphql, useStaticQuery } from "gatsby"

export default function MainPage() {
  const stringSplitter = string => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };
  
  const size = useWindowSize();
  console.log(size);
  const data = useStaticQuery(graphql`
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
  `)
  let sizeImg; 
  let width = size.width;
  if (width < 533) {
    sizeImg = data.backgroundSm.childImageSharp.fluid;
  } else if (width < 656) {
    sizeImg = data.backgroundMed.childImageSharp.fluid;
  } else {
    sizeImg = data.background.childImageSharp.fluid;
  }
console.log(sizeImg);
 return (
  <BackgroundImage id={`background-intro`} fluid={sizeImg}>

        <div id="header" className="flex" data-sal="fade">
          <div id="main"></div>
          <br />
          <br />
          <br />
          <br />
          <h1 className="main" data-sal="slide-up"
  data-sal-delay="300"
  data-sal-easing="ease">Hey, I'm Lily.</h1>

        <div className="typeDiv" data-sal="fade"
  data-sal-delay="300"
  data-sal-easing="ease">
          <h3 className="type"> I like&nbsp;</h3>
          <h3 className="type"> 
            <Typewriter
              options={{
                strings: ['new media and technologies 👩🏻‍💻🌠','setting high scores in 2048 🕹👾', ' making pesto pasta from scratch 🍽', ' making Twitter bots 🐥',' learning about democracy and politics 🗞🗳', ' Asian American studies 📚', ' splurging on ice cream 🍦🃏', ' making Spotify playlists 🔈'],
                autoStart: true,
                loop: true,
                delay: 100,
                stringSplitter
              }}
            />
          </h3>
          <br />
        </div>
          <h3 data-sal="fade"
  data-sal-delay="300"
  data-sal-easing="ease">Currently working as a developer for federal projects at IBM in Washington D.C. Previously, a journalist writing about pop culture and the internet.   </h3>
          <br />
          <br />
          <br />

        </div>
        </BackgroundImage>


              );
}

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









  
  
  
  
  