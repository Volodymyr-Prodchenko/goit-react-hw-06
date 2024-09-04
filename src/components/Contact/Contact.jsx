import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteContact, editContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";
import EditContactModal from "../EditContactModal/EditContactModal";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  const handleEdit = (updatedContact) => {
    dispatch(editContact(updatedContact));
    setIsEditing(false);
  };

  return (
    <>
      <li className={css.contact}>
        <div className={css.contactBox}>
          <span className={css.name}>{contact.name}</span>
          <span className={css.number}>{contact.number}</span>
        </div>
        <div className={css.contactBox}>
          <button onClick={() => setIsEditing(true)} className={css.buttonEdit}>
            Edit
          </button>
          <button onClick={handleDelete} className={css.buttonDelete}>
            Delete
          </button>
        </div>
      </li>
      {isEditing && (
        <EditContactModal
          contact={contact}
          onSave={handleEdit}
          onCancel={() => setIsEditing(false)}
        />
      )}
    </>
  );
};

export default Contact;
