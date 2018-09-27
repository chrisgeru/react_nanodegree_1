import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import ListProfiles from './Components/ListProfiles';
import profiles from './Data/Profiles';
/*
Use React and the data below to display a list of users alongside their favorite movies.

For detailed instructions, refer to instructions.md.
*/

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h1>Favorite Movies</h1>
		<ListProfiles profiles={profiles} />
      </div>
    );
  }
}

export default App;
