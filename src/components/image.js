import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */


const Image = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    allImageSharp {
      edges {
        node {
          id
          fluid(maxHeight: 800, maxWidth: 1200) {
            base64
            tracedSVG
            srcWebp
            srcSetWebp
            originalImg
            originalName
          }
        }
      }
    }
  }  `)

  return   <div>
  <div>
    {data.allImageSharp.edges.map(edge => 
      <Img fluid={edge.node.fluid} />
    )}
  </div>
</div>

}

export default Image
