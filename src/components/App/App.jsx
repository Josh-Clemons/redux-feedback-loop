import React from 'react';
import axios from 'axios';

import {HashRouter as Router, Route, Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {useState, useEffect} from 'react';

import './App.css';
import Header from '../Header/Header'

function App() {

  return (
    <div className='App'>
        <Header />
        
    </div>
  );
}

export default App;
