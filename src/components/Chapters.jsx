import "../App.css";
import Navbar from "./Navbar";

const Chapters = () => {
  return (
    <>
      <Navbar />

      {/* <!-- ======= Hero Section ======= --> */}
      <section id="event-hero" className="d-flex align-items-center">
        <div className="hero">
          <div className="col-xl-12 top-nav">
            <div className="container-input text-center">
              <input
                type="text"
                placeholder="Search..."
                name="text"
                className="input"
                id="search-bar"
              />
            </div>
            <ul id="results"></ul>
          </div>
        </div>
      </section>
      <div></div>
      <div></div>
      {/* <!-- End Hero --> */}

      <main id="main">
        {/* <!-- ======= About Section ======= --> */}
        <section id="event-about" className="clients">
          <div className="container" data-aos="fade-up">
            <div className="row" data-aos="fade-up" data-aos-delay="100">
              <div className="col-lg-6" style={{ marginLeft: "60px" }}>
                <h1 className="us">College Chapters</h1>
                <hr className="line" />
              </div>
            </div>

            <section id="event-faq" className="faq">
              <div className="container" data-aos="fade-up">
                <ul className="faq-list accordion" data-aos="fade-up">
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <li>1. Bangalore Institute of Technology</li>
                  </a>
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <li>2. Dayananda Sagar University</li>
                  </a>
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <li>3. S J C institute of technology</li>
                  </a>
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <li>4. Sambhram Institute of Technology</li>
                  </a>
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <li>5. Sir M Vishwesariya Institute of Technology</li>
                  </a>
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <li>6. Sri Krishna Institute of Technology</li>
                  </a>
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <li>7. Vemana institute of technology</li>
                  </a>
                </ul>
              </div>
            </section>
            {/* <!-- End Frequently Asked Questions Section --> */}
          </div>
        </section>
        {/* <!-- End About Section --> */}
      </main>
      {/* <!-- End #main --> */}

      {/* <!-- ======= Footer ======= --> */}
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <h3>OS-Code</h3>
                <p>
                  OS-CODE headquarter, Shanbough
                  <br />
                  Krinshappa Ln Mavalli, <br />
                  Bengaluru, Karnataka 560004
                  <br />
                  <strong>Phone:</strong> +91-7667109405
                  <br />
                </p>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="/index.html">Home</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i> <a href="/">Services</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="/policy">Terms of service</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="/policy">Privacy policy</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="/">Web Design</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="/">Web Development</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="/">App Development</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Community</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="/about">About us</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="/">Benefits</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="/">Accomplishments</a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>
                    <a href="/">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-4">
          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>OS-Code</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="credits">
              Designed by <a href="https://www.oscode.co.in/">OS-Code</a>
            </div>
          </div>
          <div className="social-links text-center text-md-end pt-3 pt-md-0">
            <a href="https://twitter.com/oscodecommunity" className="twitter">
              <i className="bx bxl-twitter"></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100090940131222&mibextid=ZbWKwL"
              className="facebook"
            >
              <i className="bx bxl-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/os_code_community/"
              className="instagram"
            >
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="https://www.youtube.com/@oscodecommunity" className="youtube">
              <i className="bi bi-youtube"></i>
            </a>
            <a href="https://www.linkedin.com/company/oscode/" className="linkedin">
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>

      <a
        href="/"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
      {/* <Footer /> */}
    </>
  );
};

export default Chapters;
