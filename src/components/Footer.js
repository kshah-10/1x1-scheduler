import React from 'react';
import { Typography, Container } from '@material-ui/core';

function Footer() {
  return (
    <footer>
      <Container maxWidth="sm">
        <Typography variant="body2" color="textSecondary" align="center">
          © {new Date().getFullYear()} CareerCarve 1x1 Scheduler
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;