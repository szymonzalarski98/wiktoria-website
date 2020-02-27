import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image'


const Header = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "wiktoria-logo-background.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <header
      style={{
        background: `#fff`,
        // marginBottom: `10vh`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0rem 1.0875rem`,
          
        }}
      >
        <BackgroundImage
          fluid={data.file.childImageSharp.fluid}
          alt="A corgi smiling happily"
          style={{ display: 'flex', justifyContent: 'center', width: '100%', backgroundSize: 'cover', padding: '2rem 0rem' }}
        >
          <Link
            to="/"
            style={{
              color: `#626262`,
              textDecoration: `none`,
              fontFamily: 'Raleway',
              fontWeight: '300',
              fontSize: '1.5rem',
              textAlign: 'center',
              // zIndex: 10,
              // position: 'relative'
            }}
          >
            Wiktoria Grzywa
            <p style={{ fontSize: '1rem' }}>Stylizacje paznokci</p>
          </Link>
        </BackgroundImage>
      </div>
    </header>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
