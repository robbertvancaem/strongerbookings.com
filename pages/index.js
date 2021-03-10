import React, { useState, useEffect } from "react";
import styled from "styled-components";

import wpRestApiUrl from "../config/endpoints";
import Icon from "../components/icon";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const Socials = styled.div`
  bottom: 2em;
  right: 2em;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const Slide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${({ path }) => `url("${path}")`};
  background-size: cover;
  background-position: center center;
  transition: opacity 0.55s ease;
  opacity: ${({ active }) => (active ? 1 : 0)};
`;

const Index = ({ slides }) => {
  const start = Math.floor(Math.random() * 3);
  const [active, setActive] = useState(start);
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((a) => (a + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <Socials>
        <a
          href="https://www.facebook.com/STRONGERBOOKINGS/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="facebook-official" />
        </a>
        <a
          href="https://www.instagram.com/strongerbookings/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="instagram" />
        </a>
      </Socials>
      {slides.map((slide, index) => (
        <Slide key={slide} active={index === active} path={slide} />
      ))}
    </Wrapper>
  );
};

export async function getStaticProps() {
  const path = `${wpRestApiUrl}pages?slug=homepage`;
  const r = await fetch(path);
  const data = await r.json();
  const page = data[0];

  return {
    props: {
      slides: [page.acf.slide_1, page.acf.slide_2, page.acf.slide_3],
    },
  };
}

export default Index;
