import {CustomNavBar as Navbar} from "./components/navigation/NavBar";

type Props = {
  children: JSX.Element | JSX.Element[];
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar className="mb-5" />
      {children}
    </>
  );
};
export default Layout;
