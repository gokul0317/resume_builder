import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import store from './store'
import ResumeContainerWrapper from './components/ResumeContainer'
import ResumeAddWrapper from './components/ResumeAdd'
import ResumeViewWrapper from './components/ResumeView'

// import MainTest from './components/MainTest'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ResumeContainerWrapper} exact />
          <Route path="/add" component={ResumeAddWrapper} exact />
          <Route path="/edit/:id" component={ResumeAddWrapper} exact /> 
          <Route path="/view/:id" component={ResumeViewWrapper} exact />
          {/* <Route path="/test/hoc" component={MainTest} exact /> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
