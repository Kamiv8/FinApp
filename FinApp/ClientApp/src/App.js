import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import LoginPage from './components/page/LoginPage';
import HomePage from './components/page/HomePage';
import MainTemplate from './components/templates/MainTemplate';
import { routes } from './theme/MainTheme';
import store from './store/store';
import HistoryPage from './components/page/HistoryPage';
import SettingsPage from './components/page/SettingsPage';
import GroupPage from './components/page/GroupPage';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <MainTemplate>
            <Switch>
              <Route exact path={routes.loginPage} component={LoginPage} />
              <Route exact path={routes.homePage} render={() => <HomePage />} />
              <Route exact path={routes.historyPage} render={() => <HistoryPage />} />
              <Route exact path={routes.settingsPage} render={() => <SettingsPage />} />
              <Route exact path={routes.groupPage} render={() => <GroupPage />} />
              <Route exact path={routes.registerPage} component={LoginPage} />
            </Switch>
          </MainTemplate>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
