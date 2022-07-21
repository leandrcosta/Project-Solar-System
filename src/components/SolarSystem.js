import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCart from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div>
          { planets.map(({ name, image }) => (
            <PlanetCart
              key={ name }
              planetName={ name }
              planetImage={ image }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
