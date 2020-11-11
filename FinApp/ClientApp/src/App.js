import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import LoginPage from './page/LoginPage';
import HomePage from './page/HomePage';
import MainTemplate from './templates/MainTemplate';
import { routes } from './theme/MainTheme';
import store from './store/store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <MainTemplate>
            <Switch>
              <Route exact path={routes.loginPage} component={LoginPage} />
              <Route exact path={routes.homePage} component={HomePage} />
              <Route exact path="/history" component={HomePage} />
              <Route exact path={routes.registerPage} component={LoginPage} />
            </Switch>
          </MainTemplate>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
