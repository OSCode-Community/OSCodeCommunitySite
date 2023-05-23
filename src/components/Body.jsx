import React from "react";
import { useEffect } from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Body = () => {
  const el = React.useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Transforming Education with Technology"],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <section id="hero" className="d-flex align-items-center">
        <div
          className="container hero"
          data-aos="zoom-out"
          data-aos-delay="100"
        >
          <div className="row">
            <div className="col-xl-12">
              <h1 className="home css-15">
                A Community of Learners, Creators, and Contributors
              </h1>
              <h2>
                <span id="auto-type" className="roboto" ref={el}></span>
              </h2>
              <h2 className="home-para">
                Our mission is to provide college students with the resources
                and opportunities they need to learn, grow, and collaborate in
                the tech space.
              </h2>

              <Link to="/contact" className="btn-get-started scrollto left">
                Get Started<i className="bi bi-caret-right home-i"></i>
              </Link>
              <Link to="/services" className="btn-get-started scrollto left">
                Services<i className="bi bi-caret-right home-i"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <main id="main">
        {/* <!-- ======= About Section ======= --> */}
        <section id="about" className="clients">
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              {/* <!-- <h1>
            About Us
          </h1> --> */}
            </div>
            <div className="row" data-aos="fade-up" data-aos-delay="100">
              <div className="col-lg-6">
                <h1 className="us">Who we are ?</h1>
                <hr className="line" />
                <div className="abt-txt">
                  <p className="p-hover">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 1024 1024"
                      className="h2 text-primary"
                      height="0.8em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ flexShrink: "0" }}
                    >
                      <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                    </svg>
                    We are a <strong>Multi-College Tech Community</strong> that
                    helps college students to learn in public and engage with
                    similar-minded people.
                  </p>
                  <p className="p-hover">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 1024 1024"
                      className="h2 text-primary"
                      height="0.8em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ flexShrink: 0 }}
                    >
                      <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                    </svg>
                    We help local college communities to encourage this culture
                    on their campus and help them to build it.
                  </p>
                  <p className="p-hover">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 1024 1024"
                      className="h2 text-primary"
                      height="0.8em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ flexShrink: 0 }}
                    >
                      <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                    </svg>
                    We help upskill in the domain of your interests by
                    organizing workshops, technical seminars, hackathons,
                    project sessions, code-along, etc.
                  </p>
                  <p className="p-hover">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 1024 1024"
                      className="h2 text-primary"
                      height="0.8em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ flexShrink: 0 }}
                    >
                      <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
                    </svg>
                    The Community aims to help individuals to Collaborate and
                    Contribute to Open-Source Projects by mentoring them at each
                    stage of their Contribution.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                {/* <!-- <img className="abt-img" src="assets/img/abt1.jpg" alt="about-us"> --> */}
                <img
                  className="whoweare"
                  src="assets/img/abt.jpg"
                  alt="about-us"
                />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End About Section --> */}

        {/* <!-- ======= Counts Section ======= --> */}
        <section id="counts" className="counts">
          <div className="container" data-aos="fade-up">
            <h1 className="number">Numbers say it all!</h1>
            <hr className="line" />
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="count-box">
                  <i className="bi bi-people-fill"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="60"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <span>+</span>
                  <p>Members</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                <div className="count-box">
                  <i className="bi bi-stars"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="20"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <span>+</span>
                  <p>Reviews</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div className="count-box">
                  <i className="fa-solid fa-user-graduate"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="10"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <span>+</span>
                  <p>Institutes</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                <div className="count-box">
                  <i className="bi bi-journal-richtext"></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="100"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <span>+</span>
                  <p>Events</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Counts Section  --> */}

        {/* <!-- ======= Benefits Section ======= --> */}
        <section className="about section-bg" id="benefits">
          <div className="container" data-aos="fade-down">
            <h1 className="number text-center">Why choose us?</h1>
            <hr className="line hr-center" />

            <div className="row">
              <div className="col-lg-3 col-sm-6">
                {/* <!-- Tab navs --> */}
                <div
                  className="nav flex-column nav-pills text-center circle"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <Link
                    className="nav-link active edit1"
                    id="v-pills-link1-tab"
                    data-bs-toggle="pill"
                    href="#v-pills-link1"
                    role="tab"
                    aria-controls="v-pills-link1"
                    aria-selected="true"
                  >
                    Upskill Students
                  </Link>
                  <Link
                    className="nav-link edit1"
                    id="v-pills-link2-tab"
                    data-bs-toggle="pill"
                    href="#v-pills-link2"
                    role="tab"
                    aria-controls="v-pills-link2"
                    aria-selected="false"
                  >
                    Hire Talents
                  </Link>
                  <Link
                    className="nav-link edit1"
                    id="v-pills-link3-tab"
                    data-bs-toggle="pill"
                    href="#v-pills-link3"
                    role="tab"
                    aria-controls="v-pills-link3"
                    aria-selected="false"
                  >
                    Hackathons & Seminars
                  </Link>
                  <Link
                    className="nav-link edit1"
                    id="v-pills-link4-tab"
                    data-bs-toggle="pill"
                    href="#v-pills-link4"
                    role="tab"
                    aria-controls="v-pills-link4"
                    aria-selected="false"
                  >
                    Ideation Seeding
                  </Link>
                </div>
                {/* <!-- Tab navs --> */}
              </div>

              <div className="col-lg-9 col-sm-6">
                {/* <!-- Tab content --> */}
                <div className="tab-content" id="v-pills-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="v-pills-link1"
                    role="tabpanel"
                    aria-labelledby="v-pills-link1-tab"
                  >
                    <div className="flex-container">
                      <div className="flex-child gallery left-tab">
                        <img
                          src="assets/img/benefit/upskill.png"
                          alt="upskill students"
                        />
                      </div>
                      <div className="flex-child gallery right-tab">
                        <h4 className="benefits">Upskill Students</h4>
                        <p>
                          We help students to get start with their lifelong
                          journey of coding. Students will explore and learn
                          what real-world Software development looks like.
                        </p>
                        <p>
                          Problem-solving skills and interpersonal skills will
                          be refined. Overall students will enjoy with this
                          collaborative journey of learning, practising and
                          sharing technical skills with our enthusiastic
                          community!!
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="v-pills-link2"
                    role="tabpanel"
                    aria-labelledby="v-pills-link2-tab"
                  >
                    <div className="flex-container">
                      <div className="flex-child gallery left-tab">
                        <img
                          src="assets/img/benefit/hire.jpg"
                          alt="hire Talents"
                        />
                      </div>
                      <div className="flex-child gallery right-tab">
                        <h4 className="benefits">Hire Talents</h4>
                        <p>
                          At OSCode, we are dedicated to help students jumpstart
                          their technical journey and pave the way towards their
                          first job or internship.
                        </p>
                        <p>
                          By joining us, you benefit with future internship
                          opportunities, connect with industry experts,
                          certifications, career guidance mentorship, practical
                          learning, connect with similar-minded people, and so
                          much more.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="v-pills-link3"
                    role="tabpanel"
                    aria-labelledby="v-pills-link3-tab"
                  >
                    <div className="flex-container">
                      <div className="flex-child gallery left-tab">
                        <img
                          src="assets/img/benefit/seminars.png"
                          alt="hackathons & seminars"
                        />
                      </div>
                      <div className="flex-child gallery right-tab">
                        <h4 className="benefits">Hackathons & Seminars</h4>

                        <p>
                          Through our workshops, technical seminars, hackathons,
                          project sessions, code-along, and more, we strive to
                          provide a comprehensive learning experience that
                          prepares students for the challenges of the real
                          world.
                        </p>
                        <p>
                          Join us today and embark on an exciting journey of
                          personal and professional growth!
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="v-pills-link4"
                    role="tabpanel"
                    aria-labelledby="v-pills-link4-tab"
                  >
                    <div className="flex-container">
                      <div className="flex-child gallery left-tab">
                        <img
                          src="assets/img/benefit/ideation.jpg"
                          alt="ideation seeding"
                        />
                      </div>
                      <div className="flex-child gallery right-tab">
                        <h4 className="benefits">Ideation Seeding</h4>
                        <p>
                          With our rapidly growing presence in Bangalore, we aim
                          to expand our initiative globally and continue to
                          inspire and upskill students in the domains of their
                          interests.
                        </p>
                        <p>
                          Our community is specifically designed for students
                          who aspire to build a career in the tech industry, and
                          provides a supportive environment for peer-to-peer
                          learning.{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Tab content --> */}
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Benefits Section --> */}

        {/* <!-- ======= Clients Section ======= --> */}
        <section id="clients" className="clients">
          <div className="container" data-aos="zoom-in">
            <h1 className="text-center">Our Sponsors and Partners</h1>
            <hr className="line hr-center" />
            <div className="clients-slider swiper">
              <div className="swiper-wrapper align-items-center">
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/unacademy.png"
                    className="img-fluid enlarge"
                    alt="unacademy"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/codechef.png"
                    className="img-fluid enlarge"
                    alt="codechef"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/worldcoin.jpg"
                    className="img-fluid enlarge"
                    alt="worldcoin"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/mlsa.png"
                    className="img-fluid"
                    alt="mlsa"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/polygon.png"
                    className="img-fluid enlarge"
                    alt="polygon"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/hackerrank.jpg"
                    className="img-fluid"
                    alt="hackerrank"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/techno.png"
                    className="img-fluid enlarge"
                    alt="techno"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/gsoc.png"
                    className="img-fluid enlarge"
                    alt="gsoc"
                  />
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>
        {/* <!-- End Clients Section --> */}

        {/* <!-- ======= Acheivement Section ======= --> */}
        <section id="achievement" className="testimonials">
          <div className="container" data-aos="fade-up">
            <h1 className="text-center">Our Accomplishments</h1>
            <hr className="line hr-center" />

            <div
              className="testimonials-slider swiper"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/achievement/devx.jfif"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Partnership with DevX</h3>
                      <h4>Annual Springfest of Techno India University</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        OSCode has officially joined as a community partner for
                        DevX, the annual Springfest of Techno India University.
                        We look forward to contributing our knowledge,
                        resources, and expertise to help make DevX successful.
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                      <Link
                        href="https://www.linkedin.com/posts/oscode_oscode-community-devx-activity-7050410583078182912-z5k_?utm_source=share&utm_medium=member_desktop"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Know more..
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}

                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="https://drive.google.com/uc?export=download&id=1Jvw70OAJzX9iWz7Iurv3t35cSD2Teiz5"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Partnership with Codechef</h3>
                      <h4>To conduct contests</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        OS CODE was proud to present the 7th edition of HUSTLE
                        with Platform Partner CODECHEF! We thank and appreciate
                        all the participants who helped in making this event a
                        success. We'll be back with many more events and
                        contests! Stay tuned 💫
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                      <Link
                        href="https://www.linkedin.com/posts/oscode_oscode-hustle-hustle7-activity-7042872281932476416-8vfU?utm_source=share&utm_medium=member_desktop"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Know more..
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}

                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/achievement/1st_offline.jfif"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Open Source: The Foundation Stone</h3>
                      <h4>1st offline event</h4>
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        *Open Source: The Foundation Stone* turned out to be a
                        great success with peak participation of more than
                        2️⃣0️⃣0️⃣ people. 💫 It remained extremely informative and
                        ever inspiring without compromising on the fun and
                        humour component 🤩.
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                      <Link
                        href="https://www.linkedin.com/posts/oscode_achievements-have-no-value-if-you-leave-activity-6968906596198346753-L8hY?utm_source=share&utm_medium=member_desktop"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Know more..
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}

                <div className="swiper-slide">
                  <div className="testimonial-wrap">
                    <div className="testimonial-item">
                      <img
                        src="assets/img/achievement/team.jpg"
                        className="testimonial-img"
                        alt=""
                      />
                      <h3>Amazing community</h3>
                      {/* <!-- <h4>Learing & building together</h4> --> */}
                      <p>
                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                        Achievements have no value, if you leave behind the
                        people to celebrate with.We believe that our club is
                        making a positive impact on our college community and
                        beyond, and we're grateful for the opportunity to share
                        our journey with you.
                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                      </p>
                      <Link
                        href="https://www.linkedin.com/posts/oscode_oscode-community-bit-activity-7046111645508481024-fzUe?utm_source=share&utm_medium=member_desktop"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Know more..
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <!-- End testimonial item --> */}
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>
        {/* <!-- End Achievement Section --> */}

        {/* <!-- ======= Join US Section ======= --> */}
        <section id="join-us" className="join section-bg1">
          <div className="container" data-aos="fade-up">
            <h1 className="number text-center">Join Us</h1>
            <hr className="line hr-center" />

            <div
              className="row"
              data-aos="fade-up"
              data-aos-delay="100"
              style={{ marginTop: "10px" }}
            >
              <div className="abt-txt">
                <h2 className="us">
                  <i
                    className="fa-sharp fa-regular fa-handshake"
                    style={{ color: "#3713b9", marginRight: "10px" }}
                  ></i>
                  How to Join us??
                </h2>
                <p>
                  Start your collaborative journey of learning, practising and
                  sharing technical skills with our enthusiastic community!! by
                  filling out this Google form 👇
                </p>
              </div>
              <Link
                href="https://forms.gle/w3SgHzXz4m9bynXL9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="benefits link">OSCode Community Student Form</p>
              </Link>
            </div>

            <div
              className="row"
              data-aos="fade-up"
              data-aos-delay="100"
              style={{ marginTop: "10px" }}
            >
              <div className="abt-txt">
                <h2 className="us" style={{ marginBottom: "0px" }}>
                  <i className="bi bi-chat-heart"></i> Reach us out through...
                </h2>
              </div>
              <div className="row join">
                <Link
                  href="https://github.com/OSCode-Community"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="col-lg-3 col-md-6 shrink">
                    <div className="count-box">
                      <i className="bi bi-github"></i>
                      <p>Github</p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-lg-3 col-md-6 mt-5 mt-md-0 shrink">
                <Link
                  href="https://discordapp.com/channels/945676223101698060/945680318248128543/946084270693318686"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="count-box">
                    <i className="bi bi-discord"></i>
                    <p>Discord</p>
                  </div>
                </Link>
              </div>

              <div className="col-lg-3 col-md-6 mt-5 mt-lg-0 shrink">
                <Link
                  href="https://www.linkedin.com/company/oscode/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="count-box">
                    <i className="bi bi-linkedin"></i>
                    <p>LinkedIn</p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="row join shrink">
              <Link
                href="https://instagram.com/os_code_community?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="col-lg-3 col-md-6">
                  <div className="count-box">
                    <i className="bi bi-instagram"></i>
                    <p>Instagram</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-md-0 shrink">
              <Link
                href="https://twitter.com/OSCodeCommunity"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="count-box">
                  <i className="bi bi-twitter"></i>
                  <p>Twitter</p>
                </div>
              </Link>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0 shrink">
              <Link
                href="https://t.me/+yNBAO5cbFLk3NTA1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="count-box">
                  <i className="bi bi-telegram"></i>
                  <p>Telegram</p>
                </div>
              </Link>
            </div>
          </div>
          {/* </div> */}
          {/* </div> */}

          {/* <!-- <div className="row" data-aos="fade-up" data-aos-delay="100" style="margin-top: 10px;">
          <div className="abt-txt">
            <h2 className="us"><i className="fa-regular fa-comment-arrow-up-right" style="color: #2a13a0;"></i>Reach Us on</h2>
          </div>
          <div className="container team" data-aos="fade-up">

            <div className="row">

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay="100">
                  <div className="member-img">
                    <Link href="https://twitter.com/oscodecommunity" className="social-links twitter"><i
                        className="bx bxl-twitter"></i></Link>
                  </div>
                  <div className="member-info">
                    <h4>Walter White</h4>
                    <span>Chief Executive Officer</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay="200">
                  <div className="member-img">
                    <img src="assets/img/team/team-2.jpg" className="img-fluid" alt="">
                  </div>
                  <div className="member-info">
                    <h4>Sarah Jhonson</h4>
                    <span>Product Manager</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay="300">
                  <div className="member-img">
                    <img src="assets/img/team/team-3.jpg" className="img-fluid" alt="">
                  </div>
                  <div className="member-info">
                    <h4>William Anderson</h4>
                    <span>CTO</span>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                <div className="member" data-aos="fade-up" data-aos-delay="400">
                  <div className="member-img">
                    <img src="assets/img/team/team-4.jpg" className="img-fluid" alt="">
                  </div>
                  <div className="member-info">
                    <h4>Amanda Jepson</h4>
                    <span>Accountant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> --> */}
          {/* </div> */}
        </section>
        {/* <!-- End join-us Section --> */}

        {/* <!-- ======= Testimonials Section ======= --> */}
        <section id="testimonials" className="testimonials">
          <div className="container" data-aos="fade-up">
            <h1 className="text-center">Testimonials</h1>
            <hr className="line hr-center" />
            <div
              id="myCarousel"
              className="carousel slide"
              data-ride="carousel"
            >
              {/* <!-- Carousel indicators --> */}
              <ol className="carousel-indicators">
                <li
                  data-target="#myCarousel"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>
              {/* <!-- Wrapper for carousel items --> */}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="img-box">
                    <img
                      src="assets/img/testimonials/testimonials-1.jpg"
                      alt=""
                    />
                  </div>
                  <p className="testimonial">
                    It's been a great feeling to collaborate with OS-Code
                    community, and they have made the entire process a pleasure.
                    What's more matters, they made great contributions to
                    letting more people know the benefits of our services and
                    increase our user base.
                  </p>
                  <p className="overview">
                    <b>Michael Holz</b>Seo Analyst at OsCorp Tech.
                  </p>
                  <div className="star-rating">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <i className="fa fa-star"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-star"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-star"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-star"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-star-o"></i>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="img-box">
                    <img
                      src="assets/img/testimonials/testimonials-2.jpg"
                      alt=""
                    />
                  </div>
                  <p className="testimonial">
                    We've worked on various collaborations with OS-Code
                    community, all of which have been an extraordinary and
                    profitable experience. Their interest to detail, clear
                    expectations, and innovative work paired with his reach is a
                    fantastic equation.
                  </p>
                  <p className="overview">
                    <b>Paula Wilson</b>Media Analyst at SkyNet Inc.
                  </p>
                  <div className="star-rating">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <i className="fa fa-star"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-star"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-star"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-star"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-star-o"></i>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="img-box">
                    <img
                      src="assets/img/testimonials/testimonials-3.jpg"
                      alt=""
                    />
                  </div>
                  <p className="testimonial">
                    The collab with OS-Code's community was fantastic! After
                    every activity with OS-Code my community grows by 100s and
                    the same goes for GH stars!. We plan and look forward to
                    continued partnership with OS-Code.
                  </p>
                  <p className="overview">
                    <b>Antonio Moreno</b>Web Developer at Circle Ltd.
                  </p>
                  <div className="star-rating">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <i className="fa fa-star"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-star"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-star"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-star"></i>
                      </li>
                      <li className="list-inline-item">
                        <i className="fa fa-star-half-o"></i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- Carousel controls --> */}
              <Link
                className="carousel-control-prev"
                href="#myCarousel"
                data-slide="prev"
              >
                <i className="fa fa-angle-left"></i>
              </Link>
              <Link
                className="carousel-control-next"
                href="#myCarousel"
                data-slide="next"
              >
                <i className="fa fa-angle-right"></i>
              </Link>
            </div>
          </div>
        </section>
        {/* <!-- End Testimonial Section --> */}

        {/* <!-- ======= Frequently Asked Questions Section ======= --> */}
        <section id="faq" className="faq">
          <div className="container" data-aos="fade-up">
            <h1 className="text-center">Frequently Asked Questions</h1>
            <hr className="line hr-center" />

            <ul className="faq-list accordion" data-aos="fade-up">
              <li>
                <Link
                  data-bs-toggle="collapse"
                  classNameName="collapsed"
                  data-bs-target="#faq1"
                  href="/"
                >
                  Do I need to pay anything before joining the community?
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-x icon-close"></i>
                </Link>
                <div id="faq1" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    🆓 Not at all! Everything is completely FREE OF COST and we
                    will bear its cost for you. We also provide 50% off on our
                    OPTIONAL certifications which students can take if they are
                    interested otherwise can skip.
                  </p>
                </div>
              </li>

              <li>
                <Link
                  data-bs-toggle="collapse"
                  data-bs-target="#faq2"
                  className="collapsed"
                  href="/"
                >
                  How do I join OS-Code Community?{" "}
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-x icon-close"></i>
                </Link>
                <div id="faq2" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Start your collaborative journey of learning, practising and
                    sharing technical skills with our enthusiastic community!!
                    by filling out this Google form 👇
                    <br />
                    <Link
                      href="https://docs.google.com/forms/d/e/1FAIpQLSf-bIAC1VdPJxODwdcPnvH-SWhbu0SVl47SgyLdagNAciYYUA/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Community Student form
                    </Link>
                  </p>
                </div>
              </li>

              <li>
                <Link
                  data-bs-toggle="collapse"
                  data-bs-target="#faq3"
                  className="collapsed"
                  href="/"
                >
                  How do you stay up to date on the latest updates?{" "}
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-x icon-close"></i>
                </Link>
                <div id="faq3" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Please join us on our social media channels to know about
                    our upcoming events. We have so much in store for you and
                    can't wait to have you onboard 💪
                  </p>
                </div>
              </li>

              <li>
                <Link
                  data-bs-toggle="collapse"
                  data-bs-target="#faq4"
                  className="collapsed"
                  href="/"
                >
                  Is your community beginner friendly?
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-x icon-close"></i>
                </Link>
                <div id="faq4" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Yes! Even non-coders are welcome. Our courses are designed
                    in such a way that anyone can get started with it. Even
                    people who have never programmed before!
                  </p>
                </div>
              </li>

              <li>
                <Link
                  data-bs-toggle="collapse"
                  data-bs-target="#faq5"
                  className="collapsed"
                  href="/"
                >
                  Do you provide mentorship and guidance?{" "}
                  <i className="bx bx-chevron-down icon-show"></i>
                  <i className="bx bx-x icon-close"></i>
                </Link>
                <div id="faq5" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Yes. That is the highlight of our community. By joining us,
                    you benefit with future internship opportunities, connect
                    with industry experts, certifications, career guidance
                    mentorship, practical learning, connect with similar-minded
                    people, and so much more.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        {/* <!-- End Frequently Asked Questions Section --> */}

        {/* <!-- ======= Contact Section ======= --> */}
        <section id="contact" className="contact">
          <div className="container" data-aos="fade-right">
            <h1 className="text-center">Contact Us</h1>
            <hr className="line hr-center" />

            <div className="row" data-aos="flip-left" data-aos-delay="100">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-md-12">
                    <div className="info-box">
                      {/* <!-- <i className="bx bx-map"></i> --> */}
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3295777128365!2d77.57881345058549!3d12.950750090824721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae156bf4c356ed%3A0x3466b397b31dae21!2sOS-CODE%20headquarter!5e0!3m2!1sen!2sin!4v1679811939861!5m2!1sen!2sin"
                        title="iframe"
                        width="510"
                        height="180"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                      ></iframe>
                      <h3>Address</h3>
                      <p>
                        OS-CODE headquarter, Shanbough Krinshappa Ln,
                        Upparahalli, <br />
                        Mavalli, Bengaluru, Karnataka 560004
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-box mt-4">
                      <Link href="mailto:oscode.community@gmail.com?subject=Enquiry">
                        <i className="bx bx-envelope"></i>
                      </Link>
                      <h3>Email Us</h3>
                      {/* <p>oscode.community@gmail.com<br><br></p> */}
                      <p>oscode.community@gmail.com</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-box mt-4">
                      <Link href="tel:+91-7667109405">
                        <i className="bx bx-phone-call"></i>
                      </Link>
                      <h3>Call Us</h3>
                      <p>
                        +91-7667109405
                        <br />
                        +91-7014122349
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- <div className="col-lg-6 contact-img">
            <img src="assets/img/contact.png" alt="contact us" style="margin-left: 100px;
            margin-top: 75px; height: 400px;">
          </div> --> */}

              <div
                className="col-lg-6"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <form
                  action="mailto:oscode.community@gmail.com"
                  method="post"
                  enctype="text/plain"
                  autocomplete="on"
                >
                  <div className="row">
                    <div className="col form-group">
                      <input
                        type="email"
                        autocomplete="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div className="col form-group">
                      <input
                        type="text"
                        autocomplete="name"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      autocomplete="subject"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                    {/* <!-- <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required /> --> */}
                  </div>
                  {/* <!-- <div className="form-group">
                <input type="password" className="form-control" name="password" id="password" placeholder="Enter password"
                  required />
              </div> --> */}
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      autocomplete="message"
                      name="message"
                      rows="5"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  {/* <!-- <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  You don't have an account yet, please register!!
                </div>
              </div> --> */}
                  <div className="text-center white">
                    <button
                      type="submit"
                      className="btn get-started-btn msg-us"
                    >
                      Message us
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Contact Section --> */}
      </main>
    </>
  );
};

export default Body;
