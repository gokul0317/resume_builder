import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import store from './store'
import ResumeContainer from './components/ResumeContainer'
import ResumeAdd from './components/ResumeAdd'
import ResumeView from './components/ResumeView'
import NavBar from './components/NavBar'
function App() {
  return (
    <Provider store={store}>
      {/* <Posts /> */}
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" component={ResumeContainer} exact />
          <Route path="/add" component={ResumeAdd} exact />
          <Route path="/edit/:id" component={ResumeAdd} exact /> 
          <Route path="/view/:id" component={ResumeView} exact />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
