import "./MyContacts.css";
import { useState } from "react";
/* import { Button } from "../Button/Button.jsx";
import { Avatar } from "../Avatar/Avatar.jsx";*/
import { ContactsList } from "../ContactsList/ContactsList.jsx";
import { ContactEditForm } from "../ContactEditForm/ContactEditForm.jsx";
import { initialContacts } from "./initialContacts.jsx";
import { ContactInfo } from "../ContactInfo/ContactInfo.jsx";
import { Heading } from "../Heading/Heading.jsx";
import { ContactEdit } from "../Button/ContactEdit/ContactEdit.jsx";

function MyContacts() {
  const [contacts, setContacts] = useState(initialContacts);
  const [activeContact, setActiveContact] = useState(contacts[0]); //{ id: 0, name: "Taylor", email: "taylor@mail.com" }
  const [displayedContact, setDisplayedContact] = useState(contacts[0]); //{ id: 0, name: "Taylor", email: "taylor@mail.com" }
  const [formText, setFormText] = useState(contacts[0]);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <Heading level={2} className={"section-heading"}>
        My Contacts
      </Heading>
      <div className="my-contacts-wrapper">
        {contacts.length !== 0 && (
          <>
            <ContactInfo
              key={activeContact.name}
              heading={"Contact Info"}
              contact={activeContact}
              className={"section contact-info"}
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
              className={"section contacts-list"}
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
          <ContactEdit className={"section"}>
            <ContactInfo
              key={activeContact.name}
              heading={"Edit Contact"}
              contact={displayedContact}
              type={"edit"}
              onClose={() => setIsEditing(false)}
              className={"contact-edit-info"}
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
          </ContactEdit>
        )}
      </div>
    </>
  );
}

export { MyContacts };
