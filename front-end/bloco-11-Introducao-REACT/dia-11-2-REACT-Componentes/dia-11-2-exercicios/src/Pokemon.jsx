import React, { Component } from "react";
import PropTypes from 'prop-types';

class Pokemon extends Component {

  render() {
    const { thisPoke } = this.props;
    const { averageWeight } = thisPoke;
    return (
      <article className="Pokemon">
        <div className="pokeData">
        <h4>{thisPoke.name}</h4>
        <p>{thisPoke.type}</p>
        <p>{averageWeight.value} {averageWeight.measurementUnit}</p>
        </div>
        <img src={thisPoke.image} alt={`Imagem de ${thisPoke.name}`} />
      </article>
    );
  }
}

Pokemon.propTypes = {
  thisPoke: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.string.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    })
  })
}

export default Pokemon;
