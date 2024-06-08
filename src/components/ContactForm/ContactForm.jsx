import "./ContactForm.css";
import { Button } from "../Button/Button.jsx";
import { Input } from "../Input/Input.jsx";

function ContactForm({ onSubmit, onReset, type, activeContact, onChange }) {
  return (
    <form onSubmit={onSubmit} onReset={onReset}>
      {type === "edit" && (
        <>
          <Input
            htmlFor={"name"}
            labelText={"Name:"}
            value={activeContact.name}
            onChange={onChange}
          />
          <br />
          <Input
            htmlFor={"email"}
            labelText={"Email:"}
            value={activeContact.email}
            onChange={onChange}
          />
          <br />
          <Input
            htmlFor={"phone"}
            labelText={"Phone Number:"}
            value={activeContact.phone}
            onChange={onChange}
          />
        </>
      )}
      {type === "add" && (
        <>
          <Input
            htmlFor={"name"}
            labelText={"Name:"}
            onChange={onChange}
            value={activeContact.name}
          />
          <br />
          <Input
            htmlFor={"email"}
            labelText={"Email:"}
            onChange={onChange}
            value={activeContact.email}
          />
          <br />
          <Input
            htmlFor={"phone"}
            labelText={"Phone Number:"}
            onChange={onChange}
            value={activeContact.phone}
          />
        </>
      )}
      <br />
      <Button type={"submit"} className={"primary-btn"}>
        Save
      </Button>
      <Button type={"reset"} className={"secondary-btn"}>
        Reset
      </Button>
    </form>
  );
}

export { ContactForm };
