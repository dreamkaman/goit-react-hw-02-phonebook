import PropTypes from 'prop-types';
import { Component } from 'react';
import { nanoid } from 'nanoid';

import InputElement from './InputElement';
import Button from '../Button';

import styles from './RegistrationForm.module.css';

class RegistrationForm extends Component {
  state = {
    name: '',
    number: '',
  };

  filterContacts = text =>
    this.props.contacts.filter(contact => contact.name.toUpperCase().includes(text.toUpperCase()));

  handleChange = event => {
    const key = event.target.name;
    this.setState({
      [key]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.filterContacts(this.state.name).length) {
      alert(`${this.state.name} is already in contacts!`);

      this.setState({
        name: '',
        number: '',
      });
      return;
    }

    this.setState(prevstate => ({
      // contacts: [
      //   ...prevstate.contacts,
      //   { id: nanoid(), name: this.state.name, number: this.state.number },
      // ],
      name: '',
      number: '',
    }));
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <InputElement
          value={this.state.name}
          text="Name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={this.handleChange}
        />
        <InputElement
          value={this.state.number}
          text="Number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={this.handleChange}
        />
        <Button type="submit" text="Add contacts" />
      </form>
    );
  }
}

export default RegistrationForm;

RegistrationForm.propTypes = {
  onSubmit: PropTypes.func,
};
