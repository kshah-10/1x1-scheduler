import React from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

function Calendar({ events, onSelectSlot }) {
  return (
    <BigCalendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
      onSelectSlot={onSelectSlot}
      selectable
      views={['month', 'week', 'day']}
      defaultView="week"
      min={new Date(2023, 0, 1, 9, 0)} // 9:00 AM
      max={new Date(2023, 0, 1, 19, 0)} // 7:00 PM
    />
  );
}

export default Calendar;