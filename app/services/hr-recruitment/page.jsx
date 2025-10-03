'use client';

import React from 'react';

export default function HRRecruitmentPage() {
  return (
    <div className="single-service-page">
      {/* Banner Section */}
      <div className="section-banner text-center">
        <div className="banner-layout-wrapper">
          <div className="banner-layout py-5">
            <h1 className="title-heading mb-3">HR & Recruitment</h1>
            <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Connecting top talent with visionary companies through smart recruitment strategies and people-first solutions.
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
            At <strong>AP&A SYSTEMS</strong>, we bridge the gap between skilled professionals and growing businesses. 
            With a deep understanding of industry needs and people dynamics, we design recruitment strategies that are 
            fast, reliable, and tailored for long-term success. Whether you're building a team from scratch or scaling up, 
            we bring the right talent to the right place at the right time.
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
                🧭
              </div>
              <h5>Targeted Talent Acquisition</h5>
              <p>
                We use data-driven methods and in-depth market insights to source and attract top talent 
                that perfectly fits your organizational goals and culture.
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
                🤝
              </div>
              <h5>End-to-End Recruitment</h5>
              <p>
                From job profiling and screening to interviews and onboarding, 
                we handle the entire recruitment cycle with speed, precision, and professionalism.
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
                🌐
              </div>
              <h5>Strategic Workforce Planning</h5>
              <p>
                Our team aligns hiring strategies with your growth roadmap to ensure sustainable scaling 
                and a workforce built for the future.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-5">
          <h3 className="mb-3">Let's Build Your Dream Team Together 🚀</h3>
          <p className="mx-auto" style={{ maxWidth: '600px' }}>
            Partner with <strong>AP&A SYSTEMS</strong> to simplify recruitment and hire smarter. 
            From startups to enterprises, our strategic approach ensures you get the talent 
            you need to drive your vision forward.
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
