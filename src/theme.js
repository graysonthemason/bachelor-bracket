import 'babel-polyfill';
import {
  createMuiTheme
} from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      }
    },
    // MuiPaper: {
    //   rounded: {
    //     borderRadius: '2px'
    //   },
    //   elevation1: {
    //     boxShadow: 'none',
    //     border: 'solid 1px #eee'
    //   }
    // },
    MuiTableCell: {
      root: {
        padding: '4px 24px 4px 24px'
      }
    },
    MuiTypography: {
    //   h4: {
    //     color: 'rgba(0, 0, 0, 0.5)'
    //   },
    //   h5: {
    //     fontFamily: ['Montserrat', 'sans-serif'].join(',')
    //   },
      h1: {
        fontSize: '1.5rem',
        fontFamily: ['Montserrat', 'sans-serif'].join(','),
        paddingLeft: '12px',
        paddingTop: '12px'
      },
      h2: {
        textTransform: 'uppercase',
        fontFamily: ['Montserrat', 'sans-serif'].join(','),
        paddingLeft: '12px',
    //     color: 'rgba(0, 0, 0, 0.C75)',
    //     // background: '#444',
    //     // padding: '1rem',
        fontSize: '.8rem',
    //     fontFamily: ['Montserrat', 'sans-serif'].join(',')
      }
    }
  },
  palette: {
    // text: {
    //   primary: 'rgba(0, 0, 0, 0.75)',
    //   secondary: 'rgba(0,0,0,.5)'
    // },
    // primary: {
    //   // main: '#226E72'
    //   // main: '#47A29C' //teal
    //   // main: 'rgb(0, 106, 112)' //darker teal
    //   main: '#15304C'
    // }, // rgb(71,162,156)
    // secondary: {
    //   // main: '#FFAE70'
    //   main: '#91584A'
    // },
    // error: {
    //   main: '#7F2B23',
    //   light: '#e96363'
    // }
  },
  typography: {
    // useNextVariants: true, // https://material-ui.com/style/typography/#migration-to-typography-v2
    // // Use the system font instead of the default Roboto font.
    // fontFamily: ['Lato', 'sans-serif'].join(',')
  }
});

export default theme;
