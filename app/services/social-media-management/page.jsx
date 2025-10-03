'use client';

import React from 'react';

export default function SocialMediaManagementPage() {
  return (
    <div className="single-service-page">
      {/* ✅ Banner Section */}
      <div className="section-banner text-center">
        <div className="banner-layout-wrapper">
          <div className="banner-layout py-5">
            <h1 className="title-heading mb-3">Social Media Management</h1>
            <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Elevate your brand with impactful social media strategies designed to grow engagement, visibility, and community.
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Content Section */}
      <div className="container py-5">
        {/* What We Do */}
        <div className="mb-5 text-center">
          <h2 className="mb-3">What We Do</h2>
          <p className="lead mx-auto" style={{ maxWidth: '700px' }}>
            At <strong>AP&A SYSTEMS</strong>, we go beyond posting content — we build powerful social communities. 
            Through a blend of strategy, creativity, and analytics, we help your brand connect with audiences, 
            drive engagement, and create a loyal digital following across platforms.
          </p>
        </div>

        {/* ✅ How We Deliver */}
        <div className="row g-4 text-center">
          {/* Strategic Planning */}
          <div className="col-md-4">
            <div className="card h-100 p-4 shadow-sm d-flex flex-column align-items-center">
              <div
                className="service-icon-wrapper d-flex align-items-center justify-content-center mb-3"
                style={{
                  width: '60px',
                  height: '60px',
                  fontSize: '30px',
                  borderRadius: '12px',
                  background: '#111',
                  color: 'white',
                }}
              >
                📊
              </div>
              <h5>Strategic Planning</h5>
              <p>
                We craft tailored content strategies backed by data to amplify reach, boost engagement, and align with your business goals.
              </p>
            </div>
          </div>

          {/* Creative Storytelling */}
          <div className="col-md-4">
            <div className="card h-100 p-4 shadow-sm d-flex flex-column align-items-center">
              <div
                className="service-icon-wrapper d-flex align-items-center justify-content-center mb-3"
                style={{
                  width: '60px',
                  height: '60px',
                  fontSize: '30px',
                  borderRadius: '12px',
                  background: '#111',
                  color: 'white',
                }}
              >
                ✨
              </div>
              <h5>Creative Storytelling</h5>
              <p>
                Our team designs visually engaging posts, reels, and campaigns that resonate with your audience and strengthen your brand identity.
              </p>
            </div>
          </div>

          {/* Performance Optimization */}
          <div className="col-md-4">
            <div className="card h-100 p-4 shadow-sm d-flex flex-column align-items-center">
              <div
                className="service-icon-wrapper d-flex align-items-center justify-content-center mb-3"
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
              <h5>Performance Optimization</h5>
              <p>
                Using real-time analytics and growth tactics, we ensure your campaigns continuously adapt for maximum impact and ROI.
              </p>
            </div>
          </div>
        </div>

        {/* ✅ CTA Section */}
        <div className="text-center mt-5">
          <h3 className="mb-3">Let's Amplify Your Social Presence 🚀</h3>
          <p className="mx-auto" style={{ maxWidth: '600px' }}>
            Partner with <strong>AP&A SYSTEMS</strong> to build meaningful digital communities, increase visibility, 
            and create a lasting impact. Whether you're starting from scratch or scaling up — we’ll help your brand shine online.
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
