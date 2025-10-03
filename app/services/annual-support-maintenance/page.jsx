'use client';

import React from 'react';

export default function AnnualSupportMaintenancePage() {
  return (
    <div className="single-service-page">
      {/* Banner Section */}
      <div className="section-banner text-center">
        <div className="banner-layout-wrapper">
          <div className="banner-layout py-5">
            <h1 className="title-heading mb-3">Annual Support & Maintenance</h1>
            <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Ensuring your business runs smoothly year-round with proactive support, expert maintenance, and reliable service.
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
            At <strong>AP&A SYSTEMS</strong>, we understand that reliable systems are the backbone of successful businesses. 
            Our Annual Support & Maintenance services keep your infrastructure stable, secure, and optimized — 
            so you can focus on growth while we handle the rest. From preventive measures to instant issue resolution, 
            we ensure your digital ecosystem stays healthy and future-ready.
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
                🛠️
              </div>
              <h5>Proactive System Maintenance</h5>
              <p>
                Regular check-ups, upgrades, and optimizations to prevent issues before they impact performance — 
                keeping your systems running at peak efficiency.
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
                ⚡
              </div>
              <h5>Real-Time Support</h5>
              <p>
                Whether it's a minor glitch or a major disruption, our expert support team is always ready to respond quickly 
                and get your systems back on track with minimal downtime.
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
                🔒
              </div>
              <h5>Security & Reliability</h5>
              <p>
                We safeguard your operations through regular security audits, backups, and fail-safe mechanisms 
                to ensure business continuity and peace of mind.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-5">
          <h3 className="mb-3">Keep Your Systems Strong All Year Long 🔧</h3>
          <p className="mx-auto" style={{ maxWidth: '600px' }}>
            Partner with <strong>AP&A SYSTEMS</strong> to ensure your technology never lets you down. 
            With our annual maintenance and support plans, you gain more than service — 
            you gain a trusted technology partner focused on your uptime and success.
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
