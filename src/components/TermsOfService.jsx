import React from "react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="bg-black dark:bg-white text-white dark:text-gray-900 py-20" id="terms-of-service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Terms of Service</h2>
        <p className="text-gray-400 dark:text-gray-600 text-center mb-4">
          Effective Date: <strong>{currentDate}</strong>
        </p>
        <div className="space-y-8">
          <h3 className="text-2xl font-bold">1. Introduction</h3>
          <p className="text-gray-400 dark:text-gray-600">
            Welcome to MDN Systems. These Terms of Service govern your use of our website, products, and services
            related to web development, software solutions, and data analysis. By accessing or using our services,
            you agree to be bound by these terms.
          </p>

          <h3 className="text-2xl font-bold">2. Use of Services</h3>
          <p className="text-gray-400 dark:text-gray-600">
            Our services are intended for lawful use only. You agree not to misuse our services, attempt unauthorized
            access, or engage in any activity that disrupts or interferes with their functionality.
          </p>

          <h3 className="text-2xl font-bold">3. User Responsibilities</h3>
          <p className="text-gray-400 dark:text-gray-600">
            You are responsible for providing accurate information when using our services. You must not use our services
            for fraudulent or harmful activities. We reserve the right to suspend access for violations.
          </p>

          <h3 className="text-2xl font-bold">4. Intellectual Property</h3>
          <p className="text-gray-400 dark:text-gray-600">
            All content, code, designs, and trademarks related to MDN Systems are our intellectual property.
            Unauthorized use or reproduction is strictly prohibited.
          </p>

          <h3 className="text-2xl font-bold">5. Limitation of Liability</h3>
          <p className="text-gray-400 dark:text-gray-600">
            MDN Systems shall not be held liable for any direct or indirect damages resulting from the use or
            inability to use our services. All services are provided "as is" without warranty.
          </p>

          <h3 className="text-2xl font-bold">6. Termination</h3>
          <p className="text-gray-400 dark:text-gray-600">
            We may terminate or restrict your access to our services at our sole discretion without notice if we
            determine a violation of these terms.
          </p>

          <h3 className="text-2xl font-bold">7. Changes to Terms</h3>
          <p className="text-gray-400 dark:text-gray-600">
            We may update these Terms of Service from time to time. Any changes will be posted here with a revised
            effective date. Continued use of our services after changes constitutes acceptance of the new terms.
          </p>

          <h3 className="text-2xl font-bold">8. Contact Information</h3>
          <p className="text-gray-400 dark:text-gray-600">
            For any questions about these Terms, please contact us:
          </p>
          <ul className="text-gray-400 dark:text-gray-600">
            <li>Email: <strong>davidmagige1998@gmail.com</strong></li>
            <li>Phone: <strong>+254746771924</strong></li>
            <li>Address: Waiyaki, Nairobi, Kenya</li>
          </ul>
        </div>       
      </div>
    </div>
  );
};

export default TermsOfService;