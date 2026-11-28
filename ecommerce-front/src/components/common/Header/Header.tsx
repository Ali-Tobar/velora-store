import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import HeaderLeftBar from "./HeaderLeftBar/HeaderLeftBar";
import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Navbar expand="lg" className={styles.navbar}>
        <Container className={styles.headerContainer}>
          {/* Brand Logo linking to '/' */}
          <Navbar.Brand as={NavLink} to="/" className={styles.brandLink}>
            <span className={styles.brandLogoBox}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.brandSvg}
              >
                <rect width="28" height="28" rx="8" fill="#111827" />
                <path
                  d="M7 8L14 20L21 8"
                  stroke="#FFFFFF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className={styles.brandName}>Velora</span>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className={styles.navToggle}
          />

          <Navbar.Collapse id="basic-navbar-nav" className={styles.navCollapse}>
            {/* Center Main Nav Links */}
            <Nav className={styles.mainNav}>
              <Nav.Link as={NavLink} to="/" end className={styles.navLink}>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="Categories" className={styles.navLink}>
                Categories
              </Nav.Link>
              <Nav.Link as={NavLink} to="AboutUs" className={styles.navLink}>
                About
              </Nav.Link>
            </Nav>

            {/* Right Side Actions */}
            <div className={styles.rightNavGroup}>
              <Nav className={styles.authNav}>
                <Nav.Link as={NavLink} to="Login" className={styles.authLink}>
                  Login
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="Register"
                  className={styles.registerLink}
                >
                  Register
                </Nav.Link>
              </Nav>

              <HeaderLeftBar />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
