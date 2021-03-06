import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, NavLink } from 'react-router-dom'
import './App.css';
import Landing from './components/Landing.js';
import Library from './components/Library.js';
import Album from './components/Album.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <NavLink 
            to="/"
            activeStyle={{
              padding: "16px",
            }}
            >Landing</NavLink>
            <NavLink 
            to="/library"
            >Library</NavLink>
          </nav>
          <h1>Bloc Jams</h1>
        </header>
        <main>
          <Route exact path="/" component={ Landing } />
          <Route path="/library" component={ Library } />
          <Route path="/album/:slug" component={ Album } />
        </main>
      </div>
    );
  }
}

export default App;
