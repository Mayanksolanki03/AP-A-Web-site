'use client';

import React from 'react';

export default function DigitalMarketingPage() {
  return (
    <div className="single-service-page">
      {/* Banner Section */}
      <div className="section-banner text-center">
        <div className="banner-layout-wrapper">
          <div className="banner-layout py-5">
            <h1 className="title-heading mb-3">Digital Marketing</h1>
            <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Driving measurable growth through strategic campaigns, data-driven insights, and creative excellence.
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
            At <strong>AP&A SYSTEMS</strong>, we don’t just run ads — we craft impactful digital ecosystems that help your brand dominate the online space. 
            From SEO and social media to performance marketing and paid campaigns, we build solutions that are both creative and measurable.
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
                📈
              </div>
              <h5>Data-Driven Strategies</h5>
              <p>
                Every campaign starts with in-depth research, analytics, and strategy to ensure your brand stands out and scales effectively.
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
                🚀
              </div>
              <h5>Scalable Campaigns</h5>
              <p>
                We design marketing solutions that grow with your business — from startups to enterprises, delivering consistent impact.
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
              <h5>Expert Execution</h5>
              <p>
                With years of experience in SEO, PPC, and content marketing, our team ensures flawless execution and measurable ROI.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-5">
          <h3 className="mb-3">Let's Amplify Your Digital Presence 🚀</h3>
          <p className="mx-auto" style={{ maxWidth: '600px' }}>
            Partner with <strong>AP&A SYSTEMS</strong> to build data-driven campaigns that inspire action and deliver impact. 
            Whether you want to scale your audience, increase conversions, or build brand trust — we’ll make it happen.
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
