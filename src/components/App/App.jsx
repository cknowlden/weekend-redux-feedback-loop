import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Submitted from '../Submitted/Submitted';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route path="/" exact>
          <Feeling />
        </Route>

        <Route path="/understanding" exact>
          <Understanding />
        </Route>

        <Route path="/supported" exact>
          <Supported />
        </Route>

        <Route path="/comments" exact>
          <Comments />
        </Route>

        <Route path="/review" exact>
          <Review />
        </Route>

        <Route path="/submitted" exact>
          <Submitted />
        </Route>
      </Router>
    </div>
  );
}

export default App;
