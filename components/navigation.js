import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Box, Flex } from '@rebass/grid';

import media from '../utils/media-queries';
import LogoSrc from '../static/images/logo.png';
import Image from './image';

const Wrapper = styled.nav`
  height: 80px;
  width: 100%;
  top: 0;
  z-index: 666;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2em;
  position: fixed;
  z-index: 3;
  background: transparent;

  ${media.phone`
    padding: 0 1em;
  `}
`;

const Logo = styled(Box)`
  width: 6em;

  ${media.phone`
    width: 4em;
  `}
`;

const MenuItems = styled(Flex)`
  text-transform: uppercase;

  a {
    margin-left: 4em;
    transition: all 0.25s ease;

    ${media.phone`
      margin-left: 2em;
      font-size: 0.75em;
    `}

    &:hover {
      transform: translateX(3px);
    }
  }
`;

const Navigation = () => (
  <Wrapper>
    <Logo>
      <Link href="/">
        <a>
          <Image path={LogoSrc} alt="logo" />
        </a>
      </Link>
    </Logo>
    <MenuItems>
      <Link href="/roster">
        <a>Roster</a>
      </Link>
      <Link href="tours">
        <a>Tours</a>
      </Link>
      <Link href="contact">
        <a>Contact</a>
      </Link>
    </MenuItems>
  </Wrapper>
);

export default Navigation;
