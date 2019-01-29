import React, {
  Component, Fragment
} from 'react';


import {
  Typography,
  Divider,
  Grid,
} from '@material-ui/core';

class Chirps extends Component {
  render() {
    return (<Fragment>
      <Typography gutterBottom variant='h1'>
      Chirps
      </Typography>
      <Typography gutterBottom variant='h2'>
      
      </Typography>
      <Grid container justify="center" spacing={16}>
        <Grid item md={8} sm={10} xs={12}>
        <Typography gutterBottom variant='h2'>Week 2 recap</Typography>
        <Divider></Divider>
          <Typography gutterBottom variant='body1'>
          <i className="chirp fab fa-twitter"></i>Molly McGaughan pulls off a perfectly imperfect round 1!
          </Typography>
          <Typography gutterBottom variant='body1'>
          <i className="chirp fab fa-twitter"></i>Dr. 2-Hard's dream of an Alex B. proposal goes down in flames early...ouch.
          </Typography>
          <Typography gutterBottom variant='body1'>
          <i className="chirp fab fa-twitter"></i>Kim "bring in the ringer" FB all alone in front with a perfect first week.
          </Typography>
          <Typography gutterBottom variant='body1'>
          <i className="chirp fab fa-twitter"></i>Lauren, Liz and Tennis match scores with 6 year old Bachelor enthusiast, Willa Mae Perrin.
          </Typography>
        </Grid>
        <Grid item md={8} sm={10} xs={12}>
        <Typography gutterBottom variant='h2'>Week 3 recap</Typography>
        <Divider></Divider>
          <Typography gutterBottom variant='body1'>
          <i className="chirp fab fa-twitter"></i>We have a new leader in Ms. Katie Kills...Kim still the Vegas favorite with the highest possible score.
          </Typography>
          <Typography gutterBottom variant='body1'>
          <i className="chirp fab fa-twitter"></i>Jayson with a strong move up the middle from 12 to 6.
          </Typography>
          <Typography gutterBottom variant='body1'>
          <i className="chirp fab fa-twitter"></i>Colton and Willa agree that Tracy is hotter than Bri...hmmmmmm.
          </Typography>
        </Grid>
        <Grid item md={8} sm={10} xs={12}>
        <Typography gutterBottom variant='h2'>Week 4 recap</Typography>
        <Divider></Divider>
          <Typography gutterBottom variant='body1'>
          <i className="chirp fab fa-twitter"></i>New leader Doc 2-Hard continues to make headlines as the Cinderalla story of the year.
          </Typography>
          <Typography gutterBottom variant='body1'>
          <i className="chirp fab fa-twitter"></i>Blaire at the Disco moves to most likely to win the competition with slight high score lead over Yi-Mei and Kim
          </Typography>
          <Typography gutterBottom variant='body1'>
          <i className="chirp fab fa-twitter"></i>Molly no longer the Vegas favorite to lose as she Shapoopies her way by fan idol Willa Mae Perrin in highest possible score.
          </Typography>
        </Grid>
      </Grid>
    </Fragment>
    );
  }
}

export default Chirps;
