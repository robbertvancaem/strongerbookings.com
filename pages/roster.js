import React from 'react';
import styled from 'styled-components';

import getRoster from '../data/roster';

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

const Roster = ({ roster }) => console.log(roster) || (
<Main>
  {roster.map((r) => {
    console.log(r._embedded);
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
  const roster = await getRoster();

  return { roster };
};

export default Roster;
