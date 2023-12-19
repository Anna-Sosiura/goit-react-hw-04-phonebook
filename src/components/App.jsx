import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

// { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },

export const App = () => {
  const [contacts, setContacts] = useState([
    ...JSON.parse(localStorage.getItem('contacts')),
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    contacts && localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmit = data => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is already in contacts`);
      return;
    }
    setContacts(prevContacts => [...contacts, { id: nanoid(), ...data }]);
  };

  const handleChangeFilter = e => {
    setFilter(e.currentTarget.value.toLowerCase());
  };

  const getFilter = () => {
    const normFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normFilter)
    );
  };

  const deleteContact = deleteId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== deleteId)
    );
  };

  return (
    <div
      style={{
        marginLeft: 50,
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmit}></ContactForm>
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleChangeFilter} />
      <ContactList
        filterContacts={getFilter()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};
