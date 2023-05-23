import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Data from "../event";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";

const Events = () => {
  Aos.init();
  useEffect(() => {
    try {
      let card = document.getElementById("card");
      Data.forEach((items) => {
        let cardsHtml = "";
        // console.log(Data);

        const reversedData = Data.slice().reverse();
        reversedData.forEach((item) => {
          // console.log(item.image);
          const cardHtml = `
            <div class="card" data-aos="zoom-in" data-aos-delay="100">
              <div class="for-image-div">
                <img src="${item.image}" alt="" id="image-for-card">
              </div>
              <div>
                <span><h2 id="event-h1" >${item.title}</h2></span>
              </div>
              <div id="event-p-div">
                <em><p id="event-p">${item.date}</p></em>
              </div>
              <div id="event-p-div">
                <p id="event-p">${item.description}</p>
              </div>
            </div>`;

          cardsHtml += cardHtml;
        });
        // console.log(cardsHtml);
        card.innerHTML = cardsHtml;
      });
    } catch (e) {
      console.log(e);
    }
  });

  return (
    <>
      <Navbar />
      <section id="home" className="d-flex align-items-center demo">
        <div
          className="container text-center p event-wrap"
          data-aos="zoom-out"
          data-aos-delay="100"
        >
          <div className="row">
            <div className="col-xl-12">
              <h1 className="home css-15 text-center event-h1">Our Events</h1>
              <h3 className="event-h2">
                We have spectacular events which benefit the students.
                <br />
                The Club aims to support individuals working together by
                conducting enthralling events as documented below-
              </h3>
            </div>
          </div>
        </div>
        <Link className="scroll" href="/events">
          <span></span>Scroll
        </Link>
      </section>
      {/* <!-- End Hero --> */}

      <section id="section07" className="for-bgg demo">
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
        <div>
          <span className="dot"></span>
        </div>
      </section>
      <section id="section07" className="for-bg demo">
        <div id="card"></div>
      </section>
      <main id="main"></main>

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
                    <i class="bx bx-chevron-right"></i>
                    <a href="oscode.co.in">Home</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i> <a href="/">Services</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <a href="../policy.html">Terms of service</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <a href="../policy.html">Privacy policy</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i class="bx bx-chevron-right"></i>{" "}
                    <a href="/">Web Design</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <a href="/">Web Development</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <a href="/">App Development</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Community</h4>
                <ul>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <a href="../index.html#about">About us</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <a href="../index.html#benefits">Benefits</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <a href="../index.html#achievement">Accomplishments</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <a href="../index.html#faq">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="container py-4">
          <div class="me-md-auto text-center text-md-start">
            <div class="copyright">
              &copy; Copyright{" "}
              <strong>
                <span>OS-Code</span>
              </strong>
              . All Rights Reserved
            </div>
            <div class="credits">
              Designed by <a href="#">OS-Code</a>
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
    </>
  );
};

export default Events;
