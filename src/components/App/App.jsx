import React from 'react';
import axios from 'axios';

import { HashRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Header from '../Header/Header'
import Welcome from '../Welcome/Welcome';
import UserFeeling from '../UserFeeling/UserFeeling';
import UserUnderstanding from '../UserUnderstanding/UserUnderstanding';
import UserSupport from '../UserSupport/UserSupport';
import UserComment from '../UserComment/UserComment';
import Review from '../Review/Review';
import SubmitConfirmation from '../SubmitConfirmation/SubmitConfirmation';

function App() {

  return (
    <div className='App'>
      <Router>
        <Header />
        <Route exact path='/'>
          <Welcome />
        </Route>
        <Route exact path='/feeling'>
          <UserFeeling />
        </Route>
        <Route exact path='/understanding'>
          <UserUnderstanding />
        </Route>
        <Route exact path='/support'>
          <UserSupport />
        </Route>
        <Route exact path='/comment'>
          <UserComment />
        </Route>
        <Route exact path='/review'>
          <Review />
        </Route>
        <Route exact path='/confirmation'>
          <SubmitConfirmation />
        </Route>
      </Router>
    </div>
  );
}

export default App;
