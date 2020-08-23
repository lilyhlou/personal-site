import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import '../styles/global.scss';
import '../styles/projects.scss';
import Img from "gatsby-image"
import Page from "../components/og-projects-page"
import SEO from "../components/seo"
import {Card, CardGroup} from 'react-bootstrap'

const Projects = () => (
  <div className="flex" id="projects">
    <h3>Featured Projects</h3>
    <StaticQuery 
      query={projectsQuery}
      render={data => {
        return (
          <CardGroup>
        {data.allMarkdownRemark.edges.map(({ node }) => (
            <Page 
              title={node.frontmatter.title}
              subtitle={node.frontmatter.subtitle}
              path={node.frontmatter.path} 
              date={node.frontmatter.date} 
              body={node.excerpt}
              tech={node.frontmatter.tech}
              image={node.frontmatter.image.childImageSharp.fluid}
              
                          />
        ))}
        </CardGroup>
      )
      }}/>

  </div>
)

const projectsQuery = graphql`
{
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          title
          path
          date
          subtitle
          tech
          source
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid 
              }
            }
          }
        }
        excerpt
      }
    }
  }
}
`
export default Projects
