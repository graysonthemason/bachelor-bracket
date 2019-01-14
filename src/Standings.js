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

class Standings extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<Fragment>
      <Typography variant='h1'>
      Standings!
      </Typography>
    </Fragment>
    );
  }
}

export default Standings;
