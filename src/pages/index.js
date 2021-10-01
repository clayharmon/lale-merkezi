import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"
import Hero from "../parts/hero"
import About from "../parts/about"
import Programs from "../parts/programs"
import Contact from "../parts/contact"

const IndexPage = ({ data }) => {
  const { hero, about, programs } = data.home
  const teachers = data.teachers.nodes
  const programsList = data.programs.nodes
  return (
    <Layout>
      <Seo title="Home" />
      <Header menuData={data.menu} />
      <Hero data={hero} />
      <About data={about} teachers={teachers} />
      <Programs data={programs} programs={programsList} />
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  query ($locale: String!) {
    menu: wpMenu(name: { eq: $locale }) {
      menuItems {
        nodes {
          id
          label
          url
        }
      }
    }
    programs: allWpProgram(
      filter: { language: { language: { eq: $locale } } }
    ) {
      nodes {
        id
        title
        content
        programButton {
          buttonLink
          buttonText
        }
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(aspectRatio: 1.77778)
              }
            }
          }
        }
      }
    }
    teachers: allWpTeacher {
      nodes {
        id
        title
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
    home: wpPage(
      language: { language: { eq: $locale }, pagename: { eq: "home" } }
    ) {
      date
      programs {
        programBackgroundImage {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      about {
        headline
        body
        image {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      hero {
        headline1
        headline2
        button1Text
        button1Url
        button2Text
        button2Url
        backgroundimage {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

export default IndexPage
