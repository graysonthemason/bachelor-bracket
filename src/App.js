import React, {
  Component, Fragment
} from 'react';
import './App.css';
import Home from './Home';
import Standings from './Standings';
import Brackets from './Brackets';
import Contestants from './Contestants';
import Chirps from './Chirps';

import {
  AppBar,
  Toolbar,
  Button,
} from '@material-ui/core';

import theme from './theme.js';
import dataStandings from "./data/brackets";
import dataWeeks from "./data/weeks";
import dataContestants from './data/contestants';

// @material-ui
import { MuiThemeProvider } from '@material-ui/core/styles';
// Custom child components
import CssBaseline from '@material-ui/core/CssBaseline';

const constants = {pot: (dataStandings.length) * 20}

function findWithAttr(array, attr, value) {
  for(var i = 0; i < array.length; i += 1) {
      if(array[i][attr] === value) {
          return i;
      }
  }
  return -1;
}

function getScore(picks, name) {
  let cur = 0;
  let prev = 0;
  let missingPts = 0;
  let prevMissingPts = 0;
  let potentialRemainingPts = 0;
  let startingNo = dataContestants.length;
  let weekPts = []
  let contestantIDs = dataContestants.map((contestant)=>contestant.id);
  dataWeeks.forEach(week=>{
    if (week.currentWk) constants.curWeek = week;
    // make the cuts the number of actual cuts or predicted cuts
    startingNo = startingNo - week.cutNo;
    const weekPicks = picks.slice(0, (startingNo));
    console.log(name, weekPicks)
    if (week.cuts){
      contestantIDs = contestantIDs.filter( ( id ) => !week.cuts.includes( id ) );
      weekPicks.forEach(pickCnt=>{
        if (contestantIDs.indexOf(pickCnt) > -1) {
          cur += week.points;
          if (!week.currentWk)  prev += week.points;
        }
      });
      weekPts.push(cur);
    }
    if (!week.cuts) {weekPicks.forEach(pickCnt=>{
      if (!(contestantIDs.indexOf(pickCnt) > -1)) {
        missingPts += week.points;
      if (!week.currentWk)  prevMissingPts += week.points;
      } else {
        potentialRemainingPts += week.points;
      }
    })
  }
  // console.log(name, week, potentialRemainingPts)
    })
  return {cur,prev,missingPts, potentialRemainingPts, prevMissingPts, weekPts};
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

function compareSecondaryScore(a,b) {
  if (a.missingPts < b.missingPts) {
    return -1;
  }
  if (a.missingPts > b.missingPts)
    return 1;
  return 0;
}

function comparePreviousSecondaryScore(a,b) {
  if (a.previousMissingPts < b.previousMissingPts) {
    return -1;
  }
  if (a.previousMissingPts > b.previousMissingPts)
    return 1;
  return 0;
}

function lintStandings() {
  const filtered = [];
  const secondFiltered = [];
  dataStandings.forEach((user,index)=>{
    let score = getScore(user.picks, user.name);
    dataStandings[index].score = score.cur;
    dataStandings[index].previousScore = score.prev;
    dataStandings[index].missingPts = score.missingPts;
    dataStandings[index].prevMissingPts = score.prevMissingPts;
    dataStandings[index].weekPts = score.weekPts;
    dataStandings[index].potentialRemainingPts = score.potentialRemainingPts;
    filtered.push(user);
    secondFiltered.push(user);
  });
  const filteredNew = filtered.sort(compareSecondaryScore).sort(compareScore)
  const secondFilteredNew = secondFiltered.sort(comparePreviousSecondaryScore).sort(comparePreviousScore)
  dataStandings.forEach((user,index)=>{
    const curIndex = findWithAttr(filteredNew, "name", user["name"]);
    const oldIndex = findWithAttr(secondFilteredNew, "name", user["name"]);
    dataStandings[index].diff = oldIndex - curIndex;
  });
}

function lintContestants() {
  dataWeeks.forEach(week=>{
    if (week.cuts) {
      week.cuts.forEach(cutId=>{
        if (dataContestants[cutId-1]) {
        dataContestants[cutId-1].exitWk = week.name;
        }
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
    this.state = {page: "standings"};
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
        jsx = <Brackets dataContestants={dataContestants} dataStandings={dataStandings} dataWeeks={dataWeeks} constants={constants}/>
        break;
        case "standings":
        jsx = <Standings dataStandings={dataStandings} constants={constants} dataWeeks={dataWeeks}/>
        break;
        case "chirps":
        jsx = <Chirps dataStandings={dataStandings} constants={constants}/>
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
    const {page} = this.state
    return (<Fragment><CssBaseline />
    <MuiThemeProvider theme={theme}>
        <AppBar position="sticky" color="default">
          <Toolbar>
          <Button className={`${page === "standings"?'active':''} menuBtn`} onClick={this.changePage} size="medium" data-key='standings' aria-label="Open drawer">
             Leaders
            </Button>
            <Button className={`${page === "brackets"?'active':''} menuBtn`} onClick={this.changePage} size="medium" data-key='brackets' aria-label="Open drawer">
             Brackets
            </Button>
          <Button className={`${page === "contestants"?'active':''} menuBtn`} onClick={this.changePage} size="medium" data-key='contestants' aria-label="Open drawer">
             Contestants
            </Button>
            {/* <Button className={`${page === "chirps"?'active':''} menuBtn`} onClick={this.changePage} size="medium" data-key='chirps' aria-label="Open drawer">
             Chirps
            </Button> */}
      </Toolbar>
      </AppBar>
      <Fragment>
        <div className="container">
      {this.getContent()}
      </div>
      </Fragment>
    </MuiThemeProvider>
    </Fragment>
    );
  }
}

export default App;
