import "./ContactEditForm.css";
import { Button } from "../Button/Button.jsx";

function ContactEditForm({ contact, onChange, onSubmit, onReset, className }) {
  return (
    <>
      <form onSubmit={onSubmit} onReset={onReset} className={className}>
        <label htmlFor="name">
          Name:
          <input
            name="name"
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
            value={contact.email}
            onChange={(e) => onChange(e, "email")}
            required
          />
        </label>
        <br />
        <label htmlFor="phone">
          Phone Number:
          <input
            name="phone"
            value={contact.phone}
            onChange={(e) => onChange(e, "phone")}
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
