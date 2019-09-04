import React from 'react';
import axios from 'axios';

import wpRestApiUrl from '../config/endpoints';

const Tours = ({ tours }) => console.log(tours) || <div>Tours</div>;

Tours.getInitialProps = async () => {
  const path = `${wpRestApiUrl}posts?categories=2&orderby=title&order=asc&_embed`;

  const r = await axios.get(path);
  const tours = await r.data;

  return { tours };
};

export default Tours;
