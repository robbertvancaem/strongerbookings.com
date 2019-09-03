import React from 'react';

const Image = ({
  path, alt, draggable, ...props
}) => (
  <img src={path} alt={alt} title={alt} {...props} />
);

export default Image;
