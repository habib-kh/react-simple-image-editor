import React from 'react';
import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';
import SampleImage from './SampleImage';

const ImageBoard = ({ width, height }) => {
  return (
    <Stage width={width} height={width}>
      <Layer>
        <SampleImage />
      </Layer>
    </Stage>
  );
};

export default ImageBoard;
