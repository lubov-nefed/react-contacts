import "./MyContacts.css";
import { useState } from "react";
import { ContactsList } from "../ContactsList/ContactsList.jsx";
import { ContactEditForm } from "../ContactEditForm/ContactEditForm.jsx";
import { initialContacts } from "./initialContacts.jsx";
import { ContactInfo } from "../ContactInfo/ContactInfo.jsx";
import { Heading } from "../Heading/Heading.jsx";
import { Button } from "../Button/Button.jsx";
import { ContactEdit } from "../ContactEdit/ContactEdit.jsx";
import { ContactForm } from "../ContactForm/ContactForm.jsx";

function MyContacts() {
  const [contacts, setContacts] = useState(initialContacts);
  const [activeContact, setActiveContact] = useState(contacts[0]);
  const [displayedContact, setDisplayedContact] = useState(contacts[0]);
  const [formText, setFormText] = useState(contacts[0]);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

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
          <ContactEdit
            className={"section contact-edit"}
            onClose={() => setIsEditing(false)}
          >
            <ContactInfo
              key={activeContact.name}
              contact={displayedContact}
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

            <ContactForm
              type={"edit"}
              activeContact={activeContact}
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
        {isAdding && (
          <ContactEdit onClose={() => setIsAdding(false)}>
            <ContactForm type={"add"} />
          </ContactEdit>
        )}
        <Button
          className={"primary-btn add-contact-btn"}
          isDisabled={isAdding}
          onClick={() => {
            if (isEditing) {
              setIsEditing(false);
            }
            if (!isAdding) {
              setIsAdding(true);
            }
          }}
        >
          Add New Contact
        </Button>
      </div>
    </>
  );
}

export { MyContacts };
