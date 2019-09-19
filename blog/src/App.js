import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Homepage from './pages/homepage/homepage.component';
import './styles/style.scss';
import NotFound from './pages/notFound/notFound.component';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
