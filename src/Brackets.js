import React, {
  Component, Fragment
} from 'react';

import {
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ListItemText,
  ListItemIcon,
  List,
  ListItem,
  Grid,
  Avatar,
} from '@material-ui/core';
import {ExpandMore, ArrowDropUp} from '@material-ui/icons';


function getTableRows(row, dataContestants, weeks) {
  const jsx = [];
  let counter = 0;
  row.picks.map(el=>{
    const contestant = dataContestants.filter(function (cont) {return cont.id === el})[0];
    switch (counter) {
      case 1:
        jsx.push(<ListItem className="weekBreak">
          <ListItemText className="weekBreakText">{weeks[9].name}</ListItemText>
          <ListItemIcon><ArrowDropUp/></ListItemIcon>
        </ListItem>)
        break;
        case 2:
        jsx.push(<ListItem className="weekBreak">
          <ListItemText className="weekBreakText">{weeks[8].name}</ListItemText>
          <ListItemIcon><ArrowDropUp/></ListItemIcon>
        </ListItem>)
        break;
        case 3:
        jsx.push(<ListItem className="weekBreak">
          <ListItemText className="weekBreakText">{weeks[7].name}</ListItemText>
          <ListItemIcon><ArrowDropUp/></ListItemIcon>
        </ListItem>)
        break;
        case 4:
        jsx.push(<ListItem className="weekBreak">
          <ListItemText className="weekBreakText">{weeks[6].name}</ListItemText>
          <ListItemIcon><ArrowDropUp/></ListItemIcon>
        </ListItem>)
        break;
        case 6:
        jsx.push(<ListItem className="weekBreak">
          <ListItemText className="weekBreakText">{weeks[5].name}</ListItemText>
          <ListItemIcon><ArrowDropUp/></ListItemIcon>
        </ListItem>)
        break;
        case 9:
        jsx.push(<ListItem className="weekBreak">
          <ListItemText className="weekBreakText">{weeks[4].name}</ListItemText>
          <ListItemIcon><ArrowDropUp/></ListItemIcon>
        </ListItem>)
        break;
        case 12:
        jsx.push(<ListItem className="weekBreak">
          <ListItemText className="weekBreakText">{weeks[3].name}</ListItemText>
          <ListItemIcon><ArrowDropUp/></ListItemIcon>
        </ListItem>)
        break;
        case 15:
        jsx.push(<ListItem className="weekBreak">
          <ListItemText className="weekBreakText">{weeks[2].name}</ListItemText>
          <ListItemIcon><ArrowDropUp/></ListItemIcon>
        </ListItem>)
        break;
        case 18:
        jsx.push(<ListItem className="weekBreak">
          <ListItemText className="weekBreakText">{weeks[1].name}</ListItemText>
          <ListItemIcon><ArrowDropUp/></ListItemIcon>
        </ListItem>)
        break;
      default:
        break;
    }
    jsx.push(<ListItem>
      <Avatar className={contestant.exitWk?"dunzo":""} src={`${process.env.PUBLIC_URL}/assets/contestant_profiles/${contestant.profilePic}.png`}/>
      <ListItemText>{contestant.name} </ListItemText>
    </ListItem>)
    counter += 1;
  })
  jsx.push(<ListItem className="weekBreak">
          <ListItemText className="weekBreakText">{weeks[1].name}</ListItemText>
          <ListItemIcon><ArrowDropUp/></ListItemIcon>
        </ListItem>)
  return jsx;
}

class Brackets extends Component {
  getStandingsContent() {
    const {dataStandings, dataContestants, dataWeeks} = this.props;

    let sortedStandings = dataStandings;
  
    return (
      <Fragment>
        <Grid container spacing={16}>
        {sortedStandings.map(row=> {
          return(
            <Grid item xs={12} sm={6} md={3} lg={2}>
        <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
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
    const {constants} = this.props;
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
