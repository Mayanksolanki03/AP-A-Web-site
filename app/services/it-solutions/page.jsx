'use client';

import React from 'react';

export default function ITSolutionsPage() {
  return (
    <div className="single-service-page">
      {/* Banner Section */}
      <div className="section-banner text-center">
        <div className="banner-layout-wrapper">
          <div className="banner-layout py-5">
            <h1 className="title-heading mb-3">IT Solutions</h1>
            <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Empowering businesses with secure, scalable, and innovative IT solutions that drive real transformation.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container py-5">
        {/* What We Do */}
        <div className="mb-5 text-center">
          <h2 className="mb-3">What We Do</h2>
          <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
            At <strong>AP&A SYSTEMS</strong>, we design and deliver end-to-end IT solutions tailored to your unique business needs. 
            From infrastructure to cloud integration and digital innovation, we enable organizations to modernize operations, 
            enhance security, and scale without limits. Our solutions don’t just solve problems — they unlock opportunities.
          </p>
        </div>

        {/* How We Deliver */}
        <div className="row g-4 text-center">
          <div className="col-md-4">
            <div className="card h-100 p-4 shadow-sm d-flex flex-column align-items-center">
              <div
                className="service-icon mb-3 d-flex align-items-center justify-content-center mx-auto"
                style={{
                  width: '60px',
                  height: '60px',
                  fontSize: '30px',
                  borderRadius: '12px',
                  background: '#111',
                  color: 'white',
                }}
              >
                💻
              </div>
              <h5>End-to-End Infrastructure</h5>
              <p>
                We build secure, scalable IT infrastructures that power businesses of all sizes — ensuring stability, 
                performance, and long-term growth.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 p-4 shadow-sm d-flex flex-column align-items-center">
              <div
                className="service-icon mb-3 d-flex align-items-center justify-content-center mx-auto"
                style={{
                  width: '60px',
                  height: '60px',
                  fontSize: '30px',
                  borderRadius: '12px',
                  background: '#111',
                  color: 'white',
                }}
              >
                ☁️
              </div>
              <h5>Cloud & Digital Transformation</h5>
              <p>
                Migrate, modernize, and innovate with our cloud-native solutions designed to accelerate business agility 
                and optimize operations.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 p-4 shadow-sm d-flex flex-column align-items-center">
              <div
                className="service-icon mb-3 d-flex align-items-center justify-content-center mx-auto"
                style={{
                  width: '60px',
                  height: '60px',
                  fontSize: '30px',
                  borderRadius: '12px',
                  background: '#111',
                  color: 'white',
                }}
              >
                🛡️
              </div>
              <h5>Security & Compliance</h5>
              <p>
                Our IT solutions are built with enterprise-grade security frameworks to keep your data safe 
                and ensure compliance with global standards.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-5">
          <h3 className="mb-3">Transform Your Business with AP&A SYSTEMS 🚀</h3>
          <p className="mx-auto" style={{ maxWidth: '600px' }}>
            Whether you're upgrading infrastructure, adopting cloud solutions, or future-proofing your digital ecosystem — 
            <strong> AP&A SYSTEMS </strong> is your trusted IT partner. Let’s build intelligent systems that grow with you.
          </p>
          <a
            href="/contact"
            className="btn btn-primary mt-3 px-4 py-2 rounded-pill d-inline-flex justify-content-center text-center w-auto"
            style={{ minWidth: '220px' }}
          >
            Contact Our Experts
          </a>
        </div>
      </div>
    </div>
  );
}
