import React from 'react'

const page = () => {
    return (
        <>
            <div className="section-banner">
                <div className="banner-layout-wrapper">
                    <div className="banner-layout">
                        <div className="d-flex flex-column text-center align-items-center gspace-2">
                            <h2
                                className="title-heading animate-box animated animate__animated"
                                data-animate="animate__fadeInRight"
                            >
                                About AP&A
                            </h2>
                            <nav className="breadcrumb">
                                <a href="/" className="gspace-2">
                                    Home
                                </a>
                                <span className="separator-link">/</span>
                                <p className="current-page">About Us</p>
                            </nav>
                        </div>
                        <div className="spacer" />
                    </div>
                </div>
            </div>

            {/* Section About Us */}
            <div className="section">
                <div className="hero-container">
                    <div className="d-flex flex-column flex-xl-row gspace-5">
                        <div className="about-img-layout">
                            <div className="image-container about-img">
                                <img
                                    src="/images/working-job-career-casual-showing-SJZWF3N-1024x737.jpg"
                                    alt="Expertise Image"
                                    className="img-fluid  animate-box animated animate__animated"
                                    data-animate="animate__fadeInUp"
                                />
                                <div className="about-layout">
                                    <div className="d-flex flex-column">
                                        {/* <div className="card-about-wrapper">
                                            <div
                                                className="card card-about animate-box animated animate__animated"
                                                data-animate="animate__fadeInDown"
                                            >
                                                <div className="d-flex flex-row align-items-center">
                                                    <span className="counter" data-target={21} />
                                                    <span className="counter-detail">+</span>
                                                </div>
                                                <h6>Years of Experience on Digital Marketing Services</h6>
                                            </div>
                                        </div> */}
                                        <div className="about-spacer" />
                                    </div>
                                    <div className="about-spacer" />
                                </div>
                            </div>
                        </div>
                        <div className="about-title">
                            <div className="d-flex flex-column gspace-2">
                                <div
                                    className="sub-heading animate-box animated animate__animated"
                                    data-animate="animate__fadeInRight"
                                >
                                    <i className="fa-regular fa-circle-dot" />
                                    <span>About Us</span>
                                </div>
                                <h2
                                    className="title-heading animate-box animated animate__animated"
                                    data-animate="animate__fadeInRight"
                                >
                                    Who We Are &amp; What Drives Us
                                </h2>
                                <p>
                                    At AP&A , we specialize in crafting innovative digital marketing
                                    strategies that drive real business growth. Our about ensures your
                                    brand stays ahead in the competitive digital landscape.
                                </p>
                                <p>
                                    Get to know the passionate team behind the strategies, the values
                                    that guide us, and the mission that fuels our growth.
                                </p>
                                <div className="d-flex flex-column flex-md-row gspace-1 gspace-md-5">
                                    <div className="about-list">
                                        <ul className="check-list">
                                            <li>
                                                <a href="/services">PPC &amp; Paid Ads</a>
                                            </li>
                                            <li>
                                                <a href="/services">Brand Strategy</a>
                                            </li>
                                            <li>
                                                <a href="/services">Conversion Optimization</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="about-list">
                                        <ul className="check-list">
                                            <li>
                                                <a href="/services">Performance Marketing</a>
                                            </li>
                                            <li>
                                                <a href="/services">Social Media Growth</a>
                                            </li>
                                            <li>
                                                <a href="/services">Content Marketing</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section Team */}
            <div className="section">
                <div className="hero-container">
                    <div className="team-wrapper">
                        <div className="card team-layout ">
                            <div
                                className="d-flex flex-column align-items-center gspace-2 animate-box animate__animated"
                                data-animate="animate__fadeInLeft "
                            >
                                <div className="sub-heading">
                                    <i className="fa-regular fa-circle-dot" />
                                    <span>Our Team</span>
                                </div>
                                <h2 className="title-heading">
                                    Meet the Minds Behind Your Digital Success
                                </h2>
                            </div>

                            {/* ✅ Centered Ajeet & Puja cards */}
                            <div className="row justify-content-center text-center g-4">
                                <div className="col-md-4 col-10 d-flex justify-content-center">
                                    <div className="d-flex flex-column align-items-center">
                                        <div className="image-team">
                                            <img
                                                src="/images/nouser.png"
                                                alt="Team Image"
                                                className="img-fluid"
                                            />
                                            <div className="social-team-wrapper mt-2">
                                                <div className="d-flex flex-row justify-content-center gap-3">
                                                    <a href="https://www.youtube.com/@apasystemofficial" className="social-item">
                                                        <i className="fa-brands fa-youtube" />
                                                    </a>
                                                    <a href="https://www.linkedin.com/company/ap-a-systemllp/posts/?feedView=all" className="social-item">
                                                        <i className="fa-brands fa-linkedin" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="team-profile mt-3">
                                            <h4>Ajeet Kumar</h4>
                                            <span className="title">Director & Founder</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 col-10 d-flex justify-content-center">
                                    <div className="d-flex flex-column align-items-center">
                                        <div className="image-team">
                                            <img
                                                src="/images/nouser.png"
                                                alt="Team Image"
                                                className="img-fluid"
                                            />
                                            <div className="social-team-wrapper mt-2">
                                                <div className="d-flex flex-row justify-content-center gap-3">
                                                    <a href="https://www.youtube.com/@apasystemofficial" className="social-item">
                                                        <i className="fa-brands fa-youtube" />
                                                    </a>
                                                    <a href="https://www.linkedin.com/company/ap-a-systemllp/posts/?feedView=all" className="social-item">
                                                        <i className="fa-brands fa-linkedin" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="team-profile mt-3">
                                            <h4>Puja Kumari</h4>
                                            <span className="title">Chief Executive Officer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="spacer" />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default page

export const metadata = {
    title: 'AP&A Systems - About Page',
    description: 'Your digital marketing partner for growth and success',
    icons: {
        icon: '/favicon.ico',
    },
};
