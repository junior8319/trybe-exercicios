import React from 'react';

class PersonalData extends React.Component {
  render() {
    const { handleChange, currentState } = this.props;
    return (
      <fieldset>
        <label htmlFor="input-name">Nome:</label>
        <input
          type="text"
          name="name"
          id="input-name"
          maxLength="40"
          required
          onChange={ handleChange }
          value={ currentState.name }
        />
        <label htmlFor="input-email">Email:</label>
        <input
          type="email"
          name="email"
          id="input-email"
          required
          maxLength="50"
          onChange={ handleChange }
          value={ currentState.email }
        />
      </fieldset>
    );
  }
}

export default PersonalData;