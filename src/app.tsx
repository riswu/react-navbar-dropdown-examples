import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Example1 from './example1';
import Example2 from './example2';
import './app.scss';

const App: React.FC = () => {
  return (
    <HashRouter basename="/">
      <div className="app">
        <Switch>
          <Route path="/example1" exact component={Example1} />
          <Route path="/example2" exact component={Example2} />
          <Route exact component={Example1} />
        </Switch>
        <div className="body">
          <div className="body__note">
            The example is here <FontAwesomeIcon icon={faArrowUp} />
          </div>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
