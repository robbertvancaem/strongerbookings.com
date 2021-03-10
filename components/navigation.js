import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Flex } from "@rebass/grid";

import media from "../utils/media-queries";
import Image from "./image";

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
    position: relative;

    ${media.phone`
      margin-left: 2em;
      font-size: 0.75em;
    `}

    &:after {
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      background: #fff;
      transform: scaleX(0);
      position: absolute;
      bottom: -6px;
      left: 0;
      transition: all 0.25s ease;
    }

    &:hover:after,
    &.active:after {
      transform: scaleX(1);
    }
  }
`;

const Navigation = () => {
  const { pathname } = useRouter();
  return (
    <Wrapper>
      <Logo>
        <Link href="/">
          <a>
            <Image path="/images/logo.png" alt="logo" />
          </a>
        </Link>
      </Logo>
      <MenuItems>
        <Link href="/roster">
          <a className={pathname === "/roster" ? "active" : undefined}>
            Roster
          </a>
        </Link>
        <Link href="tours">
          <a className={pathname === "/tours" ? "active" : undefined}>Tours</a>
        </Link>
        <Link href="contact">
          <a className={pathname === "/contact" ? "active" : undefined}>
            Contact
          </a>
        </Link>
      </MenuItems>
    </Wrapper>
  );
};

export default Navigation;
