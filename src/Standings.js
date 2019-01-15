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

function getStandingsContent(dataStandings) {
  let sortedStandings = dataStandings;

  let jsx;
  return (
    <Fragment>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Points</TableCell>
            <TableCell>Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedStandings.map(row=>{
            return (<TableRow>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.score}</TableCell>
              <TableCell>{row.diff}</TableCell>
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
      <Typography variant='h1'>
      Standings!
      </Typography>
      <Typography variant='h2'>
      {constants.curWeek}
      </Typography>
      {getStandingsContent(dataStandings)}
    </Fragment>
    );
  }
}

export default Standings;
