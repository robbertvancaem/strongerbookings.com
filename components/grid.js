import styled from 'styled-components';

import media from '../utils/media-queries';

const Item = styled.div`
  flex: 0 0 19%;
  height: 19vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: ${({ image }) => image && `url('${image}')`};
  background-size: cover;
  background-position: center center;
  background-color: ${({ theme }) => theme.colors.black};
  border: 2px solid ${({ theme }) => theme.colors.white};
  margin-bottom: 2em;
  text-align: center;
  padding: 1em;

  h1 {
    word-break: break-word;
    margin-bottom: 0;
  }

  ${media.wide`
    flex: 0 0 24%;
    height: 24vw;
  `}

  ${media.desktop`
    flex: 0 0 31%;
    height: 31vw;
  `}

  ${media.tablet`
    flex: 0 0 48%;
    height: 48vw;
  `}

  ${media.phone`
    flex: 0 0 100%;
    height: 100vw;
  `}
`;

export default Item;
