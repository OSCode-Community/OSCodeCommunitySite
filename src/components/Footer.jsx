import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6 footer-contact">
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

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i class="bx bx-chevron-right"></i> <Link to="/">Home</Link>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <Link to="/services">Services</Link>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <Link to="/policy">Terms of service</Link>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <a href="/policy">Privacy policy</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <Link href="/webdesign">Web Design</Link>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <Link href="/webdevelopment">Web Development</Link>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <Link href="/appdevelopment">App Development</Link>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Community</h4>
                {/* <!-- <form action="mailto:oscode.community@gmail.com" method="post" enctype="text/plain">
              <input type="email" name="email" /><input type="submit" value="Subscribe" />
            </form> --> */}
                <ul>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <Link href="/about" to="/about">
                      About us
                    </Link>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <Link to="/benefits">Benefits</Link>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <Link href="/achievement">Accomplishments</Link>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <Link href="/faq">FAQ</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="container d-md-flex py-4">
          <div class="me-md-auto text-center text-md-start">
            <div class="copyright">
              &copy; Copyright
              <strong>
                <span>OS-Code</span>
              </strong>
              . All Rights Reserved
            </div>
            <div class="credits">
              Designed by <a href="/">OS-Code</a>
            </div>
          </div>
          <div class="social-links text-center text-md-end pt-3 pt-md-0">
            <a href="https://twitter.com/oscodecommunity" class="twitter">
              <i class="bx bxl-twitter"></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100090940131222&mibextid=ZbWKwL"
              class="facebook"
            >
              <i class="bx bxl-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/os_code_community/"
              class="instagram"
            >
              <i class="bx bxl-instagram"></i>
            </a>
            <a href="https://www.youtube.com/@oscodecommunity" class="youtube">
              <i class="bi bi-youtube"></i>
            </a>
            <a href="https://www.linkedin.com/company/oscode/" class="linkedin">
              <i class="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
      <a
        href="/"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i class="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
};

export default Footer;
