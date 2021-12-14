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

    this.setState(prevstate => ({
      contacts: [
        ...prevstate.contacts,
        { id: nanoid(), name: this.state.name, number: this.state.number },
      ],
      name: '',
      number: '',
    }));
  };

  filterContacts = () =>
    this.state.contacts.filter(contact =>
      contact.name.toUpperCase().includes(this.state.filter.toUpperCase()),
    );

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
          <ContactList contacts={this.filterContacts()} />
        </Section>
      </>
    );
  }
}

export default App;
