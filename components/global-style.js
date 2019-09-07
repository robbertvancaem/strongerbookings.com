import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Montserrat', sans-serif;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
}

a {
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-weight: 600;
}

img {
  max-width: 100%;
}

* {
  box-sizing: border-box;
  font-weight: normal;
}

strong {
  font-weight: 700;
}

p {
  line-height: 2em;
}

h1 {
  font-size: 1.6em;
}
`;

export default GlobalStyle;
