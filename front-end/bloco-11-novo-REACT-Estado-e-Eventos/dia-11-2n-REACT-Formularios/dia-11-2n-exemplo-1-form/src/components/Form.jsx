import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
    };
  }


  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <label className="input-label">
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide!
              <textarea id="text-fav-state" name="estadoFavorito" value={this.state.estadoFavorito} onChange={this.handleChange} />
          </label>
          <label htmlFor="input-age" className="input-label">
            Idade:
          <input
            id="input-age"
            type="number"
            name="idade"
            value={this.state.idade}
            onChange={this.handleChange}
          />
          </label>
          <label htmlFor="check-will-attend" className="input-label">
            Vai Comparecer?
          <input
            id="check-will-attend"
            type="checkbox"
            name="vaiComparecer"
            checked={this.state.vaiComparecer}
            onChange={this.handleChange}
          />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;