import axios from 'axios';

import wpRestApiUrl from '../config/endpoints';

const roster = async () => {
  const path = `${wpRestApiUrl}posts?categories=12&orderby=title&order=asc&_embed`;

  const r = await axios.get(path);
  const data = await r.data;

  return data;
};

export default roster;
