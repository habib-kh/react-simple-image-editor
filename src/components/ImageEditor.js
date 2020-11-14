import React from 'react';
import { Grid } from '@material-ui/core';
import ImageBoard from './ImageBoard';

export default function ImageEditor() {
  return (
    <Grid
      container
      spacing={2}
      direction='row'
      justify='center'
      alignItems='flex-start'
    >
      <Grid item container alignItems='center' justify='center' sm={12} md={6}>
        <ImageBoard />
      </Grid>
      <Grid item sm={12} md={6}></Grid>
    </Grid>
  );
}
