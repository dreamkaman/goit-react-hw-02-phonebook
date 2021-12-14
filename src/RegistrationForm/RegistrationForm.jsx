import PropTypes from 'prop-types';
import { Component } from 'react';

import InputElement from './InputElement';
import Button from '../Button';

import styles from './RegistrationForm.module.css';

class RegistrationForm extends Component {
  render() {
    return (
      <form className={styles.form} onSubmit={this.props.onSubmit}>
        <InputElement
          value={this.props.name}
          text="Name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={this.props.onChange}
        />
        <InputElement
          value={this.props.number}
          text="Number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={this.props.onChange}
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
