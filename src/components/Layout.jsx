import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header title="Fathom" />
      {children}
    </div>
  );
};

export default Layout;
