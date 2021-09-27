import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  const { headline1, headline2 } = data.home.hero
  return (
    <Layout>
      <Seo title="Home" />
      <h2>{headline1}</h2>
      <h2>{headline2}</h2>
    </Layout>
  )
}

export const query = graphql`
  query ($locale: String!) {
    home: wpPage(
      language: { language: { eq: $locale }, pagename: { eq: "home" } }
    ) {
      date
      hero {
        headline1
        headline2
      }
    }
  }
`

export default IndexPage
