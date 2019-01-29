import React, {
  Component, Fragment
} from 'react';

import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core';
import {
  ArrowUpward,
  ArrowDownward
} from '@material-ui/icons'

function compareScore(a,b) {
  if (a.score > b.score) {
    return -1;
  }
  if (a.score < b.score)
    return 1;
  return 0;
}
function compareSecondaryScore(a,b) {
  if (a.score > b.score) {
    return -1;
  }
  if (a.score < b.score)
    return 1;
  return 0;
}

function getStandingsContent(dataStandings, constants) {
  const sortedStandings = dataStandings.sort(compareScore);
  return (
    <Fragment>
      <Table className="noMargin">
        <TableHead>
          <TableRow className="headerRow" >
          <TableCell className="noBorder tiny"></TableCell>
            <TableCell className="small"></TableCell>
            <TableCell className="small">Points</TableCell>
            <TableCell className="small">Highest Possible Score</TableCell>
            {constants.curWeek.name === "Week 3" ? <TableCell className="small">Weekly Change</TableCell>:''}
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedStandings.map((row, index)=>{
            let sClass = '';
            let icon = '';
            if (row.diff < 0) {
              sClass = "error"
              icon = <ArrowDownward className="smallIcon"/>
            } else if (row.diff > 0) {
              sClass = "success"
              icon = <ArrowUpward className="smallIcon"/>
            } else {
            }
            return (<TableRow key={`standing-row-${index}`}>
              <TableCell align="center" className="dark tiny">{index+1}</TableCell>
              <TableCell className="small">{row.name}</TableCell>
              <TableCell className="small">{row.score}</TableCell>
              <TableCell className="small">{row.potentialRemainingPts + row.score}</TableCell>
              {constants.curWeek.name === "Week 3" ? <TableCell className={`${sClass}`}>{icon}{Math.abs(row.diff)|| ''}</TableCell> :''}
            </TableRow>)
          })}
        </TableBody>
      </Table>
    </Fragment>
  )
}

class Standings extends Component {
  render() {
    const {dataStandings, constants} = this.props;
    return (<Fragment>
      <Typography gutterBottom variant='h1'>
      Leaderboard <img alt="" className="datBigRose" src={`${process.env.PUBLIC_URL}/assets/bigRose.png`}/>
      </Typography>
      <Typography gutterBottom variant='h2'>
      {constants.curWeek.name} | ${constants.pot} pot
      </Typography>
      {getStandingsContent(dataStandings, constants)}
    </Fragment>
    );
  }
}

export default Standings;
