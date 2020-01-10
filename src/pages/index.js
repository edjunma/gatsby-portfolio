import React from "react"

import Layout from "../components/layout"

// Import Portfolio Sections
import Home from "../sections/home"
import About from "../sections/about"
import Projects from "../sections/projects"
import Contact from "../sections/contact"

const IndexPage = () => (
  <Layout>
    <Home />
    <About />
    <Projects />
    <Contact />
  </Layout>
)

export default IndexPage
