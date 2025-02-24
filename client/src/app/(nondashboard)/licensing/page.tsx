import React from "react";

const Licensing = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-customgreys-primarybg text-white-50 px-6 py-12">
      
      {/* Hero Section */}
      <div className="max-w-3xl text-center mb-12">
        <h1 className="text-4xl font-extrabold text-primary-700">Licensing Policy</h1>
        <p className="text-gray-300 mt-4 text-sm md:text-base">
          Understand our licensing terms and how you can use our products legally and responsibly.
        </p>
      </div>

      {/* Licensing Categories */}
      <div className="max-w-4xl bg-customgreys-secondarybg p-8 md:p-12 rounded-xl shadow-lg w-full">
        
        {/* 1. Open Source License */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-primary-700 mb-3">🆓 Open Source License</h2>
          <p className="text-sm text-gray-300">
            Certain parts of our software are released under open-source licenses such as:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-300 mt-3">
            <li>MIT License - Free for personal and commercial use</li>
            <li>Apache 2.0 - Allows modifications with attribution</li>
            <li>GNU GPL - Requires derivative works to remain open-source</li>
          </ul>
        </section>

        {/* 2. Commercial License */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-primary-700 mb-3">💼 Commercial License</h2>
          <p className="text-sm text-gray-300">
            Our commercial license grants businesses the right to use our software for enterprise applications, including:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-300 mt-3">
            <li>Priority support and security updates</li>
            <li>Access to premium features</li>
            <li>Custom integrations and scalability solutions</li>
          </ul>
        </section>

        {/* 3. Premium License */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-primary-700 mb-3">🌟 Premium License</h2>
          <p className="text-sm text-gray-300">
            Ideal for individuals and startups needing advanced features with minimal investment.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-300 mt-3">
            <li>Advanced analytics and insights</li>
            <li>Exclusive templates and add-ons</li>
            <li>Flexible pricing options</li>
          </ul>
        </section>

        {/* 4. Usage Restrictions */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-primary-700 mb-3">🚫 Usage Restrictions</h2>
          <p className="text-sm text-gray-300">
            To protect intellectual property and ensure fair use, the following restrictions apply:
          </p>
          <ul className="list-disc list-inside text-sm text-gray-300 mt-3">
            <li>No redistribution or resale without permission</li>
            <li>Compliance with applicable licensing terms</li>
            <li>No use for illegal or unethical activities</li>
          </ul>
        </section>

        {/* 5. Compliance & Contact */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-primary-700 mb-3">📜 Compliance & Contact</h2>
          <p className="text-sm text-gray-300">
            We adhere to global licensing standards. If you have any licensing inquiries, contact us at:
          </p>
          <p className="text-primary-700 font-semibold mt-3 text-sm">📧 licensing@example.com</p>
        </section>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-gray-400 text-xs">
        Last Updated: YYYY-MM-DD
      </footer>

    </div>
  );
};

export default Licensing;