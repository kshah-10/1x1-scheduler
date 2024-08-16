import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import StudentDashboard from './components/StudentDashboard';
import MentorDashboard from './components/MentorDashboard';
import Scheduler from './components/Scheduler';
import PaymentPage from './components/PaymentPage';
import './styles/main.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={StudentDashboard} />
          <Route path="/mentor" component={MentorDashboard} />
          <Route path="/schedule" component={Scheduler} />
          <Route path="/payment" component={PaymentPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;