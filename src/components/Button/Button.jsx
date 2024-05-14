/* eslint-disable react/prop-types */
import "./Button.css";

function Button({ isDisabled = false, children, className }) {
  return (
    <button className={className} disabled={isDisabled}>
      {children}
    </button>
  );
}
export { Button };
