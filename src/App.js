import React from 'react';
import Header from './components/Header'; // importando o componente da 'Header.js' p/ usar
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <SolarSystem />
      </main>
    );
  }
}

export default App;
