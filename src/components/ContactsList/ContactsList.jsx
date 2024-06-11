import "./ContactsList.css";
import { Avatar } from "../Avatar/Avatar.jsx";
import { Button } from "../Button/Button.jsx";

function ContactListItem({ contact, children, activeContact, onClick }) {
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

function ContactsList({
  contacts,
  activeContact,
  onPick,
  onEdit,
  onDelete,
  className,
}) {
  return (
    <section className={className}>
      <ul>
        {contacts.map((contact) => (
          <ContactListItem
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
          </ContactListItem>

          /*  <li
            className={
              contact.name === activeContact.name
                ? "contact-li--active"
                : "contact-li"
            }
            key={contact.id}
            onClick={() => onPick(contact)}
          >
            
          </li> */
        ))}
      </ul>
    </section>
  );
}

export { ContactsList };
