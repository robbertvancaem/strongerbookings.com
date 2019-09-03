import config from './env';

const wpApiPrefix = 'wp-json/';

const wpRestApiPrefix = 'wp/v2/';

const wpRestApiUrl = config.wpUrl + wpApiPrefix + wpRestApiPrefix;

export default wpRestApiUrl;
