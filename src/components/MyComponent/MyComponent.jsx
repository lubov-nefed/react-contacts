/* eslint-disable react/prop-types */
//import "./MyComponent.css";
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
        <h4>ContactInfo</h4>
        <p>Name: {contact.name}</p>
        <p>Email: {contact.email}</p>
      </section>
    </>
  );
}

function ContactsList({ contacts, activeContact, onPick, onEdit, onDelete }) {
  return (
    <section>
      <h3>ContactsList</h3>

      <ul>
        {contacts.map((contact) => (
          <li
            className="contact-li"
            key={contact.id}
            onClick={() => onPick(contact)}
          >
            <button className={"contact-btn"} onClick={() => onPick(contact)}>
              {contact.name}
            </button>
            <span>-----</span>
            <button
              className={
                contact.name === activeContact.name
                  ? "secondary-btn"
                  : "secondary-btn--inactive"
              }
              onClick={onEdit}
            >
              Edit
            </button>
            <span>-----</span>
            <button
              className={
                contact.name === activeContact.name
                  ? "secondary-btn"
                  : "secondary-btn--inactive"
              }
              onClick={() => onDelete(contact)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

function ContactEditPreview({ contact }) {
  return (
    <section>
      <h4>ContactEditPreview</h4>
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
    </section>
  );
}

function ContactEditForm({ contact, onChange, onSubmit, onReset }) {
  return (
    <>
      <form onSubmit={onSubmit} onReset={onReset}>
        <h4>ContactEditForm</h4>
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
        <button type="submit">Save</button>
        <button type="reset">Reset</button>
      </form>
    </>
  );
}
function MyComponent() {
  const [contacts, setContacts] = useState(initialContacts);
  const [activeContact, setActiveContact] = useState(contacts[0]); //{ id: 0, name: "Taylor", email: "taylor@mail.com" }
  const [displayedContact, setDisplayedContact] = useState(contacts[0]); //{ id: 0, name: "Taylor", email: "taylor@mail.com" }
  const [formText, setFormText] = useState(contacts[0]);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <h2>MyComponent</h2>
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
            onDelete={(contact) => {
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

export { MyComponent };
