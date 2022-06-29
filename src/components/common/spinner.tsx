import { Spinner } from "react-bootstrap";
import { Variant } from "react-bootstrap/esm/types";

type Props = {
  animation?: "border" | "grow";
  size?: "sm";
  variant?: Variant;
};

export const CustomSpinner = ({
  animation = "border",
  size = "sm",
  variant,
}: Props) => {
  return (
    <Spinner
      variant={variant}
      animation={animation}
      size={size}
      role="status"
    />
  );
};

export default CustomSpinner;
