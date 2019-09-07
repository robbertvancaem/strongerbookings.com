import React from 'react';
import styled from 'styled-components';

const Icon = styled(({ name, className }) => <i className={`fa fa-${name} ${className}`} />)`
  font-size: 1.4em;
  transition: transform 0.25s ease;
  margin-right: 0.5em;

  :hover {
    transform: translateY(-3px);
  }
`;

export default Icon;
