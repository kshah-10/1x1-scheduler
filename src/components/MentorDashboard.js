import React from 'react';
import { Typography, Container, List, ListItem, ListItemText } from '@material-ui/core';
import { mentors, schedules } from '../data/mockData';

function MentorDashboard() {
  const mentor = mentors[0];
  const mentorSchedules = schedules.filter(schedule => schedule.mentorId === mentor.id);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Mentor Dashboard
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome, {mentor.name}!
      </Typography>
      <Typography variant="h6" gutterBottom>
        Your Upcoming Sessions:
      </Typography>
      <List>
        {mentorSchedules.map((schedule, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={`${schedule.studentName} - ${schedule.areaOfInterest}`}
              secondary={`${new Date(schedule.startTime).toLocaleString()} (${schedule.duration} minutes)`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default MentorDashboard;