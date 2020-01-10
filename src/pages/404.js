import React from "react"
import styled from 'styled-components';
import { Link } from 'gatsby';

import Layout from "../components/layout"
import SEO from "../components/seo"

const StyledLink = styled(Link)`
  background: transparent;
  outline: none;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
