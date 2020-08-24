import React from "react"
import {graphql, StaticQuery } from "gatsby"
import '../styles/global.scss';
import '../styles/projects.scss';
import Page from "../components/projects-page"
import SEO from "../components/seo"
import {Card, CardGroup} from 'react-bootstrap'

const Projects = () => (
  <div className="flex" id="projects">
    <h3 id="code">Featured Projects💾</h3>
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
    <p>Also see: <a href="https://twitter.com/ted_talk_ideas">my TED talk ideas Twitter bot</a>, <a href="https://docs.google.com/document/d/1hGf2Lqtz47p9Zp9p7H6_iZ9AWrRicgFH8a9YFck8HkY/edit">my research on staff salaries at UNC by department compared to number of majors</a>, <a href="https://docs.google.com/presentation/d/1gaZ-C5IJ-6lrQUSiookTbH_GjR4kDZNdkrWy2QIEpks/edit?usp=sharing">a presentation I gave for a class about the Twitter hashtag #StayWoke</a> and <a href="https://docs.google.com/presentation/d/14acDvW6fyJq6NLHd8lFq7Ouzk8hqsojaga-00HhmAaQ/edit?usp=sharing">a presentation I contributed to about opinion mining and sentiment analysis in climate change tweets</a> (yes, I'm addicted to Twitter). For even more, visit <a href="https://github.com/lilyhlou">my Github</a>.</p>
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
