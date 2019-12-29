import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Example1 from './example1';
import Example2 from './example2';
import './app.scss';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/example1" exact component={Example1}/>
          <Route path="/example2" exact component={Example2}/>
          <Route exact component={Example1}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
