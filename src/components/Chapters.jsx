import { Link } from "react-router-dom";
import "../App.css";
import Navbar from "./Navbar";

const Chapters = () => {
  return (
    <>
      <Navbar />
      <section id="event-hero" class="d-flex align-items-center">
        <div class="hero">
          <div class="col-xl-12 top-nav">
            <div class="container-input">
              <input
                type="text"
                placeholder="Search..."
                name="text"
                class="input"
                id="search-bar"
              />
            </div>
            <ul id="results"></ul>
          </div>
        </div>
      </section>
      <main id="main">
        {/* <!-- ======= About Section ======= --> */}
        <section id="event-about" class="clients">
          <div class="container" data-aos="fade-up">
            <div class="row" data-aos="fade-up" data-aos-delay="100">
              <div class="col-lg-6" style={{ marginLeft: "60px" }}>
                <h1 class="us">College Chapters</h1>
                <hr class="line" id="event-line" />
              </div>
            </div>

            <section id="event-faq" class="faq">
              <div class="container" data-aos="fade-up">
                {/* <!-- <h1 class="text-center">Frequently Asked Questions</h1>
                        <hr class="line hr-center"> --> */}

                <ul class="faq-list accordion" data-aos="fade-up">
                  <Link to="/chapters">
                    <li>1. Bangalore Institute of Technology</li>
                  </Link>
                  <Link to="/chapters">
                    <li>2. Dayananda Sagar University</li>
                  </Link>
                  <Link to="/chapters">
                    <li>3. S J C institute of technology</li>
                  </Link>
                  <Link to="/chapters">
                    <li>4. Sambhram Institute of Technology</li>
                  </Link>
                  <Link to="/chapters">
                    <li>5. Sir M Vishwesariya Institute of Technology</li>
                  </Link>
                  <Link to="/chapters">
                    <li>6. Sri Krishna Institute of Technology</li>
                  </Link>
                  <Link to="/chapters">
                    <li>7. Vemana institute of technology</li>
                  </Link>
                </ul>
              </div>
            </section>
            {/* <!-- End Frequently Asked Questions Section --> */}
          </div>
        </section>
        {/* <!-- End About Section --> */}
      </main>
    </>
  );
};

export default Chapters;
