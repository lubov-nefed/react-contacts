/* eslint-disable react/prop-types */
import "./Button.css";

function Button({
  isDisabled = false,
  children,
  className,
  onClick,
  type = "button",
}) {
  return (
    <button
      className={className}
      disabled={isDisabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
export { Button };
