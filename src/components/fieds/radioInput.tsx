import { Form } from "react-bootstrap";

type Props = {
  label?: string | JSX.Element;
  name: string;
  value: boolean | string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: "checkbox" | "radio";
  required?: boolean;
  disabled?: boolean;
  className?: string;
  error?: string;
};

export const CheckRadioField = ({
  label,
  name,
  value,
  onChange,
  type,
  required,
  disabled,
  className,
  error,
}: Props) => {
  return (
    <Form.Group className={className}>
      <Form.Check
        disabled={disabled}
        checked={!!value}
        onChange={onChange}
        type={type}
        name={name}
        label={label}
        required={required}
        isInvalid={!!error}
      />
      {error && (
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
      )}
    </Form.Group>
  );
};
export default CheckRadioField;
