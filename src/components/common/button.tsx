import { Button } from "react-bootstrap";

type Props = {
  children: JSX.Element | JSX.Element[] | string;
  /**
   * here you can enum more variants
   * Bast practice is allow developers to use only useful variants
   * for example:
   * "primary", "secondary", "success", "danger", "warning", "info", "light", "dark"
   */
  variant?: "primary" | "link";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  size?: "sm" | "lg";
  fullWidth?: boolean;
};

export const CustomButton = ({
  children,
  variant = "primary",
  type = "submit",
  onClick,
  className,
  style,
  size,
  fullWidth = false,
}: Props) => {
  return (
    <Button
      size={size}
      style={style}
      className={`${className} ${fullWidth ? "w-100" : ""}`}
      type={type}
      onClick={onClick}
      variant={variant}
    >
      {children}
    </Button>
  );
};
export default CustomButton;
