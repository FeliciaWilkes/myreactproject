import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar className="color-nav" dark>
          <div className="container">
            <NavbarBrand href="/">FELICIA WILKES</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default App;
