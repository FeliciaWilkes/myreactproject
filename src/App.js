import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/SkillsdirectoryComponent';
import './App.css';
import { SKILLS } from './shared/skills';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: SKILLS
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar className="color-nav" dark>
          <div className="container">
            <NavbarBrand href="/">FELICIA WILKES</NavbarBrand>
          </div>
        </Navbar>
        <Directory skills={this.state.skills}/>
      </div>
    );
  }
}

export default App;
