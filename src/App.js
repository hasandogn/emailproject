import './App.css';
import React from 'react';
import Navbar from './components/pages/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer/Footer';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import SignUp from './components/pages/SignUp/SignUp';
import WhoMe from './components/pages/WhoWe/WhoWe';

function App() {
  return (
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/services' component={Services} />
      <Route path='/products' component={Products} />
      <Route path='/sign-up' component={SignUp} />
      <Route path='/forwhom' component={WhoMe} />
    </Switch>
    <Footer />
  </Router>
  );
}

export default App;
