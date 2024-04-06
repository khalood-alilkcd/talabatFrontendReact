import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { ThemeContext } from "../GlobalComponent/ThemeProvider";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiMoon, BiSun } from "react-icons/bi";
import { useCart } from "react-use-cart";
import { BiCart } from "react-icons/bi";

function Header() {
  const { theme, setThemeMode } = useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState(theme);

  useEffect(() => {
    setThemeMode(darkMode);
    console.log(darkMode);
    
  }, [darkMode]);

  const { isEmpty, totalItems } = useCart();
  return (
    <Navbar
      expand="md"
      className={
        darkMode ? "bg-light-black border-bottom" : "bg-light border-bottom"
      }
      variant={darkMode ? "dark" : "light"}
      collapseOnSelect
      style={{ width: "100%", position: "fixed", zIndex: 100 }}
    >
      <Container>
        <Link to={"/"}>
          <Navbar.Brand
            className={darkMode ? "text-dark-primary" : "text-light-primary"}
          >
            <b>Talabat</b>
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex">
            <Nav.Link
              className={darkMode ? "text-dark-primary" : "text-light-primary"}
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <BiSun size="1.7rem" /> : <BiMoon size="1.7rem" />}
            </Nav.Link>
            <Link
              to="/carts"
              className={`${
                darkMode ? "text-dark-primary" : "text-light-primary"
              } d-flex align-items-center`}
            >
              <BiCart size="2rem" />
              {!isEmpty && (
                <span
                style={{ position: "relative", left: "-21px", top: "-18px" }}
                >
                  {totalItems}
                </span>
              )}
              <span style={{ marginLeft: !isEmpty ? "-13px" : 0 }}>
                &nbsp;Cart
              </span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
