import React from 'react';
import PropTypes from 'prop-types';

class PlanetCart extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;

    return (
      <div
        data-testid="planet-card"
        className={ `planet-card ${planetName
          .toLowerCase()
          .replace('ú', 'u')
          .replace('ê', 'e')}` }
      >
        <p data-testid="planet-name">{planetName}</p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

PlanetCart.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};
export default PlanetCart;
