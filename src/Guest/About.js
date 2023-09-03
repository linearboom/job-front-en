import React from "react";
import "./About.css";
import Aboutimg from "./about-us.png";
import Towing from "./Towing-aboutus.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

const about = () => {
  return (
    <div>
      <div className="row" id="aboutus-main">
        <div className="col-12 col-lg-6">
          <h1>About Us</h1>
          <span>
            Welcome, your ultimate destination for connecting talented
            individuals with exciting
          </span>
          <br />
          <span>
            career opportunities. We understand the transformative power of
            finding the right
          </span>
          <br />
          <span>
            job or the perfect candidate, and our platform is designed to make
            this process
          </span>
          <br />
          <span> seamless and rewarding.</span>

          <br />
        </div>
        <img src={Aboutimg} className="col-12 col-lg-6" />
      </div>
      <div className="row  " id="aboutus-info">
        <div></div>
        <div className="col-sm-12 col-md-6 ">
          <h5>Our Mission</h5>
          <h1>Job Accessibility, Efficiency and Convenience </h1>
          <img
            src={require("./Jobportal1.jpg")}
            className="col-12 col-lg-6"
            style={{ paddingTop: 20, paddingBottom: 30 }}
          />
          <br />
          <span>
            ReadyAssist is India's leading technology backed roadside assistance
            and vehicle lifecycle management company, providing 24/7 real-time
            breakdown and on-spot repair service across 19000+ pin codes
            covering 700+ districts in India. Powered by a deep-tech platform
            and driven by a Pan-India network of more than 5000+ skilled and
            groomed mechanics, &amp; we ensure Reliability
          </span>
          <br />
          <br />
          <span>
            Our advanced algorithm utilizes cutting-edge technology to match job
            seekers with positions that align with their skills, experience, and
            aspirations. For employers, this means a higher likelihood of
            finding candidates who are the perfect fit for their team.
          </span>
        </div>
        <div className="col-sm-12 col-md-6 text-center ">
          <ul>
            <h5>Rated 4.7 Stars in Google</h5>
            <h5>Largest network of Online Jobs</h5>
            <h5>250+ strong people team</h5>
            <h5>Serving the purpose through technology</h5>
            <h5>An ISO 27001:2013 certified company</h5>
          </ul>
          <img
            src={require("./Jobportal2.jpg")}
            className="col-12 col-lg-6 rounded-3"
          />
          <br />
        </div>
      </div>
      <div className="container text-center py-5">
        <h2 className="text">Board Members</h2>
        <p className="text">
          As a diverse company in emergency assistance services , our leaders
          have embraced strong governance, epitomize the company's Purpose,
          Values, and Principles, and bring to bear the practical wisdom and
          seasoned judgment that comes from significant leadership skill and
          experience. The current Board reflects an appropriate mix of skills,
          experience, and qualifications that are relevant to the business and
          governance of the Company and that help further the long-term
          interests of our shareholders. Each Director also has individual
          experiences that allow them to provide practical insight and unique
          perspectives in the boardroom. Collectively, our Directors have led
          global businesses and finance organizations, have founded startups,
          have successfully navigated shifting media and retail landscapes, have
          guided strategic transformations, and have held significant governance
          roles. they have worked in industries as varied as legal, healthcare,
          retail, deep tech, insurance, risk analytics, underwriting,
          entertainment and information technology.
        </p>
        <div className="row row-cols-1 row-cols-md-3 g-4 py-5 justify-content-center">
          <div className="col">
            <div className="card board-card">
              <img
                src={require("./Raj.jpg")}
                className="card-img-top board-card-top"
                alt="..."
              />
              <div className="card-body ">
                <h3 className="card-title">Raj Chaudhari</h3>
                <p className="text-muted">
                  Co-Founder &amp; Managing Director - JobEntry
                </p>
                <p className="card-text">Board of Directors</p>
              </div>
              <div className="d-flex justify-content-evenly">
                <a
                  href="https://www.linkedin.com/in/raj-chaudhari-522b56177/"
                  target="blank"
                >
                  <i className="bi bi-linkedin" />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                  <i className="bi bi-instagram" />
                </a>
                <a href="mailto:hello@readyassist.in">
                  <i className="bi bi-envelope-check-fill" />
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card board-card">
              <img
                src={require("./rohan.jpg")}
                className="card-img-top board-card-top"
                alt="..."
              />
              <div className="card-body">
                <h3 className="card-title">Rohan Maurya</h3>
                <p className="text-muted">
                  Co-Founder &amp; Managing Director - JobEntry
                </p>
                <p className="card-text">Board of Directors</p>
              </div>
              <div className="d-flex justify-content-evenly">
                <a
                  href="https://in.linkedin.com/in/rohan-maurya-920910a9?trk=people-guest_people_search-card"
                  target="blank"
                >
                  <i className="bi bi-linkedin" />
                </a>
                <a
                  href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fonetap%2F%3Fnext%3D%252F%26__coig_login%3D1"
                  target="_blank"
                >
                  <i className="bi bi-instagram" />
                </a>
                <a href="mailto:hello@readyassist.in">
                  <i className="bi bi-envelope-check-fill" />
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card board-card">
              <img
                src={require("./Israr.jpg")}
                className="card-img-top board-card-top"
                alt="..."
              />
              <div className="card-body">
                <h3 className="card-title">Israr Khan</h3>
                <p className="text-muted">
                  Co-Founder &amp; Managing Director - JobEntry
                </p>
                <p className="card-text">Board of Directors</p>
              </div>
              <div className="d-flex justify-content-evenly">
                <a
                  href="https://www.linkedin.com/in/gitesh-sarnobat-66972a184"
                  target="blank"
                >
                  <i className="bi bi-linkedin" />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                  <i className="bi bi-instagram" />
                </a>
                <a href="mailto:hello@readyassist.in">
                  <i className="bi bi-envelope-check-fill" />
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card board-card">
              <img
                src={require("./Fardin.jpg")}
                className="card-img-top board-card-top"
                alt="..."
              />
              <div className="card-body">
                <h3 className="card-title">Fardin Tambole</h3>
                <p className="text-muted">
                  Co-Founder &amp; Managing Director - JobEntry
                </p>
                <p className="card-text">Board of Directors</p>
              </div>
              <div className="d-flex justify-content-evenly">
                <a
                  href="https://www.linkedin.com/in/gitesh-sarnobat-66972a184"
                  target="blank"
                >
                  <i className="bi bi-linkedin" />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                  <i className="bi bi-instagram" />
                </a>
                <a href="mailto:hello@readyassist.in">
                  <i className="bi bi-envelope-check-fill" />
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card board-card">
              <img
                src={require("./Bhoomika.jpg")}
                className="card-img-top board-card-top"
                alt="..."
              />
              <div className="card-body">
                <h3 className="card-title">Bhoomika Dhanwat</h3>
                <p className="text-muted">
                  Co - Founder &amp; Managing Director - JobEntry
                </p>
                <p className="card-text">Board of Directors</p>
              </div>
              <div className="d-flex justify-content-evenly">
                <a
                  href="https://www.linkedin.com/in/rohit-kolhale-b27a14205"
                  target="blank"
                >
                  <i className="bi bi-linkedin" />
                </a>

                <a href="https://www.instagram.com/" target="_blank">
                  <i className="bi bi-instagram" />
                </a>
                <a href="mailto:hello@readyassist.in">
                  <i className="bi bi-envelope-check-fill" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
