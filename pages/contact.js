import React from "react";
import styled from "styled-components";

import Main from "../components/main";

const StyledMain = styled(Main)`
  text-align: center;
  flex-direction: column;
`;

const Contact = () => (
  <StyledMain>
    <h1>Contact</h1>
    <p>Get in touch with us</p>
    <p>
      Martijn van den Heuvel -{" "}
      <a href="mailto:martijn@strongerbookings.com">
        martijn@strongerbookings.com
      </a>
    </p>
    <p>
      Sander Janssen -{" "}
      <a href="mailto:sander@strongerbookings.com">
        sander@strongerbookings.com
      </a>
    </p>
    <p>
      Jari Vancompernolle -{" "}
      <a href="mailto:jari@strongerbookings.com">jari@strongerbookings.com</a>
    </p>
    <p>
      <strong>STRONGER BOOKINGS</strong>
    </p>
    <sub>
      Hugo van der Goeslaan 2 - 8600 | 5613 LG | Eindhoven | The Netherlands
    </sub>
    <sub>Phone +31 (0)68 1536 288 | VAT# NL001764612B84</sub>
  </StyledMain>
);

export default Contact;
