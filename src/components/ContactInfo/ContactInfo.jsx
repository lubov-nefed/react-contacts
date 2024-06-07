import "./ContactInfo.css";
import { Avatar } from "../Avatar/Avatar.jsx";

function ContactInfo({ contact, className = "section" }) {
  return (
    <section className={className}>
      <br />
      <Avatar img={contact.img} />
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
      <p>Phone Number: {contact.phone}</p>
    </section>
  );
}

export { ContactInfo };
