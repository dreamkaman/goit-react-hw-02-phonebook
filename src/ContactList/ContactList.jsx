import Button from '../Button';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onClick }) => {
  if (!contacts.length) {
    return null;
  }

  const elements = contacts.map(({ name, id, number }) => {
    // onClick={this.props.onClick}

    return (
      <li id={id} key={id} className={styles.list}>
        {name}: {number} <Button type="button" text="Delete" onClick={onClick} />
      </li>
    );
  });
  return <ul>{elements}</ul>;
};

export default ContactList;
