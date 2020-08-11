import React from "react";

const Footer = () => {
  const footerStyle = {
    color: "black",
  };
  return (
    <footer className="container">
      <nav
        className="navbar fixed-bottom stickyFooter navbar-expand-lg"
        style={footerStyle}
      >
        <div className="navbar-brand">© 2020 Brian Cook</div>
      </nav>
    </footer>
  );
};
export default Footer;