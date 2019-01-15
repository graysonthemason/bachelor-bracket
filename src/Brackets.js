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


function getTableRows(row, dataContestants, weeks) {
  const jsx = [];
  let counter = 1;
  let total = row.picks.length
  row.picks.map(el=>{
    const contestant = dataContestants.filter(function (cont) {return cont.id === el})[0];
    switch (counter) {
      case 1:
        jsx.push(<ListItem className="weekBreak">
          <ListItemText className="weekBreakText">{weeks[0].name}</ListItemText>
        </ListItem>)
        break;
        case 2:
        jsx.push(<ListItem className="weekBreak">
          <ListItemText className="weekBreakText">{weeks[1].name}</ListItemText>
        </ListItem>)
        break;
        case 3:
        jsx.push(<ListItem className="weekBreak">
          <ListItemText className="weekBreakText">{weeks[2].name}</ListItemText>
        </ListItem>)
        break;
        case 4:
        jsx.push(<ListItem className="weekBreak">
          <ListItemText className="weekBreakText">{weeks[3].name}</ListItemText>
        </ListItem>)
        break;
        case 5:
        jsx.push(<ListItem className="weekBreak">
          <ListItemText className="weekBreakText">{weeks[4].name}</ListItemText>
        </ListItem>)
        break;
        case 7:
        jsx.push(<ListItem className="weekBreak">
          <ListItemText className="weekBreakText">{weeks[5].name}</ListItemText>
        </ListItem>)
        break;
        case 10:
        jsx.push(<ListItem className="weekBreak">
          <ListItemText className="weekBreakText">{weeks[6].name}</ListItemText>
        </ListItem>)
        break;
        case 13:
        jsx.push(<ListItem className="weekBreak">
          <ListItemText className="weekBreakText">{weeks[7].name}</ListItemText>
        </ListItem>)
        break;
        case 16:
        jsx.push(<ListItem className="weekBreak">
          <ListItemText className="weekBreakText">{weeks[8].name}</ListItemText>
        </ListItem>)
        break;
        case 19:
        jsx.push(<ListItem className="weekBreak">
          <ListItemText className="weekBreakText">{weeks[9].name}</ListItemText>
        </ListItem>)
        break;
      default:
        break;
    }
    counter += 1;
    jsx.push(<ListItem>
      <Avatar src={`${process.env.PUBLIC_URL}/assets/contestant_profiles/${contestant.profilePic}.png`}/>
      <ListItemText>{contestant.name} </ListItemText>
    </ListItem>)
  })
  return jsx;
}

class Brackets extends Component {
  constructor(props) {
    super(props);
  }

  getStandingsContent() {
    const {dataStandings, dataContestants, dataWeeks, constants} = this.props;

    let sortedStandings = dataStandings;
  
    let jsx;
    return (
      <Fragment>
        <Grid container spacing={16}>
        {sortedStandings.map(row=> {
          return(
            <Grid item xs={12} sm={6} md={3} lg={2}>
        <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{row.name} | {row.score} points</Typography>
        </ExpansionPanelSummary>
        <List>
          {/* <TableBody> */}
            {getTableRows(row, dataContestants, dataWeeks)}
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
      <Typography gutterBottom variant='h1'>
      Brackets
      </Typography>
      <Typography gutterBottom variant='h2'>
      {constants.curWeek.name}
      </Typography>
      {this.getStandingsContent()}
    </Fragment>
    );
  }
}

export default Brackets;
