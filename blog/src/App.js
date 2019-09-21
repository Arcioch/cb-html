import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Homepage from './pages/homepage/homepage.component';
import './styles/style.scss';
import NotFound from './pages/notFound/notFound.component';
import NavBar from './components/navBar/navBar.component';
import InstagramFeed from './components/instagramFeed/instagramFeed.component';
import Footer from './components/footer/footer.component';
import NewsDetail from './pages/newsDetail/newsDetail.component';
import Author from './pages/author/author.component';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/artykul/:slug' component={NewsDetail} />
        <Route path='/autor/:slug' component={Author} />
        <Route component={NotFound} />
      </Switch>
      <InstagramFeed />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
