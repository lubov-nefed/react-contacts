import "./ContactForm.css";
import { Button } from "../Button/Button.jsx";
import { Input } from "../Input/Input.jsx";

function ContactForm({ onSubmit, onReset, type, formText, onChange }) {
  return (
    <form onSubmit={onSubmit} onReset={onReset}>
      {type === "edit" && (
        <>
          <Input
            htmlFor={"name"}
            labelText={"Name:"}
            value={formText.name}
            onChange={onChange}
          />
          <br />
          <Input
            htmlFor={"email"}
            labelText={"Email:"}
            value={formText.email}
            onChange={onChange}
          />
          <br />
          <Input
            htmlFor={"phone"}
            labelText={"Phone Number:"}
            value={formText.phone}
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
            value={formText.name}
          />
          <br />
          <Input
            htmlFor={"email"}
            labelText={"Email:"}
            onChange={onChange}
            value={formText.email}
          />
          <br />
          <Input
            htmlFor={"phone"}
            labelText={"Phone Number:"}
            onChange={onChange}
            value={formText.phone}
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
