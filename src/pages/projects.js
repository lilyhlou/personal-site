import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import '../styles/global.scss';
import '../styles/projects.scss';
import Img from "gatsby-image"
import Page from "../components/projects-page"
import SEO from "../components/seo"
import {Card, CardGroup} from 'react-bootstrap'

const Projects = () => (
  <div className="flex" id="projects">
    <h3>Projects and Code</h3>
    <CardGroup>
    <Card className="bg-dark text-white">
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
</Card>
<Card className="bg-dark text-white">
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
</Card>

</CardGroup>
    <StaticQuery 
      query={projectsQuery}
      render={data => {
        return (
          <div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div>
            <Page 
              title={node.frontmatter.title}
              subtitle={node.frontmatter.subtitle}
              path={node.frontmatter.path} 
              date={node.frontmatter.date} 
              body={node.frontmatter.tech}
              image={node.frontmatter.image.childImageSharp.fluid}
                          />
          <h1>PROJECT</h1>


          </div>
        ))}
        </div>
      )
      }}/>
  </div>
)

const projectsQuery = graphql`
{
  allMarkdownRemark {
    edges {
      node {
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
                ...GatsbyImageSharpFluidLimitPresentationSize



              }
            }
          }

        }
      }
    }
  }
}
`
export default Projects
