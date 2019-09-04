import axios from 'axios';

import wpRestApiUrl from '../config/endpoints';

const page = async (slug) => {
  if (!slug) {
    throw new Error('lang and slug are required');
  }

  const wpSlug = slug === '/' ? 'homepage' : slug;

  const path = `${wpRestApiUrl}pages?slug=${wpSlug}`;

  const r = await axios.get(path, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });
  const data = await r.data[0];

  return data;
};

export default page;
