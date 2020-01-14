import React, { Component, Fragment } from 'react';

import { Typography, Divider, Grid } from '@material-ui/core';

class Chirps extends Component {
  render() {
    return (
      <Fragment>
        <Typography gutterBottom variant="h1">
          Chirps
        </Typography>
        <Typography gutterBottom variant="h2" />
        <Grid container justify="center" spacing={16}>
          <Grid item md={8} sm={10} xs={12}>
            <Typography gutterBottom variant="h2">
              Week 2 recap
            </Typography>
            <Divider />
            <Typography gutterBottom variant="body1">
              <i className="chirp fab fa-twitter" />
              Molly M pulls off a perfectly imperfect round 1!
            </Typography>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default Chirps;
