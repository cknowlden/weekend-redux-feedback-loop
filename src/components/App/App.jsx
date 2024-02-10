import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';

// import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Route path="/" exact>
          <Feeling />
        </Route>
      </Router>
    </div>
  );
}

export default App;
