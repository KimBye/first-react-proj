import React, { Component } from 'react';

// install the package
  // npm i --dev---save react-router-dom
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

// components
import Header from './components/headerComponents/header';
import Footer from './components/footerComponents/footer';
import HomePage from './components/pages/homePage';
import Products from './components/pages/products';

// Include
import './Assets/css/default.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Header />
            <Route exact path='/' component={HomePage} />
            <Route exact path='/products' component={Products} />
          <Footer />

        </div>
      </Router>
    );
  }
}

export default App;
