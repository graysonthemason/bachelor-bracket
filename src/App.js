import React, {
  Component, Fragment
} from 'react';
import './App.css';
import Home from './Home';
import Standings from './Standings';
import Brackets from './Brackets';
import Contestants from './Contestants';

import theme from './theme.js';

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

// @material-ui
import { MuiThemeProvider } from '@material-ui/core/styles';
// Custom child components
import CssBaseline from '@material-ui/core/CssBaseline';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {page: "home"};
    this.changePage = this.changePage.bind(this);
  }

  getContent() {
    const {page} = this.state
    let jsx;
    switch (page) {
      case "home":
        jsx = <Home/>
        break;
        case "contestants":
        jsx = <Contestants/>
        break;
        case "brackets":
        jsx = <Brackets/>
        break;
        case "standings":
        jsx = <Standings/>
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
