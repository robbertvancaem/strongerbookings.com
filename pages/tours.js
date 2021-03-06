import React from "react";
import styled from "styled-components";
import { Box, Flex } from "@rebass/grid";

import wpRestApiUrl from "../config/endpoints";
import Main from "../components/main";

const Image = styled.img`
  max-width: 100%;
`;

const Tour = styled(Box)`
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.white};
`;

const Tours = ({ tours }) => (
  <Main>
    <Flex width={1} justifyContent="center" flexWrap="wrap">
      {tours.map((t) => {
        const image =
          t._embedded["wp:featuredmedia"] &&
          t._embedded["wp:featuredmedia"][0].source_url;
        return (
          <Tour width={[0.5, 0.5, 1 / 4]} m={2} p={[1, 1, 2]} key={t.id}>
            <Image src={image} />
            <h4 dangerouslySetInnerHTML={{ __html: t.title.rendered }} />
          </Tour>
        );
      })}
    </Flex>
  </Main>
);

export async function getStaticProps() {
  const path = `${wpRestApiUrl}posts?categories=2&orderby=modified&order=desc&_embed`;

  const r = await fetch(path);
  const tours = await r.json();

  return {
    props: {
      tours,
    },
    revalidate: 1,
  };
}

export default Tours;
