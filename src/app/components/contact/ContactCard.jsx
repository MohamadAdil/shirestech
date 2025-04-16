import React from 'react';
import Link from 'next/link';

const ContactCard = ({ imgSrc, altText, label, linkText, linkHref }) => {
  return (
    <div className="contact-card">
      <div className="CnCardImg">
        {imgSrc}
      </div>
      <div className="CnCardText">
        <span>{label}:</span>
        {linkHref ? (
          <Link href={linkHref}>
            {linkText}
          </Link>
        ) : (
          <span>{linkText}</span>
        )}
      </div>
    </div>
  );
};

export default ContactCard;
