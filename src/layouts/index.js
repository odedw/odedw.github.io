import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import ResponsiveContainer from '../components/ResponsiveContainer'
import Header from '../components/header'
import './index.css'
import styled from 'styled-components'

const LayoutContainer = styled.div`
`

const Layout = ({ children, data }) => (
  <LayoutContainer>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <Header siteTitle={data.site.siteMetadata.title} />

    <div>
      <ResponsiveContainer>{children()}</ResponsiveContainer>
    </div>
  </LayoutContainer>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
