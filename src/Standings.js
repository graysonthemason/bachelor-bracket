import React, {
  Component, Fragment
} from 'react';

import {
  AppBar,
  Toolbar,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core';

function compareScore(a,b) {
  if (a.score > b.score) {
    return -1;
  }
  if (a.score < b.score)
    return 1;
  return 0;
}

function getStandingsContent(dataStandings) {
  const sortedStandingsed = dataStandings.sort(compareScore);
  let jsx;
  return (
    <Fragment>
      <Table>
        <TableHead>
          <TableRow>
          <TableCell className="tiny"></TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Points</TableCell>
            {/* <TableCell>Change</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedStandingsed.map((row, index)=>{
            return (<TableRow>
              <TableCell className="tiny">{index+1}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.score}</TableCell>
              {/* <TableCell>{row.diff}</TableCell> */}
            </TableRow>)
          })}
        </TableBody>
      </Table>
    </Fragment>
  )
}

class Standings extends Component {
  constructor(props) {
    super(props);
    // findScore();
  }

  render() {
    const {dataStandings, constants} = this.props;
    return (<Fragment>
      <Typography gutterBottom variant='h1'>
      Leaderboard <img className="datBigRose" src={`${process.env.PUBLIC_URL}/assets/bigRose.png`}/>
      </Typography>
      <Typography gutterBottom variant='h2'>
      {constants.curWeek.name}
      </Typography>
      {getStandingsContent(dataStandings)}
    </Fragment>
    );
  }
}

export default Standings;
