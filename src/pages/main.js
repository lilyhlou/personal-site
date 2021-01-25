import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import BackgroundImage from "gatsby-background-image"
import '../styles/global.scss';
import '../styles/main.scss';
import Typewriter from 'typewriter-effect';
import GraphemeSplitter from "grapheme-splitter";
import { graphql, useStaticQuery } from "gatsby"


const MainPage = () => {
  const stringSplitter = string => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };
  
  const styles = {
    overflow: "hidden",
  };

 return (
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
  data-sal-easing="ease" className="description">Currently working as a software engineer at Own Up and web scraping/coding for elections with the Associated Press. Previously, a journalist writing about pop culture and the internet.   </h3>
          <br />
          <br />
          <br />

        </div>

              );
}
  
  
  
  export default MainPage
  
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
  
  