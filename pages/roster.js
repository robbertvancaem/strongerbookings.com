import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import wpRestApiUrl from '../config/endpoints';

const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Item = styled.div`
  flex: 0 1 31%;
  height: 31vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${({ image }) => image && `url('${image}')`};
  background-size: cover;
  background-position: center center;
  background-color: ${({ theme }) => theme.colors.white};
  margin-bottom: 2em;
`;

const Name = styled.h1``;

const Roster = ({ roster }) => (
  <Main>
    {roster.map((r) => {
      const image = r._embedded['wp:featuredmedia'] && r._embedded['wp:featuredmedia'][0].source_url;
      return (
        <Item key={r.id} image={image}>
          <Name>{r.title.rendered}</Name>
        </Item>
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
