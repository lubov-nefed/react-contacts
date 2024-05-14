import "./ContactInfo.css";
import { Avatar } from "../Avatar/Avatar.jsx";

function ContactInfo({ contact }) {
  return (
    <>
      <section>
        <h4>Contact Info</h4>
        <Avatar img={contact.img} />
        <p>Name: {contact.name}</p>
        <p>Email: {contact.email}</p>
        <p>Phone Number: {contact.phone}</p>
      </section>
    </>
  );
}

export { ContactInfo };
