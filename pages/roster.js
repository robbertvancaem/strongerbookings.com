import React from 'react';
import axios from 'axios';

import wpRestApiUrl from '../config/endpoints';
import Main from '../components/main';
import GridItem from '../components/grid';

const Roster = ({ roster }) => (
  <Main>
    {roster.map((r) => {
      console.log(r);
      const image = r._embedded['wp:featuredmedia'] && r._embedded['wp:featuredmedia'][0].source_url;
      return (
        <GridItem key={r.id} image={image}>
          <h1 dangerouslySetInnerHTML={{ __html: r.title.rendered }} />
          <p>
            Agent:
            {' '}
            <strong>{r.acf.agent}</strong>
          </p>
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
