import './index.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Library from './components/library.component';
import Welcome from './components/welcome.component';
import AppLayout from './containers/app-layout.component';
import { urlContext } from './state/url.context';
import { useUrl } from './hooks/url.hook';

function App() {
  const url = useUrl();

  console.log(url);

  return (
    <div className="App">
      <urlContext.Provider value={url}>
        <Router>
          <AppLayout>
            <Switch>
              <Route path="/welcome" component={Welcome} />
              <Route path="/library" component={Library} />
              <Redirect from="*" to="/welcome" />
            </Switch>
          </AppLayout>
        </Router>
      </urlContext.Provider>
    </div>
  );
}

export default App;
