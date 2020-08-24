/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGoodreads, faGithub, faTwitter, faGoodreadsG} from '@fortawesome/free-brands-svg-icons'

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1200,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer>
          <div id="icons">
          <a href="https://github.com/lilyhlou"><FontAwesomeIcon icon={faGithub} size="2x" className="icon"/></a>
          <a href="https://twitter.com/lilylouu_"><FontAwesomeIcon icon={faTwitter} size="2x" className="icon"/></a>
          <a href="https://www.linkedin.com/in/lily-lou/"><FontAwesomeIcon icon={faLinkedinIn} size="2x" className="icon"/></a>
          <a href="https://www.goodreads.com/user/show/115403568-lily-lou"><FontAwesomeIcon icon={faGoodreads} size="2x" className="icon"/></a>

            < br/>
            </div>
          <div style={{textAlign:'center'}}>    <p>      © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> by Lily Lou</p>
</div>


        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
