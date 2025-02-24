import React from "react";

const PrivacyGuidelines = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-customgreys-primarybg text-white-50 px-6 py-12">
      
      {/* Hero Section */}
      <div className="max-w-3xl text-center mb-12">
        <h1 className="text-4xl font-extrabold text-primary-700">Privacy Policy Guidelines</h1>
        <p className="text-gray-300 mt-4 text-sm md:text-base">
          Our commitment to protecting user data and ensuring compliance with data privacy regulations.
        </p>
      </div>

      {/* Guidelines Section */}
      <div className="max-w-4xl bg-customgreys-secondarybg p-8 md:p-12 rounded-xl shadow-lg w-full">
        {/* 1. Data Collection */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-primary-700 mb-3">📌 Data Collection</h2>
          <p className="text-sm text-gray-300">
            We collect only the necessary personal information to provide and improve our services.  
            This includes:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-300 mt-3">
            <li>Name, Email, and Contact Details</li>
            <li>Usage Data and Preferences</li>
            <li>Device and IP Information</li>
          </ul>
        </section>

        {/* 2. Data Usage */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-primary-700 mb-3">🔍 How We Use Data</h2>
          <p className="text-sm text-gray-300">
            We use personal data solely for:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-300 mt-3">
            <li>Service Improvement and Personalization</li>
            <li>Security, Fraud Prevention, and Legal Compliance</li>
            <li>Communication and Customer Support</li>
          </ul>
        </section>

        {/* 3. Data Protection */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-primary-700 mb-3">🔒 Data Security</h2>
          <p className="text-sm text-gray-300">
            We implement industry-standard security measures to protect personal information, including:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-300 mt-3">
            <li>Encryption and Secure Data Storage</li>
            <li>Restricted Access and Authentication Controls</li>
            <li>Regular Security Audits</li>
          </ul>
        </section>

        {/* 4. User Rights */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-primary-700 mb-3">👤 User Rights</h2>
          <p className="text-sm text-gray-300">
            Users have full control over their personal data, including:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-300 mt-3">
            <li>Requesting Data Access or Modifications</li>
            <li>Withdrawing Consent for Data Processing</li>
            <li>Requesting Data Deletion</li>
          </ul>
        </section>

        {/* 5. Cookies & Tracking */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-primary-700 mb-3">🍪 Cookies & Tracking</h2>
          <p className="text-sm text-gray-300">
            Our website uses cookies to enhance the user experience. Users can manage cookie settings via their browser.
          </p>
        </section>

        {/* 6. Compliance & Contact */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-primary-700 mb-3">📜 Compliance & Contact</h2>
          <p className="text-sm text-gray-300">
            We comply with global data protection regulations, including GDPR and CCPA.  
            For inquiries, contact:
          </p>
          <p className="text-primary-700 font-semibold mt-3 text-sm">📧 privacy@example.com</p>
        </section>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-gray-400 text-xs">
        Last Updated: YYYY-MM-DD
      </footer>

    </div>
  );
};

export default PrivacyGuidelines;