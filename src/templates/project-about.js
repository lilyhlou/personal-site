import React from "react"
import { graphql } from "gatsby"
import Page from "../components/projects-page"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.subtitle}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}
export const pageQuery = graphql`
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
          }
        }
      }
    }
  }
  `
