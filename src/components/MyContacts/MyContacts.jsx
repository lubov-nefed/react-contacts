import "./MyContacts.css";
import { useState } from "react";
import { ContactsList } from "../ContactsList/ContactsList.jsx";
import { initialContacts } from "./initialContacts.jsx";
import { ContactInfo } from "../ContactInfo/ContactInfo.jsx";
import { Heading } from "../Heading/Heading.jsx";
import { Button } from "../Button/Button.jsx";
import { ContactEdit } from "../ContactEdit/ContactEdit.jsx";
import { ContactForm } from "../ContactForm/ContactForm.jsx";
import brandColor400 from "../../assets/images/avatars/brand-400-color.svg";
import brandColor500 from "../../assets/images/avatars/brand-500-color.svg";
import brandColor600 from "../../assets/images/avatars/brand-600-color.svg";
import brandColor700 from "../../assets/images/avatars/brand-700-color.svg";

function MyContacts() {
  const emptyContact = {
    id: "",
    name: "",
    email: "",
    phone: "",
    img: "",
  };
  const [contacts, setContacts] = useState(initialContacts);
  const [activeContact, setActiveContact] = useState(contacts[0]);
  const [displayedContact, setDisplayedContact] = useState(contacts[0]);
  const [formText, setFormText] = useState(emptyContact);
  const [mode, setMode] = useState("watch"); //edit, add
  const [contactsAdded, setContactsAdded] = useState(0);

  const resetFormText = () => {
    setFormText(emptyContact);
  };

  const createContactImg = (contactsAdded) => {
    switch (contactsAdded % 4) {
      case 0:
        return brandColor400;
      case 1:
        return brandColor500;
      case 2:
        return brandColor600;
      case 3:
        return brandColor700;
      default:
        return brandColor700;
    }
  };

  return (
    <>
      <Heading level={2} className={"section-heading"}>
        My Contacts
      </Heading>
      <div className="my-contacts-wrapper">
        {contacts.length > 0 && (
          <>
            <ContactInfo
              key={activeContact.id}
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
              onEdit={() => {
                setMode("edit");
              }}
              onDelete={(e, contact) => {
                e.stopPropagation();
                if (mode === "edit") {
                  setMode("watch");
                }
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
              className={"primary-btn reset-list-btn"}
              onClick={() => {
                setContacts(initialContacts);
                setActiveContact(initialContacts[0]);
              }}
            >
              Reset List
            </button>
          </>
        )}

        {mode === "edit" && (
          <ContactEdit
            className={"section contact-edit"}
            onClose={() => setMode("watch")}
          >
            <ContactInfo
              key={activeContact.id}
              contact={displayedContact}
              className={"contact-edit-info"}
            />

            <ContactForm
              type={mode}
              formText={formText}
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
                    if (displayedContact.id === contact.id) {
                      return displayedContact;
                    } else return contact;
                  })
                );
                setActiveContact(displayedContact);
                setMode("watch");
              }}
              onReset={() => {
                setFormText({
                  ...formText,
                  name: "",
                  email: "",
                  phone: "",
                });
              }}
            />
          </ContactEdit>
        )}
        {mode === "add" && (
          <ContactEdit className={"section"} onClose={() => setMode("watch")}>
            <ContactForm
              type={mode}
              formText={formText}
              onChange={(e, prop) => {
                setFormText({ ...formText, [prop]: e.target.value });
              }}
              onSubmit={(e) => {
                e.preventDefault();
                let img = createContactImg(contactsAdded);
                setContactsAdded(contactsAdded + 1);
                const id = crypto.randomUUID();
                const newContact = { ...formText, id: id, img: img };
                contacts.length
                  ? setContacts([...contacts, newContact])
                  : setContacts([newContact]);
                setActiveContact(newContact);
                resetFormText();
                setMode("watch");
              }}
              onReset={resetFormText}
            />
          </ContactEdit>
        )}
        <Button
          className={"primary-btn add-contact-btn"}
          isDisabled={mode === "add"}
          onClick={() => {
            resetFormText();
            setMode("add");
          }}
        >
          Add New Contact
        </Button>
      </div>
    </>
  );
}

export { MyContacts };
