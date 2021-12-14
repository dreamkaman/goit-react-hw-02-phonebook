import { Component } from 'react';
import { nanoid } from 'nanoid';

import RegistrationForm from './RegistrationForm';
import Section from './Section';
import ContactList from './ContactList';
import InputElement from './RegistrationForm/InputElement';

import styles from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

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
      contacts: [
        ...prevstate.contacts,
        { id: nanoid(), name: this.state.name, number: this.state.number },
      ],
      name: '',
      number: '',
    }));
  };

  filterContacts = text =>
    this.state.contacts.filter(contact => contact.name.toUpperCase().includes(text.toUpperCase()));

  handleDelete = event => {
    console.log(event.target.parentElement.id);

    const newContacts = this.state.contacts.filter(
      contact => contact.id !== event.target.parentElement.id,
    );

    this.setState(() => ({ contacts: newContacts }));
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          <RegistrationForm
            onSubmit={this.handleSubmit}
            onChange={this.handleChange}
            name={this.state.name}
            number={this.state.number}
          />
        </Section>
        <Section title="Contacts">
          <InputElement
            className={styles.filter}
            name="filter"
            type="text"
            value={this.state.filter}
            text="Find contacts by name"
            onChange={this.handleChange}
          />
          <ContactList
            contacts={this.filterContacts(this.state.filter)}
            onClick={this.handleDelete}
          />
        </Section>
      </>
    );
  }
}

export default App;
