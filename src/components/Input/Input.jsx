import "./Input.css";

function Input({
  htmlFor,
  type = "text",
  labelText,
  value = "",
  onChange,
  required = true,
}) {
  return (
    <label htmlFor={htmlFor}>
      {labelText}
      <input
        name={htmlFor}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
      />
    </label>
  );
}

export { Input };
