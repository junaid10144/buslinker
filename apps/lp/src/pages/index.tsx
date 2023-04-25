import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"


const IndexPage = () => (
  <Layout>
   <Seo title="Home" />
   <h1 className="text-red-500">Heading</h1>
  </Layout>
)

export default IndexPage
