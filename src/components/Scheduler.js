import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Button, Select, MenuItem, FormControl, InputLabel, Container } from '@material-ui/core';
import { mentors, areasOfInterest, schedules } from '../data/mockData';

const localizer = momentLocalizer(moment);

function Scheduler() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [duration, setDuration] = useState(30);
  const [areaOfInterest, setAreaOfInterest] = useState('');
  const [preferredMentor, setPreferredMentor] = useState('');
  const history = useHistory();

  const handleSelectSlot = (slotInfo) => {
    setSelectedDate(slotInfo.start);
  };

  const handleSchedule = () => {
    const newSchedule = {
      id: schedules.length + 1,
      studentId: 1, // Assuming the logged-in student has ID 1
      studentName: "John Doe", // Assuming the logged-in student's name
      mentorId: preferredMentor ? parseInt(preferredMentor) : mentors.find(m => m.areas.includes(areaOfInterest)).id,
      startTime: selectedDate,
      duration: duration,
      areaOfInterest: areaOfInterest,
    };
    schedules.push(newSchedule);
    history.push('/payment');
  };

  return (
    <Container maxWidth="md">
      <h2>Schedule a 1x1 Session</h2>
      <Calendar
        localizer={localizer}
        events={schedules.map(s => ({
          start: new Date(s.startTime),
          end: new Date(new Date(s.startTime).getTime() + s.duration * 60000),
          title: `${s.studentName} - ${s.areaOfInterest}`,
        }))}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectSlot={handleSelectSlot}
        selectable
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Duration</InputLabel>
        <Select value={duration} onChange={(e) => setDuration(e.target.value)}>
          <MenuItem value={30}>30 minutes</MenuItem>
          <MenuItem value={45}>45 minutes</MenuItem>
          <MenuItem value={60}>60 minutes</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Area of Interest</InputLabel>
        <Select value={areaOfInterest} onChange={(e) => setAreaOfInterest(e.target.value)}>
          {areasOfInterest.map((area, index) => (
            <MenuItem key={index} value={area}>{area}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Preferred Mentor (Optional)</InputLabel>
        <Select value={preferredMentor} onChange={(e) => setPreferredMentor(e.target.value)}>
          <MenuItem value="">Any available mentor</MenuItem>
          {mentors.map((mentor) => (
            <MenuItem key={mentor.id} value={mentor.id}>{mentor.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" onClick={handleSchedule} disabled={!selectedDate || !areaOfInterest}>
        Schedule Session
      </Button>
    </Container>
  );
}

export default Scheduler;