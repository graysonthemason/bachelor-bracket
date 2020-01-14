import React, {
  Component, Fragment
} from 'react';

import {Line} from 'react-chartjs-2';

import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  Grid,
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
  if (a.score === b.score) {
    if (a.potentialRemainingPts > b.potentialRemainingPts) {
      return -1;
    }
  }
  return 0;
}

function getLineData(sortedStandings, dataWeeks) {
  // let data = {};
  let colors = ['aqua', 'brown', 'blue', 'fuchsia', 'gray', 'green', 'lime', 'maroon', 'navy', 'olive', 'purple', 'red', 'silver', 'teal', 'lightorange', 'yellow', 'orangered', 'lightblue', 'seagreen', 'yellowgreen', "lightpink"  ]
  let labels = dataWeeks.filter(week=>week.cuts).map(week=> week.name);
  let weekPts = sortedStandings.map((standing, index)=>{
    return {label: standing.name, 
      data: standing.weekPts, 
      fill: false, borderColor: [colors[index]], backgroundColor: [colors[index]]
    }
})
  let data = {
    labels,
    lineTension: 5,
    datasets: weekPts,
    options: {
      responsive: true,
      maintainAspectRatio: false,}
  }
  return data;
}

function getStandingsContent(dataStandings, constants, dataWeeks) {
  const sortedStandings = dataStandings.sort(compareScore);
  const lineChartData = getLineData(sortedStandings, dataWeeks);
  return (
    <Fragment>
      <Table className="noMargin">
        <TableHead>
          <TableRow className="headerRow" >
          <TableCell className="noBorder tiny"></TableCell>
            <TableCell className="small"></TableCell>
            <TableCell className="small">Points</TableCell>
            <TableCell className="small">Highest Possible Score</TableCell>
            {constants.curWeek.name != "Week 2" ? <TableCell className="small">Weekly Change</TableCell>:''}
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
              {constants.curWeek.name != "Week 2" ? <TableCell className={`${sClass}`}>{icon}{Math.abs(row.diff)|| ''}</TableCell> :''}
            </TableRow>)
          })}
        </TableBody>
      </Table>
      <Typography gutterBottom variant='h1'>
      {`Road to ${constants.curWeek.name}`}
      </Typography>

      <Grid style={{minHeight: '800px'}}>
      <Line options={{
    responsive: true, maintainAspectRatio: false}} data={lineChartData}/>
      </Grid>
    </Fragment>
  )
}

class Standings extends Component {
  render() {
    const {dataStandings, constants, dataWeeks} = this.props;
    return (<Fragment>
      <Typography gutterBottom variant='h1'>
      Leaderboard <img alt="" className="datBigRose" src={`${process.env.PUBLIC_URL}/assets/bigRose.png`}/>
      </Typography>
      <Typography gutterBottom variant='h2'>
      {constants.curWeek.name} | ${constants.pot} pot
      </Typography>
      {getStandingsContent(dataStandings, constants, dataWeeks)}
    </Fragment>
    );
  }
}

export default Standings;
