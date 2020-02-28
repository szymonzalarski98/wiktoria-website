import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HamburgerMenuContainer from "./menu";
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background: #fff;
`;

const BannerContainer = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 2rem 1rem;
  justify-content: center;
  background: #F9DED5;
  display: flex;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HamburgerMenuContainer isOpen={false} />
      <BannerContainer>
        <Link
          to="/"
          style={{
            color: `#626262`,
            textDecoration: `none`,
            fontFamily: 'Raleway',
            fontWeight: '300',
            fontSize: '1.5rem',
            textAlign: 'center',
            
          }}
        >
          Wiktoria Grzywa
          <p style={{ fontSize: '1rem', marginBottom: 0 }}>Stylizacje paznokci</p>
        </Link>
      </BannerContainer>
    </HeaderContainer>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
