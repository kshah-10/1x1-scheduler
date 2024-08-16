import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Container } from '@material-ui/core';
import { students } from '../data/mockData';

function StudentDashboard() {
  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Student Dashboard
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome, {students[0].name}!
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/schedule">
        Schedule a 1x1 Session
      </Button>
    </Container>
  );
}

export default StudentDashboard;