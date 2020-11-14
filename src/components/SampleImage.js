import React from 'react';
import { Image } from 'react-konva';
import sample from '../sample-image.jpeg';

import useImage from 'use-image';

const SampleImage = () => {
  const [image] = useImage(sample);
  return <Image x={200} y={200} draggable image={image} />;
};

export default SampleImage;
