import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import styled from 'styled-components';
import { Link } from "gatsby";

const MenuContainer = styled.div`
  background: #373A47;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column !important;
  padding-top: 2rem;
  position: relative;
  z-index: 1;
  outline: none;
`;

const LinkWrapper = styled(Link)`
  font-size: 1.3rem;
  color: white;
  display: block;
  text-decoration: none;
  margin: 1.3rem 0rem;
  font-family: 'Raleway';
  outline: none;
  &:last-child {
    color: #bf0154;
    font-weight: 700;
  };
`;

const HamburgerMenuContainer = () => {
  const styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '15px',
      height: '15px',
      left: '1rem',
      top: '1rem'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      position: 'fixed',
      width: '15px',
      height: '15px',
      left: '1rem',
      top: '1rem',
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: '#373a47',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
  }
  return (
      <Menu styles={styles} width="100vw">
        <MenuContainer>
          <LinkWrapper>Zdjęcia</LinkWrapper>
          <LinkWrapper>Oferta</LinkWrapper>
          <LinkWrapper to="/contact/">Kontakt</LinkWrapper>
          <LinkWrapper>Zapisz się!</LinkWrapper>
        </MenuContainer>
      </Menu>
  );
};

export default HamburgerMenuContainer;