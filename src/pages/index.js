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


const IndexPage = () => 
     (
      <Layout>

    <SEO title="Lily Lou — Personal Site" />
        <MainPage></MainPage>
        <Projects></Projects>
        <Writing></Writing>
        <About></About>

        </Layout>

          )


 
export default IndexPage

