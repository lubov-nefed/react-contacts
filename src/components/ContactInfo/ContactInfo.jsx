import "./ContactInfo.css";
import { Avatar } from "../Avatar/Avatar.jsx";

function ContactInfo({ type, heading, contact }) {
  return (
    <section>
      <h4>{heading}</h4>
      <Avatar img={contact.img} />
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
      <p>Phone Number: {contact.phone}</p>
    </section>
  );
}

export { ContactInfo };
