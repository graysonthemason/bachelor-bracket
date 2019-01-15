import React, {
  Component, Fragment
} from 'react';


import {
  AppBar,
  Toolbar,
  Typography,
  Divider,
  List,
  ListItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia
} from '@material-ui/core';

function getExitTxt(exitTxt) {
if (exitTxt) {
  return (<Typography color="error" variant="body1">
  {exitTxt}</Typography>)
}
}

class Chirps extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const{dataContestants} = this.props 
    return (<Fragment><Typography gutterBottom variant='h1'>
    Chirps
    </Typography>
    <Typography gutterBottom variant='h2'>
    
    </Typography>
    <Grid container justify="center" spacing={16}>
    <Grid item xs={10}>
    <Typography gutterBottom variant='h2'>Week 2 recap</Typography>
    <Divider></Divider>
      <Typography gutterBottom variant='body1'>
      <i class="chirp fab fa-twitter"></i>Molly McGaughan pulls off a perfectly imperfect round 1!
      </Typography>
      <Typography gutterBottom variant='body1'>
      <i class="chirp fab fa-twitter"></i>Dr. 2-Hard's dream of an Alex B. proposal goes down in flames early...ouch.
      </Typography>
      <Typography gutterBottom variant='body1'>
      <i class="chirp fab fa-twitter"></i>Kim "bring in the ringer" FB all alone in front with a perfect first week.
      </Typography>
      <Typography gutterBottom variant='body1'>
      <i class="chirp fab fa-twitter"></i>Jayson, Lauren, Liz and Tennis match scores with 6 year old Bachelor enthusiast, Willa Mae Perrin.
      </Typography>
    </Grid>
    </Grid>
    </Fragment>
    );
  }
}

export default Chirps;
