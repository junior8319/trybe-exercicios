import React from 'react';
import DisplayData from './DisplayData';
import PersonalData from './PersonalData';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    let { name, value } = target;
    if (name === 'name') value = value.toUpperCase();
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = event => {
    this.setState({
      submitted: true,
    });
    event.preventDefault()
  };

  render() {
    const { submitted } = this.state;
    return(
      <main>
        <form onSubmit={ this.handleSubmit }>
          <h1>Curriculum Vitae</h1>
          <p>Exercícios - Dia 11.2</p>
          <PersonalData handleChange={ this.handleChange } currentState={this.state}/>
          <input type="submit" value="Enviar" />
        </form>
        { submitted && <DisplayData currentState={ this.state } /> }
      </main>
    );
  }

}

export default Form;
