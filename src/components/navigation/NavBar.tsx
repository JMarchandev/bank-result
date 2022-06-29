import { Container, Navbar } from "react-bootstrap";

type Props = {
  className?: string;
};

export const CustomNavBar = ({ className }: Props) => {
  return (
    <Navbar className={className} bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Login</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default CustomNavBar;
