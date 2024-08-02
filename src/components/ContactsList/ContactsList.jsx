import "./ContactsList.css";
import { Avatar } from "../Avatar/Avatar.jsx";
import { Button } from "../Button/Button.jsx";
import { useState } from "react";
import { alphabet } from "./alphabet.js";
import chevronDown from "../../assets/images/icons/chevron-down.svg";

function AlphabetBtns({ onClick }) {
  return (
    <ul className="alphabet-list">
      {alphabet.map((letter) => (
        <li key={letter}>
          <Button className={"secondary-btn letter-btn"} onClick={onClick}>
            {letter}
          </Button>
        </li>
      ))}
    </ul>
  );
}

function ContactsListItem({ contact, children, activeContact, onClick }) {
  return (
    <li
      className={
        contact.id === activeContact.id ? "contact-li--active" : "contact-li"
      }
      onClick={onClick}
    >
      {children}
    </li>
  );
}

function ContactsList({ contacts, activeContact, onPick, onEdit, onDelete }) {
  const [showAbc, setShowAbc] = useState(false);
  return (
    <section className={"section contacts-list"}>
      <Button
        className={"primary-btn abc-filter-btn"}
        onClick={() => setShowAbc(!showAbc)}
        icon={chevronDown}
      >
        A-Z
      </Button>
      {showAbc && <AlphabetBtns onClick={() => setShowAbc(false)} />}
      <ul>
        {contacts.map((contact) => (
          <ContactsListItem
            key={contact.id}
            contact={contact}
            activeContact={activeContact}
            onClick={() => onPick(contact)}
          >
            <Avatar img={contact.img} />
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
          </ContactsListItem>
        ))}
      </ul>
    </section>
  );
}

export { ContactsList };
