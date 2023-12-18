import { List, DeleteBtn } from './ContactList.styled';
const ContactList = ({ filterContacts, onDeleteContact }) => {
  return (
    <List>
      {filterContacts.map(contact => (
        <li
          key={contact.id}
          style={{
            fontSize: 30,
          }}
        >
          {contact.name}: {contact.number}
          <DeleteBtn type="button" onClick={() => onDeleteContact(contact.id)}>
            Delete
          </DeleteBtn>
        </li>
      ))}
    </List>
  );
};
export default ContactList;
