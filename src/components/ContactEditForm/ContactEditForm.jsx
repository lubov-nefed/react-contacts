import "./ContactEditForm.css";
import { Button } from "../Button/Button.jsx";
import { Heading } from "../Heading/Heading.jsx";

function ContactEditForm({ contact, onChange, onSubmit, onReset, className }) {
  return (
    <>
      <form onSubmit={onSubmit} onReset={onReset} className={className}>
        <label htmlFor="name">
          Name:
          <input
            name="name"
            type="text"
            value={contact.name}
            onChange={(e) => onChange(e, "name")}
            required
          />
        </label>
        <br />
        <label htmlFor="email">
          Email:
          <input
            name="email"
            type="text"
            value={contact.email}
            onChange={(e) => onChange(e, "email")}
            required
          />
        </label>
        <br />
        <Button type={"submit"} className={"primary-btn"}>
          Save
        </Button>
        <Button type={"reset"} className={"secondary-btn"}>
          Reset
        </Button>
      </form>
    </>
  );
}

export { ContactEditForm };
