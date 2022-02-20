import './App.css';
import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SolarSystem />
        <Title headline="Missões" />
        <Missions />
      </div>
    );
  }
}

export default App;
