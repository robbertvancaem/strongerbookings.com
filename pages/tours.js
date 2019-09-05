import React from 'react';
import axios from 'axios';

import wpRestApiUrl from '../config/endpoints';
import Main from '../components/main';
import GridItem from '../components/grid';

const Tours = ({ tours }) => console.log(tours) || (
<Main>
  {tours.map((t) => {
    const image = t._embedded['wp:featuredmedia'] && t._embedded['wp:featuredmedia'][0].source_url;
    return (
      <GridItem key={t.id} image={image}>
        <h1 dangerouslySetInnerHTML={{ __html: t.title.rendered }} />
      </GridItem>
    );
  })}
</Main>
);

Tours.getInitialProps = async () => {
  const path = `${wpRestApiUrl}posts?categories=2&orderby=title&order=asc&_embed`;

  const r = await axios.get(path);
  const tours = await r.data;

  return { tours };
};

export default Tours;
