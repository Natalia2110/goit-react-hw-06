import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";
import { selectContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectNameFilter);
  // console.log(contacts);
  // console.log(filterValue);

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filterValue.toLowerCase());
  });
  // console.log(filteredContacts);
  return (
    <ul className={css["contacts-list"]}>
      {filteredContacts.map((contact) => {
        return (
          <li key={contact.id} className={css["contacts-item"]}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
