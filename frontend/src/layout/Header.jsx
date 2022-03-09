import PropTypes from 'prop-types';
import {
  AppBar, Button, Grid, Link,
} from '@mui/material';
import React from 'react';

function Header(props) {
  const { isLoggedIn } = props;

  return (
    <AppBar>
      <Grid container alignItems="center" justifyContent="end" spacing={2}>
        <Grid item>
          <Link
            href="Link.to/Datenschutz"
            color="inherit"
          >
            Datenschutz
          </Link>
        </Grid>
        <Grid item>
          <Link
            href="Link.to/Impressum"
            color="inherit"
          >
            Impressum
          </Link>
        </Grid>
        <Grid item>
          {isLoggedIn ? (
            <div>Admin</div>
          ) : (
            <Button color="inherit">Login</Button>
          )}
        </Grid>
      </Grid>
    </AppBar>
  );
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool,
};

Header.defaultProps = {
  isLoggedIn: false,
};

export default Header;
