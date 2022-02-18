import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <ul>
          { planets.map(({ name, image }, index) => (
            <PlanetCard
              planetName={ name }
              planetImage={ image }
              key={ index }
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default SolarSystem;
