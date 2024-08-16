import React from 'react';
import { useHistory } from 'react-router-dom';
import { Typography, Container, Button } from '@material-ui/core';
import { schedules } from '../data/mockData';

function PaymentPage() {
  const history = useHistory();
  const lastSchedule = schedules[schedules.length - 1];
  const amount = lastSchedule.duration === 30 ? 2000 : lastSchedule.duration === 45 ? 3000 : 4000;

  const handlePayment = () => {
    alert('Payment successful!');
    history.push('/');
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Payment Page
      </Typography>
      <Typography variant="body1" paragraph>
        You are about to book a {lastSchedule.duration}-minute session for {lastSchedule.areaOfInterest}.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Amount to pay: ₹{amount}
      </Typography>
      <Button variant="contained" color="primary" onClick={handlePayment}>
        Proceed to Payment
      </Button>
    </Container>
  );
}

export default PaymentPage;