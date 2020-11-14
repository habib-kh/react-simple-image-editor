import React from 'react';
import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';
import SampleImage from './SampleImage';

const ImageBoard = () => {
  return (
    <Stage width={window.innerWidth / 1.5} height={window.innerHeight}>
      <Layer>
        <SampleImage />
      </Layer>
    </Stage>
  );
};

export default ImageBoard;
