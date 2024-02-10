import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route } from 'react-router-dom';

import Form from '../Form/Form';
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';

// import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Form />

        {/* <Route path="/" exact>
          <Feeling />
        </Route> */}
      </Router>
    </div>
  );
}

export default App;
