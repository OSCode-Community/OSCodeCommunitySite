import React from "react";
import Navbar from "./Navbar";
import Data from "../event";
import { Link } from "react-router-dom";

const Events = () => {
  try {
    let card = document.getElementById("card");
    Data.forEach((items) => {
      let cardsHtml = "";
      console.log(Data);

      const reversedData = Data.slice().reverse();
      reversedData.forEach((item) => {
        console.log(item.image);
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
      console.log(cardsHtml);
      card.innerHTML = cardsHtml;
    });
  } catch (e) {
    console.log(e);
  }

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
    </>
  );
};

export default Events;
