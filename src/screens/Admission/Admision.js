import React, { useEffect } from "react";
import "./Admission.css";
// import "./Responsive FAQ Accordion/style.css";
// import "https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css";
const Admission = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".accordion button");

    function toggleAccordion() {
      const itemToggle = this.getAttribute("aria-expanded");

      for (let i = 0; i < items.length; i++) {
        items[i].setAttribute("aria-expanded", "false");
      }

      if (itemToggle === "false") {
        this.setAttribute("aria-expanded", "true");
      }
    }

    items.forEach((item) => item.addEventListener("click", toggleAccordion));

    // Cleanup event listeners when the component unmounts
    return () => {
      items.forEach((item) =>
        item.removeEventListener("click", toggleAccordion)
      );
    };
  }, []); // Empty dependency array ensures the effect runs once on mount

  return (
    <div>
      <div className="page">
        <div className="main">
          <h1>
            <b>Admissions</b>
          </h1>
        </div>
        <div className="school">
          <h2
            className="sch-name"
            style={{ color: "#f26522", display: "inline-block" }}
          >
            Viveka Educational Society
          </h2>
          <h4
            className="sch-sub"
            style={{ color: "#970202", display: "inline-block" }}
          >
            - A place where learning is fun and meaningful
          </h4>
        </div>

        <div className="application">
          <div className="left">
            <h2 className="white-color">NURSERY TO X</h2>
            <h4 className="white-color">Admissions Open 2023-24</h4>
          </div>
          <div className="right">
            <a href="./reg.html" className="white-color btn">
              Enroll Now
            </a>
            <a href="./table.html" className="white-color btn">
              Fee Structure
            </a>
          </div>
        </div>
        <div className="thirdrow">
          <div className="image">
            <img
              className="clg-img"
              src="https://i0.wp.com/avenuemail.in/wp-content/uploads/2022/03/j-1.jpg?fit=1600%2C1067&ssl=1"
              alt=""
            />
          </div>
          <div className="infrastructure">
            <div className="infra">
              <h2 className="headd">
                Admission Procedure for the Academic Session 2023 - 2024
              </h2>
              <div className="matter">
                <ul>
                  <li>
                    Online Registration Form need to be filled up as an initial
                    step.
                  </li>
                  <li>For availing school transport :</li>
                  <ul>
                    <li>
                      Prior to filling-up Online Registration Form, kindly click
                      on the below links for the bus stops.
                    </li>
                    <li>
                      Transport facility is provided from the listed stops only
                    </li>
                  </ul>
                </ul>

                <ul>
                  <li>
                    Documents required to upload at the time of Registration
                    (Size Upto 100 kb for Photos(jpg) and upto 2MB for
                    documents(JPEG/PDF).
                  </li>
                  <ul>
                    <li>Birth Certificate.</li>
                    <li>Candidate's Aadhar Card.</li>
                    <li>Certificate of category (if applicable)</li>
                    <li>
                      Report card
                      <ul>
                        <li>
                          i) Classes II to IV admission - Term I report card
                          copy of the current year and the previous year.
                        </li>
                        <li>
                          ii) Classes V to XI admission - Term I report card
                          copy of the current year along with the previous two
                          years report card.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Latest Passport size photo of Mother, Father, and Child.
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="fourthrow">
          <div className="staff">
            <h2 className="headd" style={{ color: "#f26522" }}>
              Additional Info
            </h2>
            <div className="matter">
              <ul>
                <li>
                  Registration fee of Rs. 600/- once paid is not refundable.
                </li>
                <li>Registration does not guarantee admission.</li>
                <li>
                  Admission to Nursery (LKG/ PP1) and Preparatory (UKG/ PP2) is
                  through Random Selection Method (Lottery).
                </li>
                <li>
                  Admission to Class 1 onwards is done based on the preparedness
                  of the child.
                </li>
                <li>
                  Schedule of further process will be informed upon submission
                  of Registration.
                </li>
                <li>Selected students will be informed through Email / SMS.</li>
                <li>
                  TC to be submitted to the school office after getting
                  admission.
                </li>
                <li>
                  For Classes II to IX admission process would commence in March
                  2023 as admissions are subject to vacancy.
                </li>
              </ul>
            </div>
          </div>
          <div className="documents"></div>
        </div>
        <div className="accordion">
          <div className="image-box">
            <img src="Responsive FAQ Accordion/images/mainImg.png" alt="" />
          </div>
          <div className="container">
            <h2>
              <span>Frequently Asked Questions</span>
            </h2>
            <div className="accordion">
              <div className="accordion-item">
                <button id="accordion-button-1" aria-expanded="false">
                  <span className="accordion-title">
                    Why is the moon sometimes out during the day?
                  </span>
                  <span className="icon" aria-hidden="true"></span>
                </button>
                <div className="accordion-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor
                    pretium viverra suspendisse potenti.
                  </p>
                </div>
              </div>

              <div className="accordion-item">
                <button id="accordion-button-2" aria-expanded="false">
                  <span className="accordion-title">Why is the sky blue?</span>
                  <span className="icon" aria-hidden="true"></span>
                </button>
                <div className="accordion-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor
                    pretium viverra suspendisse potenti.
                  </p>
                </div>
              </div>

              <div className="accordion-item">
                <button id="accordion-button-3" aria-expanded="false">
                  <span className="accordion-title">
                    Will we ever discover aliens?
                  </span>
                  <span className="icon" aria-hidden="true"></span>
                </button>
                <div className="accordion-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor
                    pretium viverra suspendisse potenti.
                  </p>
                </div>
              </div>

              <div className="accordion-item">
                <button id="accordion-button-4" aria-expanded="false">
                  <span className="accordion-title">
                    How much does the Earth weigh?
                  </span>
                  <span className="icon" aria-hidden="true"></span>
                </button>
                <div className="accordion-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor
                    pretium viverra suspendisse potenti.
                  </p>
                </div>
              </div>

              <div className="accordion-item">
                <button id="accordion-button-5" aria-expanded="false">
                  <span className="accordion-title">
                    How do airplanes stay up?
                  </span>
                  <span className="icon" aria-hidden="true"></span>
                </button>
                <div className="accordion-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor
                    pretium viverra suspendisse potenti.
                  </p>
                </div>
              </div>

              <div className="accordion-item">
                <button id="accordion-button-6" aria-expanded="false">
                  <span className="accordion-title">
                    How do airplanes stay up?
                  </span>
                  <span className="icon" aria-hidden="true"></span>
                </button>
                <div className="accordion-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor
                    pretium viverra suspendisse potenti.
                  </p>
                </div>
              </div>

              <div className="accordion-item">
                <button id="accordion-button-7" aria-expanded="false">
                  <span className="accordion-title">
                    How do airplanes stay up?
                  </span>
                  <span className="icon" aria-hidden="true"></span>
                </button>
                <div className="accordion-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor
                    pretium viverra suspendisse potenti.
                  </p>
                </div>
              </div>

              <div className="accordion-item">
                <button id="accordion-button-8" aria-expanded="false">
                  <span className="accordion-title">
                    How do airplanes stay up?
                  </span>
                  <span className="icon" aria-hidden="true"></span>
                </button>
                <div className="accordion-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor
                    pretium viverra suspendisse potenti.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admission;
