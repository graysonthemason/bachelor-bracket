import React, {
  Component, Fragment
} from 'react';

import dataContestants from './data/contestants'

import {
  AppBar,
  Toolbar,
  Typography,
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

function renderContestants() {
  const jsx = [];
  dataContestants.forEach(contestant=> {
    console.log(contestant.exitWk)
    const classes = contestant.exitWk?"cardMedia dunzo":"cardMedia";
    jsx.push(
      <Grid item lg={2} md={3} sm={4} xs={6}>
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


        </CardContent>
      </Card>
      </Grid>
    )
  })
  return jsx;
}

class Contestants extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    console.log(dataContestants)
    return (<Fragment><Typography variant='h1'>
    Contestants
    </Typography>
    <Grid container  spacing={24}>
    {renderContestants()}
    </Grid>
    </Fragment>
    );
  }
}

export default Contestants;
