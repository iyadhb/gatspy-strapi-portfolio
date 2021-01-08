import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import services from "../constants/services"
export default ({data}) => {
  const {allStrapiProjects:{nodes:projects}} = data
  return <Layout>
    <Hero />
    <Services />
    <Jobs />
    <Projects projects={projects} title="Featued Projects" showLink/>
  </Layout>
}
export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
    allStrapiBlogs(limit: 3, sort: {fields: date, order: DESC}) {
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

