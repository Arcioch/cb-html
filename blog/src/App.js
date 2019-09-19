import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Homepage from './pages/homepage/homepage.component';
import './styles/style.scss';
import NotFound from './pages/notFound/notFound.component';
import NavBar from './components/navBar/navBar.component';
import InstagramFeed from './components/instagramFeed/instagramFeed.component';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route component={NotFound} />
      </Switch>
      <InstagramFeed />
    </BrowserRouter>
  );
}

export default App;
