import { Link } from "lucide-react";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="section-footer">
      <div className="bg-footer-wrapper">
        <div className="bg-footer">
          <div className="hero-container position-relative z-2">
            <div className="d-flex flex-column gspace-2">
              <div className="row row-cols-xl-4 row-cols-md-2 row-cols-1 grid-spacer-5">
                <div className="col col-xl-4">
                  <div className="footer-logo-container">
                    <div className="logo-container-footer">
                      <Image src="/images/marko-logo.png" width={100} height={100} alt="Logo" className="site-logo img-fluid" />
                    </div>
                    <h4>Driving Digital Growth with Innovation & Strategy</h4>
                    <p>
                      Your next solution starts here. Connect with AP&A SYSTEM by filling out the contact form today.
                    </p>
                  </div>
                </div>
                <div className="col col-xl-2">
                  <div className="footer-quick-links">
                    <h5>Quick Links</h5>
                    <ul className="footer-list">
                      <li><a href="/">Home</a></li>
                      <li><a href="/about">About Us</a></li>
                      <li><a href="/services">Service</a></li>
                      <li><a href="/contact">Contact Us</a></li>
                      <li><a href="/career">Careers</a></li>
                      <li><a href="/blog">Blogs</a></li>

                      <li><a href="/cookie">cookie Policy</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col col-xl-3">
                  <div className="footer-services-container">
                    <h5>Services</h5>
                    <ul className="footer-list">
                      <li><a href="/services/social-media-management">Social Media Management</a></li>
                      <li><a href="/services/hr-recruitment">HR Recruitement</a></li>
                      <li><a href="/services/branding-marketing">Branding & Marketing</a></li>
                      <li><a href="/services/digital-marketing">Digital Marketing</a></li>
                      <li><a href="/services/annual-support-maintenance">Annual Support Maintainance</a></li>
                      <li><a href="/services/it-solutions">IT Solutions</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col col-xl-3">

                  <div className="footer-contact-container">
                    <h5>Contact Info</h5>

                    <ul className="contact-list">
                      <li className="d-flex align-items-start mb-3">
                        <span className="footer-icon">
                          <i className="fa-solid fa-envelope accent-color"></i>
                        </span>
                        <span>info@apasystemllp.com</span>
                      </li>

                      <li className="d-flex align-items-start mb-3">
                        <span className="footer-icon">
                          <i className="fa-solid fa-phone accent-color"></i>
                        </span>
                        <span>+91 9006016444</span>
                      </li>

                      <li className="d-flex align-items-start">
                        <span className="footer-icon">
                          <i className="fa-solid fa-location-dot accent-color"></i>
                        </span>
                        <span>
                          AP&A SYSTEM,<br />
                          Tajvag Pokhra, Hajipur,<br />
                          Vaishali, Bihar-844101
                        </span>
                      </li>
                    </ul>


                    <div className="d-flex flex-column gspace-1">
                      <h5>Social Media</h5>
                      <div className="social-container">
                        <div className="social-item-wrapper">
                          <a href="https://www.youtube.com/@apasystemofficial" className="social-item">
                            <i className="fa-brands fa-youtube"></i>
                          </a>
                        </div>
                        <div className="social-item-wrapper">
                          <a href="https://www.linkedin.com/company/ap-a-systemllp/posts/?feedView=all" className="social-item">
                            <i className="fa-brands fa-linkedin"></i>
                          </a>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-content-spacer"></div>
            </div>
            <div className="copyright-container">
              <span className="copyright">copyright  © 2025 <bold>AP&A SYSTEM</bold> All Rights Reserved.</span>
              <div className="d-flex flex-row gspace-2">
                <a href="/terms-conditions" className="legal-link">Terms of Service</a>
                <a href="/privacypolicy" className="legal-link">Privacy Policy</a>
              </div>
            </div>
            <div className="footer-spacer"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}