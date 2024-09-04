import { useState, useEffect } from "react";
import css from "./EditContactModal.module.css";

const EditContactModal = ({ contact, onSave, onCancel }) => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  useEffect(() => {
    const scrollPosition = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = "100%";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollPosition);
    };
  }, []);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...contact, name, number });
  };

  return (
    <div className={css.modalBackdrop} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <h2>Edit Contact</h2>
        <form onSubmit={handleSubmit}>
          <label className={css.label}>
            Name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={css.input}
              required
            />
          </label>
          <label className={css.label}>
            Number
            <input
              type="tel"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className={css.input}
              required
            />
          </label>
          <div className={css.buttons}>
            <button type="submit" className={css.saveButton}>
              Save
            </button>
            <button
              type="button"
              onClick={onCancel}
              className={css.cancelButton}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditContactModal;
