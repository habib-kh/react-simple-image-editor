import React, { useRef } from 'react';
import { Grid } from '@material-ui/core';
import ImageBoard from './ImageBoard';
import { useContainerDimensions } from '../utils/customHooks';

export default function ImageEditor() {
  const componentRef = useRef();
  const { width, height } = useContainerDimensions(componentRef);

  return (
    <Grid
      container
      spacing={2}
      direction='row'
      justify='center'
      alignItems='flex-start'
    >
      <Grid item container alignItems='center' justify='center' sm={12} md={6}>
        <ImageBoard width={width} height={height} />
      </Grid>
      <Grid item sm={12} md={6} ref={componentRef}>
        <a href='http://google.com'>{width}</a>
      </Grid>
    </Grid>
  );
}
