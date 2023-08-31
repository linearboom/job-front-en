// import React from 'react';
// import './style.css';

// const Footer = () => {
//   return (
//     <div className="footer-container bg-dark text-white-50 pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
//       <div className="container py-5">
//         <div className="row g-5">
//           <div className="col-lg-3 col-md-6">
//             <h5 className="text-white mb-4">Company</h5>
//             <a className="footer-link" href="#">About Us</a>
//             <a className="footer-link" href="#">Contact Us</a>
//             <a className="footer-link" href="#">Our Services</a>
//             <a className="footer-link" href="#">Privacy Policy</a>
//             <a className="footer-link" href="#">Terms & Condition</a>
//           </div>
//           {/* <div className="col-lg-3 col-md-6">
//             <h5 className="text-white mb-4">Quick Links</h5>
//             <a className="footer-link" href="#">About Us</a>
//             <a className="footer-link" href="#">Contact Us</a>
//             <a className="footer-link" href="#">Our Services</a>
//             <a className="footer-link" href="#">Privacy Policy</a>
//             <a className="footer-link" href="#">Terms & Condition</a>
//           </div> */}
//           <div className="col-lg-3 col-md-6">
//             <h5 className="text-white mb-4">Contact</h5>
//             <p className="footer-info"><i className="fa fa-map-marker-alt me-3"></i>Location, City, Country</p>
//             <p className="footer-info"><i className="fa fa-phone-alt me-3"></i>+91 951997089</p>
//             <p className="footer-info"><i className="fa fa-envelope me-3"></i>fardin@gmail.com</p>
//             <div className="footer-social">
//               <a className="btn btn-outline-light btn-social me-2" href="#"><i className="fab fa-twitter"></i></a>
//               <a className="btn btn-outline-light btn-social me-2" href="#"><i className="fab fa-facebook-f"></i></a>
//               <a className="btn btn-outline-light btn-social me-2" href="#"><i className="fab fa-youtube"></i></a>
//               <a className="btn btn-outline-light btn-social me-2" href="#"><i className="fab fa-linkedin-in"></i></a>
//             </div>
//           </div>
//           <div className="col-lg-3 col-md-6">
//             <h5 className="text-white mb-4">Newsletter</h5>
//             <p className="footer-description">Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
//             <div className="footer-newsletter">
//               <input className="form-control bg-transparent py-3 ps-4 pe-5" type="text" placeholder="Your email" />
//               <button type="button" className="btn btn-primary py-2">SignUp</button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="container">
//         <div className="footer-bottom">
//           <div className="row">
//             <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
//               &copy; <a className="border-bottom" href="https://freewebsitecode.com">Your Site Name</a>, All Rights Reserved. Designed By{' '}
//               <a className="border-bottom" href="https://freewebsitecode.com">Free Website Code</a>
//             </div>
//             <div className="col-md-6 text-center text-md-end">
//               <div className="footer-menu">
//                 <a href="#">Home</a>
//                 <a href="#">Cookies</a>
//                 <a href="#">Help</a>
//                 <a href="#">FAQs</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container bg-dark text-white-50 pt-5 mt-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6">
            <h5 className="text-white mb-4">Company</h5>
            <ul className="list-unstyled">
              <li>
                <Link className="footer-link" to="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="footer-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5 className="text-white mb-4">Contact</h5>
            <ul className="list-unstyled">
              <li className="mb-3">
                <a
                  href="https://maps.google.com/maps?q=Kharghar, Mumbai, India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none"
                >
                  <i className="fa fa-map-marker-alt me-3"></i>Kharghar, Mumbai,
                  India
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="tel:+91951997089"
                  className="text-white text-decoration-none"
                >
                  <i className="fa fa-phone-alt me-3"></i>+91 951997089
                </a>
              </li>
              <li>
                <a
                  href="mailto:job_portal123@gmail.com"
                  className="text-white text-decoration-none"
                >
                  <i className="fa fa-envelope me-3"></i>job_portal123@gmail.com
                </a>
              </li>
            </ul>
            <div className="footer-social">
              <a
                className="btn btn-outline-light btn-social me-2"
                href="https://twitter.com/your-twitter-profile"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                className="btn btn-outline-light btn-social me-2"
                href="https://facebook.com/your-facebook-profile"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="btn btn-outline-light btn-social me-2"
                href="https://youtube.com/your-youtube-channel"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                className="btn btn-outline-light btn-social me-2"
                href="https://linkedin.com/in/your-linkedin-profile"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5 className="text-white mb-4">Stay Informed</h5>
            <p className="footer-description">
              Never miss a job opportunity. Stay updated with the latest job
              listings.
            </p>
            <div className="footer-newsletter">
              <input
                className="form-control bg-transparent py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button type="button" className="btn btn-primary py-2">
                <Link className="footer-link" to="/registerjobseeker">
                  Register
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer-bottom">
          <div className="row">
            <div className="col-md-12 text-center bg-dark text-white py-3">
              <p className="mb-0">
                &copy; {new Date().getFullYear()} Job Portal. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
