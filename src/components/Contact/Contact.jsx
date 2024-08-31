// import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContacts } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const deleteContact = (id) => {
    dispatch(deleteContacts(id));
  };
  return (
    <div className={css["contact"]}>
      <div className={css["contact-box"]}>
        <h2 className={css["contact-name"]}>
          <FaUser size="20" className={css["contact-icon"]} />
          {name}
        </h2>
        <p className={css["contact-phone"]}>
          <FaPhoneAlt size="20" className={css["contact-icon"]} /> {number}
        </p>
      </div>
      <button
        type="button"
        className={css.btn}
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
