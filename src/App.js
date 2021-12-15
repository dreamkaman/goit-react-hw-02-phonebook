import { Component } from 'react';

import ContactForm from './ContactForm';
import Section from './Section';
import ContactList from './ContactList';
import InputElement from './ContactForm/InputElement';

import styles from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  filterContacts = text =>
    this.state.contacts.filter(contact => contact.name.toUpperCase().includes(text.toUpperCase()));

  handleDelete = event => {
    const newContacts = this.state.contacts.filter(
      contact => contact.id !== event.target.parentElement.id,
    );

    this.setState(() => ({ contacts: newContacts, filter: '' }));
  };

  onSubmit = () =>
    this.setState(prevstate => ({
      contacts: [
        ...prevstate.contacts,
        { id: this.props.id, name: this.props.name, number: this.props.number },
      ],
    }));

  render() {
    return (
      <>
        <Section title="Phonebook">
          <ContactForm
            onSubmit={this.onSubmit}
            // onChange={this.props.onChange}
            // name={this.props.name}
            // number={this.props.number}
            contacts={this.state.contacts}
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
            contacts={this.filterContacts(this.state.filter)} //!!!!!!!
            onClick={this.handleDelete}
          />
        </Section>
      </>
    );
  }
}

export default App;
