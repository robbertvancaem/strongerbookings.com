const devConfig = {
  wpUrl: 'https://strongerbookings.com/',
};

const prodConfig = {
  wpUrl: 'https://strongerbookings.com/',
};

const getConfig = (env) => {
  if (env === 'development') {
    return devConfig;
  }
  return prodConfig;
};

export default getConfig(process.env.NODE_ENV);
