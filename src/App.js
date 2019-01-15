import React, {
  Component, Fragment
} from 'react';
import './App.css';
import Home from './Home';
import Standings from './Standings';
import Brackets from './Brackets';
import Contestants from './Contestants';

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Menu,
  Icon
} from '@material-ui/core';

import theme from './theme.js';
import dataStandings from "./data/brackets"
import dataWeeks from "./data/weeks"
import dataContestants from './data/contestants'

// @material-ui
import { MuiThemeProvider } from '@material-ui/core/styles';
// Custom child components
import CssBaseline from '@material-ui/core/CssBaseline';

const constants = {}

function findWithAttr(array, attr, value) {
  for(var i = 0; i < array.length; i += 1) {
      if(array[i][attr] === value) {
          return i;
      }
  }
  return -1;
}

function getScore(picks) {
  let cur = 0;
  let prev;
  let startingNo = 23;
  let contestantIDs = dataContestants.map((contestant)=>contestant.id)
  dataWeeks.forEach(week=>{
    if (week.cuts){
      contestantIDs = contestantIDs.filter( ( el ) => !week.cuts.includes( el ) );
      startingNo = startingNo - week.cuts.length;
      const weekPicks = picks.slice(0, startingNo);
      weekPicks.forEach(pickCnt=>{
        if (contestantIDs.indexOf(pickCnt) > -1) cur += week.points;
        if (week.previousWk)  prev = cur;
        if (week.currentWk) constants.curWeek = week.name;
      });
    }
  })
  return {cur,prev};
}

function compareScore(a,b) {
  if (a.score > b.score) {
    return -1;
  }
  if (a.score < b.score)
    return 1;
  return 0;
}

function comparePreviousScore(a,b) {
  if (a.previousScore > b.previousScore) {
    return -1;
  }
  if (a.previousScore < b.previousScore)
    return 1;
  return 0;
}

function lintStandings() {
  const filtered = [];
  const secondFiltered = [];
  dataStandings.forEach((user,index)=>{
    let score = getScore(user.picks);
    dataStandings[index].score = score.cur;
    dataStandings[index].previousScore = score.prev;
    filtered.push(user);
    secondFiltered.push(user);
  });
  
  const filteredNew = filtered.sort(compareScore);
  const secondFilteredNew = secondFiltered.sort(comparePreviousScore);
  dataStandings.forEach((user,index)=>{
    var curIndex = findWithAttr(filteredNew, "name", user["name"])
    var oldIndex = findWithAttr(secondFilteredNew, "name", user["name"])
    dataStandings[index].diff = oldIndex - curIndex;
  })
}

function lintContestants() {
  dataWeeks.forEach(week=>{
    if (week.cuts) {
      week.cuts.forEach(cutId=>{
        dataContestants[cutId-1].exitWk = week.name;
      })
    }
  })
}

function lintData() {
  lintContestants();
  lintStandings();
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {page: "home"};
    this.changePage = this.changePage.bind(this);
    lintData();
  }

  getContent() {
    const {page} = this.state
    let jsx;
    switch (page) {
      case "home":
        jsx = <Home/>
        break;
        case "contestants":
        jsx = <Contestants dataContestants={dataContestants}/>
        break;
        case "brackets":
        jsx = <Brackets dataContestants={dataContestants} dataStandings={dataStandings} constants={constants}/>
        break;
        case "standings":
        jsx = <Standings dataStandings={dataStandings} constants={constants}/>
        break;
    
      default:
      jsx = <Home/>
        break;
    }
    return jsx;
  }

  changePage(event) {
    const pg = event.currentTarget.getAttribute("data-key");
    this.setState({page: pg});
  }

  render() {
    return (<Fragment><CssBaseline />
    <MuiThemeProvider theme={theme}>
        <AppBar position="sticky" color="default">
          <Toolbar>
          <Button className="menuBtn" onClick={this.changePage} variant="contained" size="medium" color="primary" data-key='standings' aria-label="Open drawer">
             Standings
            </Button>
            <Button className="menuBtn" onClick={this.changePage} variant="contained" size="medium" color="primary" data-key='brackets' aria-label="Open drawer">
             Brackets
            </Button>
          <Button className="menuBtn" onClick={this.changePage} variant="contained" size="medium" color="primary" data-key='contestants' aria-label="Open drawer">
             Contestants
            </Button>
      </Toolbar>
      </AppBar>
      <Fragment>
      {this.getContent()}
      </Fragment>
    </MuiThemeProvider>
    </Fragment>
    );
  }
}

export default App;
