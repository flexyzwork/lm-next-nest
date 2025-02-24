import Link from 'next/link';
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="footer">
      <p>&copy; {currentYear} FLEXYZ. All Rights Reserved.</p>
      <div className="footer__links">
        {['About', 'Privacy Policy', 'Licensing', 'Contact'].map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase().replace(' ', '-')}`}
            className="footer__link"
            scroll={false}
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
