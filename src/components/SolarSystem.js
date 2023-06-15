import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCart from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className='"solar-system'>
        <Title headline="Planetas" />
        <section className="list-planets">
          { planets.map(({ name, image }) => (
            <PlanetCart
              key={ name }
              planetName={ name }
              planetImage={ image }
            />
          ))}
        </section>
      </div>
    );
  }
}

export default SolarSystem;
