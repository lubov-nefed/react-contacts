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
          <Input htmlFor={"name"} labelText={"Name:"} onChange={onChange} />
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
