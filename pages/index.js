import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import wpRestApiUrl from '../config/endpoints';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const Slide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${({ path }) => `url("${path}")`};
  background-size: cover;
  background-position: center center;
  transition: opacity 0.5s ease;
  opacity: ${({ active }) => (active ? 1 : 0)};
`;

const Index = ({ slides }) => {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActive(a => (a + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      {slides.map((slide, index) => (
        <Slide key={slide} active={index === active} path={slide} />
      ))}
    </Wrapper>
  );
};

Index.getInitialProps = async () => {
  const path = `${wpRestApiUrl}pages?slug=homepage`;
  const r = await axios.get(path);
  const data = await r.data[0];

  return {
    slides: [data.acf.slide_1, data.acf.slide_2, data.acf.slide_3],
  };
};

export default Index;
