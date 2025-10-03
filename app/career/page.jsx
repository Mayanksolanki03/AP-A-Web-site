import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Careers() {
  return (
    <>
      {/* Section Career Form */}
      <div className="section">
        <div className="hero-container">
          {/* ✅ Added align-items-start here */}
          <div className="row row-cols-xl-2 row-cols-1 g-5 align-items-start">
            {/* Contact / Info Section */}
            <div className="col col-xl-5">
              <div className="contact-title-wrapper">
                <div className="card contact-title">
                  <div className="sub-heading">
                    <i className="fa-regular fa-circle-dot" />
                    <span>Reach out to us</span>
                  </div>
                  <h6 className="title-heading">
                    Thank you for your interest in joining our team!
                  </h6>

                  {/* Phone */}
                  <div className="d-flex align-items-start gap-3 mb-3">
                    <div className="icon-wrapper">
                      <div className="icon-box">
                        <i className="fa-solid fa-phone accent-color" />
                      </div>
                    </div>
                    <div className="d-grid text-start">
                      <span>Phone Number</span>
                      <p className="mb-0">90060 16444</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="d-flex align-items-start gap-3 mb-3">
                    <div className="icon-wrapper">
                      <div className="icon-box">
                        <i className="fa-solid fa-envelope accent-color" />
                      </div>
                    </div>
                    <div className="d-grid text-start">
                      <span>Email Address</span>
                      <p className="mb-0">info@apasystemllp.com</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="d-flex align-items-start gap-3">
                    <div className="icon-wrapper">
                      <div className="icon-box">
                        <i className="fa-solid fa-location-dot accent-color" />
                      </div>
                    </div>
                    <div className="d-grid text-start">
                      <span>Address</span>
                      <p className="mb-0">
                        Tajvag Pokhra, Hajipur, Vaishali, Bihar-844101
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Form */}
            <div className="col col-xl-7">
              <div id="success-message" className="alert success hidden">
                <span className="check-icon">
                  <i className="fa-solid fa-2xl fa-check" />
                </span>
                <p>Thank you! Your application has been submitted.</p>
              </div>

              {/* ✅ Removed unnecessary top padding/margin */}
              <div className="form-layout-wrapper" style={{ marginTop: 0, paddingTop: 0 }}>
                <div className="card form-layout">
                  <h3 className="title-heading">Submit Your Resume</h3>
                  <form
                    action="/uploadResume"
                    method="post"
                    id="careerForm"
                    className="form"
                    encType="multipart/form-data"
                  >
                    <div className="row row-cols-md-2 row-cols-1 g-3">
                      <div className="col">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Name"
                          required
                        />
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          name="message"
                          id="message"
                          placeholder="Message for AP&A"
                        />
                      </div>
                    </div>

                    <div className="row row-cols-md-2 row-cols-1 g-3">
                      <div className="col">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Email"
                          required
                        />
                      </div>
                      <div className="col">
                        {/* 📝 Resume Upload Field */}
                        <input
                          type="file"
                          name="resume"
                          id="resume"
                          accept=".pdf,.doc,.docx"
                          required
                          className="file-input"
                        />
                      </div>
                    </div>

                    <div className="form-button-container">
                      <button type="submit" className="btn btn-accent">
                        <span className="btn-title">
                          <span>Send</span>
                        </span>
                        <span className="icon-circle">
                          <i className="fa-solid fa-arrow-right" />
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const metadata = {
  title: "AP&A Systems - Careers Page",
  description: "Submit your resume and join our growing team at AP&A Systems.",
  icons: {
    icon: "/favicon.ico",
  },
};
