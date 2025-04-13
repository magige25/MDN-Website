import React from "react";
import { Link } from "react-router-dom";

const Policy = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white py-20 pt-24" id="privacy-policy">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Privacy Policy</h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
          Effective Date: <strong>{currentDate}</strong>
        </p>
        <div className="space-y-8">
          <h3 className="text-2xl font-bold">1. Information We Collect</h3>
          <p className="text-gray-600 dark:text-gray-400">
            We collect personal information, such as your name, email address, phone number, and other data
            voluntarily provided to us. We may also collect automatically generated information like IP addresses,
            browsing behavior, and device information.
          </p>

          <h3 className="text-2xl font-bold">2. How We Use Your Information</h3>
          <p className="text-gray-600 dark:text-gray-400">
            We use your information to respond to inquiries, deliver services, enhance user experience, and provide
            customer support. We may also use your data for marketing and communication purposes if you have opted in.
          </p>

          <h3 className="text-2xl font-bold">3. Cookies and Tracking Technologies</h3>
          <p className="text-gray-600 dark:text-gray-400">
            We use cookies to collect information about your interactions with our website. These help us improve
            user experience and analyze traffic patterns. You can disable cookies via your browser settings, but this
            may impact the functionality of our website.
          </p>

          <h3 className="text-2xl font-bold">4. Data Security</h3>
          <p className="text-gray-600 dark:text-gray-400">
            We use encryption, firewalls, and other security measures to protect your personal data from unauthorized
            access. However, we cannot guarantee complete security as no system is infallible.
          </p>

          <h3 className="text-2xl font-bold">5. Your Rights</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Depending on your location, you may have rights to access, modify, or delete your personal data. You can
            contact us for any requests regarding your data.
          </p>

          <h3 className="text-2xl font-bold">6. Third-Party Links</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Our website may contain links to third-party websites. We are not responsible for their content or privacy
            practices. We recommend reviewing their privacy policies before submitting personal data.
          </p>

          <h3 className="text-2xl font-bold">7. Changes to This Privacy Policy</h3>
          <p className="text-gray-600 dark:text-gray-400">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the
            effective date will be updated accordingly.
          </p>

          <h3 className="text-2xl font-bold">8. Contact Us</h3>
          <p className="text-gray-600 dark:text-gray-400">
            If you have any questions about this Privacy Policy or how we handle your data, please contact us at:
          </p>
          <ul className="text-gray-600 dark:text-gray-400">
            <li>Email: 
              <Link 
                to="mailto:davidmagige1998@gmail.com" 
                className="text-[#601eef] hover:text-[#3a12c3] hover:underline"
              >
                <strong>davidmagige1998@gmail.com</strong>
              </Link>
            </li>
            <li>Phone: 
              <Link 
                to="tel:+254746771924" 
                className="text-[#601eef] hover:text-[#3a12c3] hover:underline"
              >
                <strong>+254746771924</strong>
              </Link>
            </li>
            <li>Address: Waiyaki Way, Nairobi-Kenya</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Policy;