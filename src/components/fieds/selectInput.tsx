import { Form } from "react-bootstrap";

type Option = {
  value: string;
  displayName: string;
};

type Props = {
  label?: string;
  name: string;
  value: string;
  onChange?: React.ChangeEventHandler<any> | undefined;
  placeholder?: string;
  type?: "string" | "password" | "email";
  required?: boolean;
  disabled?: boolean;
  className?: string;
  error?: string;
  description?: string;
  defaultOption?: Option;
  options: Option[];
};
export const SelectField = ({
  label,
  name,
  value,
  onChange,
  required,
  disabled,
  className,
  error,
  defaultOption,
  options,
}: Props) => {
  return (
    <Form.Group className={className}>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Select
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
      >
        {defaultOption && (
          <option value={defaultOption.value}>
            {defaultOption.displayName}
          </option>
        )}
        {options.map((option) => (
          <option value={option.value}>{option.displayName}</option>
        ))}
      </Form.Select>
      {error && (
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      )}
    </Form.Group>
  );
};
export default SelectField;
