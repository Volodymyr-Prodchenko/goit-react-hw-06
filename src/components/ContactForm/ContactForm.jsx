import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact, selectContacts } from "../../redux/contactsSlice";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contacts.some((contact) => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ id: nanoid(), name, number }));
    setName("");
    setNumber("");
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label className={css.label}>
        Number
        <input
          className={css.input}
          type="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
      </label>
      <button className={css.button} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
