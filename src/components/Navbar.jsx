// import Logo from "assets/img/logo.jpeg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header
        id="header"
        class="glassmorphic fixed-top d-flex align-items-center newFlex"
      >
        <div class="mainContainer container d-flex align-items-center">
          {/* <!-- logo and name together --> */}
          <div class="logoAndName">
            <img
              class="logo1"
              src="../assets/img/logo.jpeg"
              width="60px"
              height="60px"
              alt="logo"
            />
            <h1 class="logo me-auto">
              <Link to="/">OS-CODE</Link>
            </h1>
          </div>
          {/* <!-- removed image and replaced with a svg --> */}

          {/* <!-- navbar list excluding contact part --> */}
        </div>
        <div class="navListAndContact">
          <div id="navbar" class="navbar order-last order-lg-0">
            <ul>
              <li>
                <Link
                  className="nav-link scrollto active"
                  style={{ textDecoration: "none" }}
                  to="/"
                >
                  HOME
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
                      hero.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                  }}
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link scrollto"
                  style={{ textDecoration: "none" }}
                  to="/chapters"
                >
                  CHAPTERS
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link scrollto"
                  style={{ textDecoration: "none" }}
                  to="https://blog.oscode.co.in/"
                >
                  BLOGS
                </Link>
              </li>
              <li>
                <Link to="/events" style={{ textDecoration: "none" }}>
                  EVENTS
                </Link>
              </li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </div>

          {/* <!-- navbar list ends here --> */}

          <Link to="/contact" href="#contact" class="get-started-btn scrollto">
            CONTACT US
          </Link>
        </div>
      </header>
      {/* <!-- End Header --> */}
    </>
  );
};

export default Navbar;
