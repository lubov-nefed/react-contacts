import "./ContactEdit.css";
import { Button } from "../Button/Button.jsx";
import closeIcon from "../../assets/images/icons/x.svg";

function ContactEdit({ children, className, onClose }) {
  return (
    <section className={className}>
      <Button className={"primary-btn"} onClick={onClose}>
        <img src={closeIcon} alt="Close" />
      </Button>
      {children}
    </section>
  );
}

export { ContactEdit };
