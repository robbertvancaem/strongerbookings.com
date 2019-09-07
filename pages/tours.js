import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Box, Flex } from '@rebass/grid';

import stripTags from '../utils/strip-tags';
import wpRestApiUrl from '../config/endpoints';
import Main from '../components/main';

const Image = styled.img`
  max-width: 100%;
`;

const Text = styled.p`
  white-space: pre-line;
`;

const Tours = ({ tours }) => console.log(tours) || (
<Main>
  {tours.map((t) => {
    const image = t._embedded['wp:featuredmedia'] && t._embedded['wp:featuredmedia'][0].source_url;
    return (
      <Flex width={1} flexDirection={['column', 'column', 'row']}>
        <Box width={[1, 1, 0.4]} p={[2, 2, 4]}>
          <Image src={image} />
        </Box>
        <Box width={0.6} p={[2, 2, 4]}>
          <h1 dangerouslySetInnerHTML={{ __html: t.title.rendered }} />
          <Text dangerouslySetInnerHTML={{ __html: stripTags(t.content.rendered) }} />
        </Box>
      </Flex>
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
