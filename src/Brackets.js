import React, {
  Component, Fragment
} from 'react';

import {
  AppBar,
  Toolbar,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ListItemText,
  ExpansionPanelDetails,
  Table,
  TableBody,
  TableCell,
  TableHead,
  List,
  ListItem,
  Grid,
  Avatar,
  TableRow
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function getTableRows(row, dataContestants) {
  const jsx = [];
  let counter = 0;
  row.picks.map(el=>{
    const contestant = dataContestants.filter(function (cont) {return cont.id === el})[0];
    switch (counter) {
      case 1:
        jsx.push(<ListItem className="weekBreak">
          <ListItemText>Final Rose</ListItemText>
        </ListItem>)
        break;
        case 1:
        jsx.push(<ListItem className="weekBreak">
          <ListItemText>Final Rose</ListItemText>
        </ListItem>)
        break;
        case 1:
        jsx.push(<ListItem className="weekBreak">
          <ListItemText>Final Rose</ListItemText>
        </ListItem>)
        break;
        case 1:
        jsx.push(<ListItem className="weekBreak">
          <ListItemText>Final Rose</ListItemText>
        </ListItem>)
        break;
        case 1:
        jsx.push(<ListItem className="weekBreak">
          <ListItemText>Final Rose</ListItemText>
        </ListItem>)
        break;
        case 1:
        jsx.push(<ListItem className="weekBreak">
          <ListItemText>Final Rose</ListItemText>
        </ListItem>)
        break;
        case 1:
        jsx.push(<ListItem className="weekBreak">
          <ListItemText>Final Rose</ListItemText>
        </ListItem>)
        break;
      default:
        break;
    }
    counter += 1;
    jsx.push(<ListItem>
      <Avatar src={`${process.env.PUBLIC_URL}/assets/contestant_profiles/${contestant.profilePic}.png`}/>
      <ListItemText>{contestant.name}</ListItemText>
    </ListItem>)
  })
  return jsx;
}

class Brackets extends Component {
  constructor(props) {
    super(props);
  }

  getStandingsContent() {
    const {dataStandings, dataContestants, constants} = this.props;

    let sortedStandings = dataStandings;
  
    let jsx;
    return (
      <Fragment>
        <Grid container spacing={24}>
        {sortedStandings.map(row=> {
          return(
            <Grid item xs={12} sm={6} md={3} lg={2}>
        <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{row.name}</Typography>
        </ExpansionPanelSummary>
        <List>
          {/* <TableBody> */}
            {getTableRows(row, dataContestants)}
          {/* </TableBody> */}
        </List>
        </ExpansionPanel>
        </Grid>
        )})}
        </Grid>
      </Fragment>
    )
  }

  render() {
    const {dataStandings, dataContestants, constants} = this.props;
    return (<Fragment>
      <Typography variant='h1'>
      Standings!
      </Typography>
      <Typography variant='h2'>
      {constants.curWeek}
      </Typography>
      {this.getStandingsContent()}
    </Fragment>
    );
  }
}

export default Brackets;
