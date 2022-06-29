import { Card } from "react-bootstrap";

type Props = {
  children: JSX.Element | JSX.Element[];
  className?: string;
};

export const CustomCard = ({ children, className }: Props) => {
  return (
    <Card className={className}>
      <Card.Body>{children}</Card.Body>
    </Card>
  );
};
export default CustomCard;