import styled from 'styled-components';

import media from '../utils/media-queries';

const Item = styled.div`
  flex: 0 1 32%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.black};
  margin-bottom: 3em;
  text-align: center;

  h1 {
    word-break: break-word;
    margin-bottom: 0;
  }

  ${media.desktop`
    flex: 0 0 48%;
  `}

  ${media.phone`
    flex: 0 0 100%;
  `}
`;

export default Item;
