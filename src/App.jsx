// import { useState, useEffect } from "react";

import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import css from "./App.module.css";
// import dataContacts from "./contacts.json";
// import { nanoid } from "nanoid";
// import { useDispatch, useSelector } from "react-redux";
// import { addContact, deleteContacts } from "./redux/contactsSlice";
// import { setFilterValue } from "./redux/filtersSlice";

function App() {
  // const [contacts, setContacts] = useState(() => {
  //   const localStorageValue = window.localStorage.getItem("contactsValue");
  //   if (localStorageValue !== null) {
  //     return JSON.parse(localStorageValue);
  //   }
  //   return dataContacts;
  // });
  // const dispatch = useDispatch();
  // const contacts = useSelector((state) => {
  //   state.contacts.contacts;
  // });
  // const filterValue = useSelector((state) => {
  //   state.filter.filters;
  // });
  // const [inputValue, setInputValue] = useState("");
  // console.log("inputValue", inputValue);

  // useEffect(() => {

  //   window.localStorage.setItem("contactsValue", JSON.stringify(contacts));
  // }, [contacts]);

  // const onAddContact = (friend) => {
  //   const newContact = {
  //     ...friend,
  //     id: nanoid(),
  //   };
  //   dispatch(addContact(newContact));
  // };
  // console.log(onAddContact);

  // const handleFilter = (event) => {
  //   const value = event.target.value;

  //   const action = setFilterValue(value);

  //   dispatch(action);
  //   console.log(action);
  // };

  // console.log(contacts);
  // const filteredContacts = contacts.filter((contact) => {
  //   return contact.name.toLowerCase().includes(filterValue.toLowerCase());
  // });

  // const deleteContact = (contactId) => {
  //   dispatch(deleteContacts(contactId));
  // };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />

      <ContactList />
    </div>
  );
}

export default App;
