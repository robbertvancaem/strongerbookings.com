import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Montserrat', sans-serif;
  background: ${({ theme }) => theme.colors.black};
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
`;

export default GlobalStyle;
