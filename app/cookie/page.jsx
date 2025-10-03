import React from 'react'

const page = () => {
    return (
        <div className='p-4'>
            <h4 className=''>Privacy Policy</h4>
            <br />
            <div>
                <p>Last Updated Date:- July 19, 2025</p>
                <br />
                <p>AP&A System uses cookies and similar technologies to deliver a secure, customized, and efficient website experience for our users. This Cookie Policy explains what cookies are, which types we use, their purpose, and how you can manage them on our site.
                </p>
                
                <br />
                <h4>What Are Cookies?</h4>
                <br />
                <p>Cookies are small text files placed on your device (computer, smartphone, or tablet) when you visit a website. They store information about your visit, such as your preferences and settings, to enhance your browsing experience and allow certain website functions to operate efficiently.</p>
                <br />
                
                <h4>Why We Use Cookies?</h4>
                <br />
                <p>We use cookies to:</p>
                <br />

                <p>Ensure our website functions properly and securely.</p>
                <p>Analyse site usage for improvements.</p>
                <p>Provide relevant content and marketing communications..</p>
                <p>Remember your preferences and settings.</p>
          
                <br />
                <div className="container mx-auto px-4 py-8">
      <h4 className="text-xl font-semibold mb-2">Why We Use Cookies?</h4>
      <p>We use cookies to:</p>
      <br />
      <ul className="list-disc list-inside space-y-1">
        <li>Ensure our website functions properly and securely.</li>
        <li>Analyse site usage for improvements.</li>
        <li>Provide relevant content and marketing communications.</li>
        <li>Remember your preferences and settings.</li>
      </ul>

      <br />
      <h4 className="text-xl font-semibold mb-4">Types of Cookies We Use</h4>

      {/* Cookie Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">Cookie Type</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-medium">Necessary Cookies</td>
              <td className="border border-gray-300 px-4 py-2">
                Essential for core website operations and security (e.g., login, navigation).
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-medium">Functionality Cookies</td>
              <td className="border border-gray-300 px-4 py-2">
                Enable personalization (like remembering language or region).
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-medium">Analytics Cookies</td>
              <td className="border border-gray-300 px-4 py-2">
                Help us analyse website traffic and user interaction via tools such as Google Analytics.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-medium">Marketing Cookies</td>
              <td className="border border-gray-300 px-4 py-2">
                Deliver targeted advertising and assess campaign effectiveness.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-medium">Third-Party Cookies</td>
              <td className="border border-gray-300 px-4 py-2">
                Set by external providers (e.g., embedded content, analytics, social plugins).
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
                <br />
              
                <h4>How We Collect Cookie Information</h4>
                <br />
                <p>Cookies are automatically placed on your device when you visit and interact with our website. Some are set by us (first-party cookies), while others are delivered on our behalf by trusted partners (third-party cookies).</p>
                <br />
                <h4>How to Manage Cookies</h4>
                <br />
                <p>Consent: On your first visit, a cookie banner allows you to accept or manage non-essential cookies. You may change your consent preferences any time via our settings panel.</p>
                <p>Browser Controls: Adjust your browser settings to block or delete cookies. Refer to your browser help section for precise instructions.</p>
                <p>Opt-Out: Some analytics and marketing cookies can be opted out via industry opt-out tools.</p>
                <br />
                <h4>Your Choices</h4>
                <br />
                <p>You can accept, refuse, or customize cookie settings upon visiting.</p>
                <p>Most browsers let you manage cookies via preferences.</p>
                <p>For detailed instructions, refer to the “Help” section of your browser.</p>
                <br />

                <h4>Changes to This Cookie Policy</h4>
                <br />
                <p>We may update our Cookie Policy to reflect new practices, regulatory requirements, or improvements. Changes will be posted on this page with an updated effective date.</p>
                <br />
                <h4>Contact Us</h4>
                <br />
                <h6>If you have questions, concerns, or requests regarding your personal data or this policy, please contact us at:</h6>
                <br />
                <h6>AP&A SYSTEM</h6>
                <br />
                <p>Email: contact@apasystemllp.com</p>

                <p>Phone: +91 9006016444</p>

                <p>Address: AP&A SYSTEM, C/o Shri Chandrakant Kumar, Tajvag Pokhra, Hajipur, Vaishali, Bihar-844101</p>

                <br />

            </div>
        </div>
    )
}

export default page
