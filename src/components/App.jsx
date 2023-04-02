import { useState } from 'react';
import { ContactForm } from './phonebookForm/PhonebookForn';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { ContactList } from './contactsList/ContactList';
import { Filter } from './filter/Filter';
import  initialContacts  from './InitialContacts/initialContacts.json';
import { useEffect } from 'react';

const getInitialContacts = () => {
  const savedContacts = localStorage.getItem('contacts')
  if (savedContacts !== null) {
    const parsedContacts = JSON.parse(savedContacts);
    return parsedContacts;
  }
  return initialContacts;
};

export const App = () => {
  // const [contacts, setContacts] = useState(getInitialContacts);
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  
  // const handleFilterInput = evt => { 
  //   setFilter(evt.target.value)
  // }

  // const getFindContact = () => {
  //   const normalizedFilter = filter.toLowerCase();
   
  //   return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter)) 
    
  // }

  
  //  const addContact = newContact => {
  //   const normalizeName = newContact.name.toLowerCase();
  //   contacts.find(
  //     (contact) => contact.name.toLowerCase() === normalizeName
  //   )
  //     ? alert(`${normalizeName} is already on contacts`)
  //     : setContacts((prewContacts) => [newContact, ...prewContacts]);
  // };

  // const deleteContact = contactId => { 
  //   setContacts(pervState => { 
  //     return (
  //       pervState.filter(contact => contact.id !== contactId)
  //     )
  //   })
  // }

    return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      <GlobalStyle />
    </Layout>
  )
};
