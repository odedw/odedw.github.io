import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import ResponsiveContainer from './ResponsiveContainer'

const Container = styled.div`
    border-bottom: 1px solid #eee;
        padding-top: 1rem;
    padding-bottom: 1rem;
    a:hover {
    color: #fff;
    }
`

const Title = styled.h1`font-size:1.2rem;`

const Header = ({ siteTitle }) => (
  <Container>
    <ResponsiveContainer>
      <Title style={{ margin: 0 }}>
        <Link to="/">Oded Welgreen</Link>
      </Title>
    </ResponsiveContainer>
  </Container>
)

export default Header
