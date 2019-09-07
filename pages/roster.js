import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';

import media from '../utils/media-queries';
import wpRestApiUrl from '../config/endpoints';
import Main from '../components/main';
import GridItem from '../components/grid';
import Icon from '../components/icon';

const Photo = styled.div`
  background-image: ${({ image }) => image && `url('${image}')`};
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 10vw;

  ${media.phone`
    height: 25vw;
  `}
`;

const Roster = ({ roster }) => (
  <Main>
    {roster.map((r) => {
      console.log(r);
      const image = r._embedded['wp:featuredmedia'] && r._embedded['wp:featuredmedia'][0].source_url;
      return (
        <GridItem key={r.id} image={image}>
          <Photo image={image} />
          <h1 dangerouslySetInnerHTML={{ __html: r.title.rendered }} />
          <Flex>
            {r.acf.facebook && (
              <a href={r.acf.facebook} target="_blank" rel="noopener noreferrer">
                <Icon name="facebook-official" />
              </a>
            )}

            {r.acf.instagram && (
              <a href={r.acf.instagram} target="_blank" rel="noopener noreferrer">
                <Icon name="instagram" />
              </a>
            )}
            {r.acf.twitter && (
              <a href={r.acf.twitter} target="_blank" rel="noopener noreferrer">
                <Icon name="twitter-square" />
              </a>
            )}
          </Flex>
        </GridItem>
      );
    })}
  </Main>
);

Roster.getInitialProps = async () => {
  const path = `${wpRestApiUrl}posts?categories=12&orderby=title&order=asc&_embed&per_page=100`;

  const r = await axios.get(path);
  const roster = await r.data;

  return { roster };
};

export default Roster;
