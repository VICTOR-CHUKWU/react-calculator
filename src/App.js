import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Calculator from './component/Calculator';
import Home from './component/home/Home';
import Quote from './component/quote/Quote';
import Header from './component/Header';

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/calculator" component={Calculator} />
      <Route exact path="/quote" component={Quote} />
    </Switch>
  </>
);
export default App;
