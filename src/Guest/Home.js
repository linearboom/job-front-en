import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css"; // Import Owl Carousel CSS
import "owl.carousel/dist/assets/owl.theme.default.css"; // Import Owl Carousel Default Theme CSS
import OwlCarousel from "react-owl-carousel"; // Import React Owl Carousel
import "../style.css";
//import Search from "./Search";

const Home = () => {
  return (
    <div className="container-fluid p-0">
      <OwlCarousel
        className="header-carousel position-relative"
        items={1}
        loop
        nav
        dots={false}
        autoplay
        autoplayTimeout={5000}
      >
        <div className="owl-carousel-item position-relative">
          <img className="img-fluid" src="./images/carousel-1.jpg" alt="" />
          <div
            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
            style={{ background: "rgba(43, 57, 64, .5)" }}
          >
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-10 col-lg-8">
                  <h1 className="display-3 text-white animated slideInDown mb-4">
                    Find The Perfect Job That You Deserved
                  </h1>
                  <p className="fs-5 fw-medium text-white mb-4 pb-2">
                    Create a free account, complete your profile, and get
                    matched with your dream job.
                  </p>
                  <a
                    href=""
                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >
                    Search A Job
                  </a>
                  <a
                    href=""
                    className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
                  >
                    Find A Talent
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="owl-carousel-item position-relative">
          <img className="img-fluid" src="./images/carousel-2.jpg" alt="" />
          <div
            className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
            style={{ background: "rgba(43, 57, 64, .5)" }}
          >
            <div className="container">
              <div className="row justify-content-start">
                <div className="col-10 col-lg-8">
                  <h1 className="display-3 text-white animated slideInDown mb-4">
                    Find The Best Startup Job That Fit You
                  </h1>
                  <p className="fs-5 fw-medium text-white mb-4 pb-2">
                    Create a free account, complete your profile, and get
                    matched with your dream job.
                  </p>
                  <a
                    href=""
                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >
                    Search A Job
                  </a>
                  <a
                    href=""
                    className="btn btn-secondary py-md-3 px-md-5 animated slideInRight"
                  >
                    Find A Talent
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </OwlCarousel>
      <br />
    </div>
  );
};

export default Home;
