import React from "react"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import '../styles/global.scss';
import MainPage from "./main.js";

const IndexPage = () => (
  <Layout>
    <SEO title="Lily Lou — Personal Site" />
    <MainPage></MainPage>   
  </Layout>
)

export default IndexPage
