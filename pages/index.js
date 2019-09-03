import React, { useState } from 'react';
import styled from 'styled-components';

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
  setTimeout(() => {
    setActive((active + 1) % slides.length);
  }, 5000);
  return (
    <Wrapper>
      {slides.map((slide, index) => (
        <Slide key={slide} active={index === active} path={slide} />
      ))}
    </Wrapper>
  );
};

export default Index;
