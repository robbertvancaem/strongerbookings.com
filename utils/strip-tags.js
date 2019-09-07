const regex = /(<([^>]+)>)/gi;

const stripTags = str => str.replace(regex, '');

export default stripTags;
