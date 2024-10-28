import { Input, Textarea } from "./InputDefault.styled";

export default function InputDefault({
  className,
  type,
  name,
  placeholder,
  onFocus,
  onBlur,
  value,
  onChange,
}) {
  if (type === "textarea") {
    return (
      <Textarea
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className={className}
      />
    );
  }

  return (
    <>
      <Input
        className={className}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </>
  );
}
