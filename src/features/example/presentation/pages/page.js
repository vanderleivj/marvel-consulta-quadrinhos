import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import { useHistory } from "react-router-dom";



import {
  Containerbody
} from './loginStyles'

export default function Login() {
  const history = useHistory();

  return (
    <Containerbody>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{height:'100%'}}
      >
        
      </Grid>
    </Containerbody>
  );
}
