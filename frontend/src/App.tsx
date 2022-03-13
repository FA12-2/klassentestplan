import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';
import React from 'react';
import Content from './layout/Content';
import Header from './layout/Header';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4C4AAF',
    },
  },
});

const headerToolbarHeight: string = '55px';
const bannerHeight: string = '170.85px';

const useStyles = makeStyles(() => createStyles({
  mainContent: {
    top: `calc(${headerToolbarHeight} + ${bannerHeight})`,
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'transparent',
    overflowY: 'auto',
    height: `calc(100vh - ${headerToolbarHeight} - ${bannerHeight})`,
  },
  banner: {
    backgroundColor: theme.palette.primary.main,
    // display: {
    //   xs: 'none',
    //   sm: 'block',
    // },
    top: `calc(${headerToolbarHeight} + 20px)`,
    position: 'fixed',
    height: bannerHeight,
    width: '100vw',
  },
  bar: {
    backgroundColor: '#1C1D1F',
    paddingY: '10px',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header test={classes} />
      <main className={classes.mainContent}>
        <Content />
      </main>
    </ThemeProvider>
  );
}

export default App;
