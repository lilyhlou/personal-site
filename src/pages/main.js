import React from "react"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css'
import BackgroundImage from "gatsby-background-image"
import Layout from "../components/layout"
import Image from "../components/image"
import '../styles/global.scss';
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"


const MainPage = () => (
        <div>
        <br />
        <br />
        <br />
        <br />

            <h1 className="main">Hey, I'm Lily.</h1>
          
          < br />

          <p> I like setting high scores in 2048.</p>
      
          <p>Currently working as a developer for Federal projects at IBM in Washington D.C. Previously, a journalist writing about pop culture and the internet.    </p>
          < br />
          < br />

        </div>

              )
  
  
  
  export default MainPage
  