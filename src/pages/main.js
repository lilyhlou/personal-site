import React from "react"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css'
import BackgroundImage from "gatsby-background-image"
import Layout from "../components/layout"
import Image from "../components/image"
import '../styles/global.scss';
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import Typewriter from 'typewriter-effect';
import GraphemeSplitter from "grapheme-splitter";

const MainPage = () => {
  const stringSplitter = string => {
    const splitter = new GraphemeSplitter();
    return splitter.splitGraphemes(string);
  };
  
  const styles = {
    overflow: "hidden",
  };

 return (
        <div id="header" className="flex">
          <br />
          <br />
          <br />
          <br />
          <h1 className="main">Hey, I'm Lily.</h1>

        <div className="typeDiv">
          <p className="type"> I like&nbsp;</p>
          <p className="type"> 
            <Typewriter
              options={{
                strings: ['new media and technologies 👩🏻‍💻🌠','setting high scores in 2048 🕹👾', ' making pesto pasta from scratch 🍽', ' making Twitter bots 🐥',' learning about democracy and politics 🗞🗳', ' Asian American studies 📚', ' splurging on ice cream 🍦🃏', ' making Spotify playlists 🔈'],
                autoStart: true,
                loop: true,
                delay: 100,
                stringSplitter
              }}
            />
          </p>
          <br />
        </div>
          <p>Currently working as a developer for Federal projects at IBM in Washington D.C. Previously, a journalist writing about pop culture and the internet.   </p>

        </div>

              );
}
  
  
  
  export default MainPage
  
  