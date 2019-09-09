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
    <p>
      <strong>STRONGER BOOKINGS</strong>
    </p>
    <sub>Laurierstraat 82 | 5643 AZ | Eindhoven | The Netherlands</sub>
    <sub>Phone +31 (0)68 1536 288 | VAT# NL150495791B01</sub>
  </StyledMain>
);

export default Contact;
