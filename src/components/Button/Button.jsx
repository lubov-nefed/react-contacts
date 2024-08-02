import "./Button.css";

function Button({
  isDisabled = false,
  children,
  className,
  onClick,
  type = "button",
  icon,
}) {
  return (
    <button
      className={className}
      disabled={isDisabled}
      onClick={onClick}
      type={type}
    >
      {children}
      {icon && <img className="btn-icon" src={icon} alt="" />}
    </button>
  );
}
export { Button };
