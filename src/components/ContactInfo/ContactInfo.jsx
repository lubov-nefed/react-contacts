import "./ContactInfo.css";
import { Avatar } from "../Avatar/Avatar.jsx";
import { Button } from "../Button/Button.jsx";

function ContactInfo({ type = "display", heading, contact, onClose }) {
  return (
    <section>
      {type === "edit" && (
        <Button className={"primary-btn"} onClick={onClose}>
          Close
        </Button>
      )}
      <h4>{heading}</h4>
      <Avatar img={contact.img} />
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
      <p>Phone Number: {contact.phone}</p>
    </section>
  );
}

export { ContactInfo };
