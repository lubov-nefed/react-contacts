import "./ContactEditPreview.css";

function ContactEditPreview({ contact }) {
  return (
    <section>
      <h4>Contact Editing Preview</h4>
      <p>Name: {contact.name}</p>
      <p>Email: {contact.email}</p>
    </section>
  );
}

export { ContactEditPreview };
