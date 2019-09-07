import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import Contact from './pages/contact/contact.component';
import Navbar from './components/navbar/navbar.component';
import NewsDetail from './pages/newsDetail/newsDetail.component';
import NewsList from './pages/newsList/newsList.component';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/kontakt" component={Contact} />
        <Route path="/news-list" component={NewsList} />
        <Route path="/news/:id" component={NewsDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
