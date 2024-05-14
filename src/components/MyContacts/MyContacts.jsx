/* eslint-disable react/prop-types */
import "./MyContacts.css";
import { useState } from "react";
import { Button } from "../Button/Button.jsx";

const initialContacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];

function ContactInfo({ contact }) {
  return (
    <>
      <section>
        <h4>Contact Info</h4>
        <p>Name: {contact.name}</p>
        <p>Email: {contact.email}</p>
      </section>
    </>
  );
}

function ContactsList({ contacts, activeContact, onPick, onEdit, onDelete }) {
  return (
    <section>
      <h3>Contacts List</h3>

      <ul>
        {contacts.map((contact) => (
          <li
            className="contact-li"
            key={contact.name}
            onClick={() => onPick(contact)}
          >
            {contact.name}
            <span>-----</span>
            <Button
              className={
                contact.name === activeContact.name
                  ? "primary-btn"
                  : "secondary-btn"
              }
              onClick={onEdit}
            >
              Edit
            </Button>
            <span>-----</span>
            <Button
              className={
                contact.name === activeContact.name
                  ? "primary-btn"
                  : "secondary-btn"
              }
              onClick={(e) => onDelete(e, contact)}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ContactEditPreview({ contact }) {
  return (
    <section>
      <h4>Contact Editing Preview</h4>
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
    </section>
  );
}

function ContactEditForm({ contact, onChange, onSubmit, onReset }) {
  return (
    <>
      <form onSubmit={onSubmit} onReset={onReset}>
        <h4>Contact Editing Form</h4>
        <label htmlFor="name">
          Name:
          <input
            name="name"
            type="text"
            value={contact.name}
            onChange={(e) => onChange(e, "name")}
            required
          />
        </label>
        <br />
        <label htmlFor="email">
          Email:
          <input
            name="email"
            type="text"
            value={contact.email}
            onChange={(e) => onChange(e, "email")}
            required
          />
        </label>
        <br />
        <Button type={"submit"} className={"primary-btn"}>
          Save
        </Button>
        <Button type={"reset"} className={"secondary-btn"}>
          Reset
        </Button>
      </form>
    </>
  );
}
function MyContacts() {
  const [contacts, setContacts] = useState(initialContacts);
  const [activeContact, setActiveContact] = useState(contacts[0]); //{ id: 0, name: "Taylor", email: "taylor@mail.com" }
  const [displayedContact, setDisplayedContact] = useState(contacts[0]); //{ id: 0, name: "Taylor", email: "taylor@mail.com" }
  const [formText, setFormText] = useState(contacts[0]);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <h2>My Contacts</h2>
      {contacts.length !== 0 && (
        <>
          <ContactInfo key={activeContact.name} contact={activeContact} />
          <ContactsList
            contacts={contacts}
            activeContact={activeContact}
            onPick={(contact) => {
              setActiveContact(contact);
              setDisplayedContact(contact);
              setFormText(contact);
            }}
            onEdit={() => setIsEditing(true)}
            onDelete={(e, contact) => {
              e.stopPropagation();
              const newContacts = contacts.filter(
                (item) => item.name !== contact.name
              );
              setContacts(newContacts);
              setActiveContact(newContacts[0]);
            }}
          />
        </>
      )}
      {contacts.length === 0 && (
        <>
          <p>Contacts List is empty.</p>
          <button
            onClick={() => {
              setContacts(initialContacts);
              setActiveContact(initialContacts[0]);
            }}
          >
            Reset List
          </button>
        </>
      )}

      {isEditing && (
        <>
          <ContactEditPreview contact={displayedContact} />
          <ContactEditForm
            contact={formText}
            onChange={(e, prop) => {
              setFormText({ ...formText, [prop]: e.target.value });
              setDisplayedContact({
                ...displayedContact,
                [prop]: e.target.value,
              });
            }}
            onSubmit={(e) => {
              e.preventDefault();
              setContacts(
                contacts.map((contact) => {
                  if (formText.id === contact.id) {
                    return formText;
                  } else return contact;
                })
              );
              setActiveContact(formText);
              setIsEditing(false);
            }}
            onReset={() => {
              setFormText({ ...formText, name: "", email: "" });
            }}
          />
        </>
      )}
    </>
  );
}

export { MyContacts };
