import PropTypes from 'prop-types';
import {
  AppBar, Box, Button, ClassNameMap, Grid,
} from '@mui/material';
import React from 'react';

function Header(test: ClassNameMap) {
  const { bar, banner } = test;

  return (
    <>
      <AppBar className={bar}>
        <Grid container alignItems="center" justifyContent="end" spacing={2}>
          <Grid item>
            <Button color="inherit">Login</Button>
          </Grid>
        </Grid>
      </AppBar>
      <Box className={banner} />
    </>
  );
}

Header.propTypes = {
  classes: PropTypes.shape({
    banner: PropTypes.string,
    bar: PropTypes.string,
  }).isRequired,
};

export default Header;
