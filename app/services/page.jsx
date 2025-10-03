'use client';

import React from 'react';
import Link from 'next/link';

const page = () => {
  return (
    <div className="card-service-wrapper">

      <div className="section-banner">
        <div className="banner-layout-wrapper">
          <div className="banner-layout">
            <div className="d-flex flex-column text-center align-items-center gspace-2">
              <h2
                className="title-heading animate-box animated animate__animated"
                data-animate="animate__fadeInRight"
              >
                Services @AP&A!
              </h2>
              <nav className="breadcrumb">
                <a href="/" className="gspace-2">
                  Home
                </a>
                <span className="separator-link">/</span>
                <p className="current-page">Our Services</p>
              </nav>
            </div>
            <div className="spacer" />
          </div>
        </div>
      </div>

      {/* ✅ Services Grid */}
      <div className="hero-container mb-5">
        <div className="row row-cols-xl-3 row-cols-md-2 row-cols-1 grid-spacer-2 justify-content-center text-center g-4">

          {/* ✅ Card 1 */}
          <div className="col">
            <Link href="/services/it-solutions">
              <div
                className="card card-service animate-box animated fast animate__animated text-center pb-4"
                data-animate="animate__fadeInLeft"
              >
                <div className="d-flex flex-column align-items-center text-center gap-3">
                  <div className="service-icon-wrapper">
                    <div className="service-icon">
                      <img
                        src="/images/Icon-4.png"
                        alt="Service Icon"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="service-title">
                    <h4>IT Solutions</h4>
                  </div>
                </div>
                <p className="text-center mt-2">
                  Secure, scalable, and intelligent IT solutions that power digital transformation and business growth, which makes you stand out between many. Let's start with AP&A Systems.
                </p>
              </div>
            </Link>
          </div>

          {/* ✅ Card 2 */}
          <div className="col">
            <Link href="/services/annual-support-maintenance">
              <div
                className="card card-service animate-box animated animate__animated text-center pb-4"
                data-animate="animate__fadeInLeft"
              >
                <div className="d-flex flex-column align-items-center text-center gap-3">
                  <div className="service-icon-wrapper">
                    <div className="service-icon">
                      <img
                        src="/images/Icon-6.png"
                        alt="Service Icon"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="service-title">
                    <h4>Annual Support Maintainance</h4>
                  </div>
                </div>
                <p className="text-center mt-2">
                  Reliable year-round IT support and proactive maintenance to keep your systems running smoothly nice & responsive.
                </p>
              </div>
            </Link>
          </div>

          {/* ✅ Card 3 */}
          <div className="col">
            <Link href="/services/social-media-management">
              <div
                className="card card-service animate-box animated slow animate__animated text-center pb-4"
                data-animate="animate__fadeInLeft"
              >
                <div className="d-flex flex-column align-items-center text-center gap-3">
                  <div className="service-icon-wrapper">
                    <div className="service-icon">
                      <img
                        src="/images/Icon-7.png"
                        alt="Service Icon"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="service-title">
                    <h4>Social Media Management</h4>
                  </div>
                </div>
                <p className="text-center mt-2">
                  Data-driven social media strategies to grow engagement, boost visibility, and build lasting connections.
                </p>
              </div>
            </Link>
          </div>

          {/* ✅ Card 4 */}
          <div className="col">
            <Link href="/services/digital-marketing">
              <div
                className="card card-service animate-box animated animate__animated text-center pb-4"
                data-animate="animate__fadeInLeft"
              >
                <div className="d-flex flex-column align-items-center text-center gap-3">
                  <div className="service-icon-wrapper">
                    <div className="service-icon">
                      <img
                        src="/images/digital-marketing-icons-F4LJ4W8.png"
                        alt="Service Icon"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="service-title">
                    <h4>Digital Marketing</h4>
                  </div>
                </div>
                <p className="text-center mt-2">
                  Creative digital campaigns powered by analytics to maximize reach, impact, and measurable ROI.
                </p>
              </div>
            </Link>
          </div>

          {/* ✅ Card 5 */}
          <div className="col">
            <Link href="/services/hr-recruitment">
              <div
                className="card card-service animate-box animated fast animate__animated text-center pb-4"
                data-animate="animate__fadeInLeft"
              >
                <div className="d-flex flex-column align-items-center text-center gap-3">
                  <div className="service-icon-wrapper">
                    <div className="service-icon">
                      <img
                        src="/images/Icon-8.png"
                        alt="Service Icon"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="service-title">
                    <h4>HR & Recruitement</h4>
                  </div>
                </div>
                <p className="text-center mt-2">
                  Smart recruitment solutions that connect top talent with the right opportunities and drive workforce .
                </p>
              </div>
            </Link>
          </div>

          {/* ✅ Card 6 */}
          <div className="col">
            <Link href="/services/branding-marketing">
              <div
                className="card card-service animate-box animated slow animate__animated text-center pb-4"
                data-animate="animate__fadeInLeft"
              >
                <div className="d-flex flex-column align-items-center text-center gap-3">
                  <div className="service-icon-wrapper">
                    <div className="service-icon">
                      <img
                        src="/images/Icon-5.png"
                        alt="Service Icon"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="service-title">
                    <h4>Branding & Marketing</h4>
                  </div>
                </div>
                <p className="text-center mt-2">
                  Impactful branding strategies that boost your presence, engage your audience, and accelerate growth.
                </p>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default page;
