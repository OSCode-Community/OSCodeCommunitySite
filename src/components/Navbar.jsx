// import Logo from "assets/img/logo.jpeg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header
      id="header"
      className="glassmorphic fixed-top d-flex align-items-center"
    >
      <div className="container d-flex align-items-center">
        <img
          className="logo1"
          src="assets/img/logo.jpeg"
          width="60px"
          height="60px"
          alt="logo"
        />
        <h1 className="logo me-auto">
          <Link to="/">OS-CODE</Link>
        </h1>

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li>
              <Link
                className="nav-link scrollto active"
                style={{ textDecoration: "none" }}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="nav-link scrollto"
                style={{ textDecoration: "none" }}
                to="/about"
                href="/about"
                onClick={(e) => {
                  let hero = document.getElementById("about");
                  // e.preventDefault(); // Stop Page Reloading
                  hero &&
                    hero.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="nav-link scrollto"
                style={{ textDecoration: "none" }}
                to="/chapters"
              >
                Chapters
              </Link>
            </li>
            <li>
              <Link
                className="nav-link scrollto"
                style={{ textDecoration: "none" }}
                to="https://blog.oscode.co.in/"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/events" style={{ textDecoration: "none" }}>
                Events
              </Link>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

        <Link
          to="/contact"
          href="/contact"
          onClick={(e) => {
            let hero = document.getElementById("contact");
            // e.preventDefault(); // Stop Page Reloading
            hero && hero.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="get-started-btn scrollto"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
