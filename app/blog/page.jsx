import React from 'react'

const page = () => {
    return (
        <div className="section">
            <div className="hero-container">
                <div className="d-flex flex-column gspace-5">
                    <div className="row row-cols-xl-2 row-cols-1 grid-spacer-5 m-0">
                        <div className="col col-xl-8 ps-0 pe-0">
                            <div
                                className="d-flex flex-column gspace-2 animate-box animated fast animate__animated"
                                data-animate="animate__fadeInLeft"
                            >
                                <div className="sub-heading">
                                    <i className="fa-regular fa-circle-dot" />
                                    <span>Insights &amp; Trends</span>
                                </div>
                                <h2 className="title-heading">
                                    Latest Digital Marketing Strategies &amp; Tips
                                </h2>
                            </div>
                        </div>
                        <div className="col col-xl-4 ps-0 pe-0">
                            <div
                                className="d-flex flex-column gspace-2 justify-content-end h-100 animate-box animated animate__animated"
                                data-animate="animate__fadeInRight"
                            >
                                <p>
                                    Explore our latest blog articles covering industry trends,
                                    expert insights, and actionable strategies to elevate your
                                    digital marketing game.
                                </p>
                                <div className="link-wrapper">
                                    <a href="/blog">View All Articles</a>
                                    <i className="fa-solid fa-circle-arrow-right" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-md-2 row-cols-1 grid-spacer-3">
                        <div className="col">
                            <div
                                className="card card-blog animate-box animated animate__animated"
                                data-animate="animate__fadeInUp"
                                onclick="window.location.href='single_post.html'"
                            >
                                <div className="blog-image">
                                    <img
                                        src="/images/collaborative-process-of-multicultural-skilled-peo-AN9FZBQ-1024x683.jpg"
                                        alt="Blog Image"
                                    />
                                </div>
                                <div className="card-body">
                                    <div className="d-flex flex-row gspace-2">
                                        <div className="d-flex flex-row gspace-1 align-items-center">
                                            <i className="fa-solid fa-calendar accent-color" />
                                            <span className="meta-data">April 14, 2025</span>
                                        </div>
                                        <div className="d-flex flex-row gspace-1 align-items-center">
                                            <i className="fa-solid fa-folder accent-color" />
                                            <span className="meta-data">Social Media</span>
                                        </div>
                                    </div>
                                    <a href="/blog" className="blog-link">
                                        Mastering Instagram and Facebook Ads
                                    </a>
                                    <p>
                                        Social media platforms like Instagram and Facebook have billions of active users,
                                        making them essential for any brand’s marketing strategy.

                                        <p>  ✅ Start with clear campaign objectives (awareness, engagement, or conversions). </p>
                                        <p> ✅ Use audience segmentation & lookalike audiences to target precisely. </p>
                                        <p> ✅ Experiment with ad formats – carousel, reels, stories, and lead forms.  </p>
                                        <p> ✅ Track metrics like CTR, conversion rate, and ROAS to measure performance.  </p>
                                        <p> ✅ Optimize continuously with A/B testing and budget reallocation.</p>

                                        With the right mix of creativity and analytics, brands can achieve
                                        sustainable growth through Meta Ads.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div
                                className="card card-blog animate-box animated animate__animated"
                                data-animate="animate__fadeInUp"
                                onclick="window.location.href='single_post.html'"
                            >
                                <div className="blog-image">
                                    <img
                                        src="/images/collaborative-process-of-multicultural-skilled-peo-LY58K9U-1024x683.jpg"
                                        alt="Blog Image"
                                    />
                                </div>
                                <div className="card-body">
                                    <div className="d-flex flex-row gspace-2">
                                        <div className="d-flex flex-row gspace-1 align-items-center">
                                            <i className="fa-solid fa-calendar accent-color" />
                                            <span className="meta-data">April 14, 2025</span>
                                        </div>
                                        <div className="d-flex flex-row gspace-1 align-items-center">
                                            <i className="fa-solid fa-folder accent-color" />
                                            <span className="meta-data">SEO</span>
                                        </div>
                                    </div>
                                    <a href="/blog" className="blog-link">
                                        Growth Strategies for Digital Business
                                    </a>
                                    <p>
                                        Digital businesses grow when they build visibility, trust, and strong
                                        customer relationships. SEO remains the backbone of this growth.

                                        <p>   🚀 Optimize your website with keyword research, speed, and mobile-first design.  </p>
                                        <p>    🚀 Publish consistent, high-value content for your target audience.   </p>
                                        <p>   🚀 Use data analytics tools like Google Analytics & Search Console to measure impact.   </p>
                                        <p>   🚀 Leverage automation to streamline customer communication.   </p>
                                        <p>   🚀 Balance organic growth with paid advertising for faster reach. </p>

                                        When executed together, these strategies help digital businesses scale
                                        faster while staying sustainable.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page



export const metadata = {
  title: 'AP&A Systems - Blogs Page',
  description: 'Your digital marketing partner for growth and success',
  icons: {
    icon: '/favicon.ico',
  },
};