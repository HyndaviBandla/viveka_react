import React from "react";

const Carousel = () => {
  return (
    <div>
      {" "}
      <div
        id="studentCarousel"
        className="carousel slide  carouselDiv"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          {/* <!-- Slide 1 --> */}
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <p className="text-left">
                    <i>
                      "I have spent over 11 years in VIVEKA. When I look back
                      upon my years in the school, I remember, at first, a
                      3–4-year-old shy, reserved, and timid girl- someone who
                      was scared to open up. The next things that come to my
                      mind are different competition all of which helped me
                      reduce my stage fright and gain confidence. I will forever
                      be grateful to VIVEKA for helping me discover my
                      strengths. When I look back at my I cannot believe how
                      fast time has flown. I will forever cherish this entire
                      journey of memories filled with wonderful teachers and
                      amazing classmates! "
                    </i>
                  </p>
                </div>
                <div className="col-md-4">
                  <img
                    src="StudentopinionImages/likki1.png"
                    style="border-radius: 50%;width: 200px ;margin-right:15px;"
                    alt="Student 1"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Slide 2 --> */}
          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <p className="text-left">
                    <i>
                      "I have spent over 13 years in VIVEKA both school and
                      college. I have been in VIVEKA since nursery and this
                      place has given good memories and experiences. I have
                      learnt so much from teachers, fellow peers and other
                      students. VIVEKA has taught me good habits as well as
                      right and rational thinking. It has made me duty-bound and
                      obedient. The teachers here are so calm and patient . They
                      have always had the students’ backs and helped them with
                      anything they needed. They pushed us forward to be a
                      better version of ourselves and were so friendly and
                      committed to teaching us. "
                    </i>
                  </p>
                </div>
                <div className="col-md-4">
                  <img
                    src="StudentopinionImages/sush1.png"
                    style="border-radius: 50%;width:15vw ;"
                    alt="Student 2"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Slide 3 --> */}
          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <p className="text-left">
                    <i>
                      "I have studied 5 years in VIVEKA both my secondary and
                      intermidiate. thiss place has given good friends.I have
                      got interest on studies by the kind of teaching from the
                      teachers and my fellow peers.I have gained self confidence
                      and discipline here.I will suggest this school for some
                      one to achieve in studies and life.Due to this institution
                      i have passed out with 10 CGPA in 10th standard and 98%
                      marks in intermidiate and got in to one of the famed
                      university VIT. "
                    </i>
                  </p>
                </div>
                <div className="col-md-4">
                  <img
                    src="StudentopinionImages/Hyndavi.png"
                    style="border-radius: 50%;width: 200px "
                    alt="Student 3"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href="#studentCarousel"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
            style="color: blueviolet;"
          ></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#studentCarousel"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      />
    </div>
  );
};

export default Carousel;
