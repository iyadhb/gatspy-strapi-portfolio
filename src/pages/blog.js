import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"

const Blog = ({
  data:{
    allStrapiBlogs:{nodes:blogs}}}) => {
  return (
    <Layout>
      <section className="blog-page">
        <Blogs blogs={blogs} title="blog-page" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        slug
        content
        date(formatString: "MMMM Do, YYYY")
        desc
        id
        title
        category
        image {
          childImageSharp {
            fluid {
             ...GatsbyImageSharpFluid

            }
          }
        }
      }
    }
  }
`


export default Blog
