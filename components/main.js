import styled from 'styled-components';

import media from '../utils/media-queries';

const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 80px;

  ${media.tablet`
    padding: 0 1em;
  `}
`;

export default Main;
