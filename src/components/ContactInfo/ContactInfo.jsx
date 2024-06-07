import "./ContactInfo.css";
import { Avatar } from "../Avatar/Avatar.jsx";
import { Button } from "../Button/Button.jsx";

function ContactInfo({
  type = "display",
  contact,
  onClose,
  className = "section",
}) {
  return (
    <section className={className}>
      {type === "edit" && (
        <Button className={"primary-btn"} onClick={onClose}>
          Close
        </Button>
      )}
      <Avatar img={contact.img} />
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
      <p>Phone Number: {contact.phone}</p>
    </section>
  );
}

export { ContactInfo };
