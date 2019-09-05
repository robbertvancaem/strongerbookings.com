import React from 'react';
import styled from 'styled-components';

import Main from '../components/main';

const StyledMain = styled(Main)`
  text-align: center;
  flex-direction: column;
`;

const Contact = () => (
  <StyledMain>
    <h1>Contact</h1>
    <p>Get in touch with us</p>
    <p>
      Martijn van den Heuvel -
      {' '}
      <a href="mailto:martijn@strongerbookings.com">martijn@strongerbookings.com</a>
    </p>
    <p>
      Sander Janssen -
      {' '}
      <a href="mailto:sander@strongerbookings.com">sander@strongerbookings.com</a>
    </p>
  </StyledMain>
);

export default Contact;
