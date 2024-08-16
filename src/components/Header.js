import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          1x1 Scheduler
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Student Dashboard
        </Button>
        <Button color="inherit" component={Link} to="/mentor">
          Mentor Dashboard
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;