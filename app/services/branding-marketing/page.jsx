'use client';

import React from 'react';

export default function BrandingMarketingPage() {
  return (
    <div className="single-service-page">
      {/* Banner Section */}
      <div className="section-banner text-center">
        <div className="banner-layout-wrapper">
          <div className="banner-layout py-5">
            <h1 className="title-heading mb-3">Branding & Marketing</h1>
            <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Building powerful brands that connect, inspire, and grow through strategy, storytelling, and creativity.
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
            At <strong>AP&A SYSTEMS</strong>, we believe branding is more than a logo — it's your identity, your voice, 
            and the story that sets you apart. Through strategic branding and innovative marketing campaigns, 
            we help businesses establish a strong presence, emotionally connect with audiences, and achieve sustainable growth.
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
                🎨
              </div>
              <h5>Strategic Brand Identity</h5>
              <p>
                We craft meaningful brand strategies and visual identities that reflect your values, vision, and personality — 
                creating a lasting impact in the market.
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
                📢
              </div>
              <h5>Integrated Marketing Campaigns</h5>
              <p>
                From content to social to performance ads — we build cohesive campaigns that amplify your brand's reach, 
                engagement, and conversions across multiple platforms.
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
              <h5>Growth-Focused Positioning</h5>
              <p>
                Our data-driven strategies position your brand to capture attention, build loyalty, and 
                lead the market with authority and authenticity.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-5">
          <h3 className="mb-3">Let's Elevate Your Brand Together ✨</h3>
          <p className="mx-auto" style={{ maxWidth: '600px' }}>
            Partner with <strong>AP&A SYSTEMS</strong> to create a brand that people love and remember. 
            With a blend of creativity, strategy, and technology, we'll make your brand stand out in the digital landscape.
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
