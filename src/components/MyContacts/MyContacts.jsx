import "./MyContacts.css";
import { useState } from "react";
/* import { Button } from "../Button/Button.jsx";
import { Avatar } from "../Avatar/Avatar.jsx";*/
import { ContactsList } from "../ContactsList/ContactsList.jsx";
import { ContactEditForm } from "../ContactEditForm/ContactEditForm.jsx";
import { initialContacts } from "./initialContacts.jsx";
import { ContactInfo } from "../ContactInfo/ContactInfo.jsx";

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
          <ContactInfo
            key={activeContact.name}
            heading={"Contact Info"}
            contact={activeContact}
          />
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
          <ContactInfo
            key={activeContact.name}
            heading={"Contact Info"}
            contact={displayedContact}
          />
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
