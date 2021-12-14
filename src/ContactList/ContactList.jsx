const ContactList = ({ contacts }) => {
  if (!contacts.length) {
    return null;
  }

  const elements = contacts.map(({ name, id, number }) => {
    return (
      <li id={id} key={id}>
        {name}: {number}
      </li>
    );
  });
  return <ul>{elements}</ul>;
};

export default ContactList;
