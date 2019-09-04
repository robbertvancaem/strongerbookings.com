import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: ${({ theme }) => theme.colors.black};
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
  transition: all 0.25s ease;
  z-index: 2;

  ${({ show }) => !show
    && `
    opacity: 0;
    visibility: hidden;
  `}
`;

const Loader = ({ show }) => <Container show={show} />;

export default Loader;
