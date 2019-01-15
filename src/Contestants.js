import React, {
  Component, Fragment
} from 'react';


import {
  Typography,
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

function renderContestants(dataContestants) {
  const jsx = [];
  dataContestants.forEach(contestant=> {
    const classes = contestant.exitWk?"cardMedia dunzo":"cardMedia";
    jsx.push(
      <Grid item lg={2} md={3} sm={4} xs={12}>
      <Card>
        <CardActionArea>
          <CardMedia className={classes} image={`${process.env.PUBLIC_URL}/assets/contestant_profiles/${contestant.profilePic}.png`}></CardMedia>
          </CardActionArea>
        <CardContent>
        <Typography variant="h5">
        {contestant.name}</Typography>
        <Typography variant="body1">
        {contestant.age}</Typography>
        <Typography variant="body1">
        {contestant.job}</Typography>
        <Typography variant="body1">
        {contestant.hometown}</Typography>
        {getExitTxt(contestant.exitWk)}
        </CardContent>
      </Card>
      </Grid>
    )
  })
  return jsx;
}

class Contestants extends Component {
  render() {
    const{dataContestants} = this.props 
    return (<Fragment><Typography gutterBottom variant='h1'>
    Contestants
    </Typography>
    <Grid container  spacing={16}>
    {renderContestants(dataContestants)}
    </Grid>
    </Fragment>
    );
  }
}

export default Contestants;
