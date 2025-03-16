"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const footerData = {
    "logo": "/images/logo-white.svg",
    "description": "We specialize in helping individuals and families regain control of their financial future.",
    "navLinks": [
      { "title": "Home", "url": "/" },
      { "title": "About Us", "url": "/about-us.php" },
      { "title": "Services", "url": "/services.php" },
      { "title": "Blogs", "url": "/blogs.php" },
      { "title": "Contact Us", "url": "/contact.php" }
    ],
    "legalLinks": [
      { "title": "Privacy Policy", "url": "/privacy-policy.php" },
      { "title": "Terms of Services", "url": "/terms-services.php" }
    ],
    "socialLinks": [
      { "title": "Instagram", "url": "https://www.instagram.com/", "icon": <Instagram size={20} /> },
      { "title": "Facebook", "url": "https://www.facebook.com/", "icon": <Facebook size={20} /> },
      { "title": "Twitter", "url": "https://www.x.com/", "icon": <Twitter size={20} /> }
    ],
    "copyright": "© 2025 Shires Tech. All rights reserved.",
    "backgroundImage": "/images/footer-bg.png"
  };

  return (
    <footer className="SiteFooter text-white py-5" style={{ backgroundImage: `url(${footerData.backgroundImage})`, backgroundSize: "cover" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 first-col">
            <Link className="brand" href="/">
              <Image src={footerData.logo} alt="Shires Tech logo" width={150} height={50} />
            </Link>
            <p>{footerData.description}</p>
          </div>

          <div className="col-lg-2">
            <h5>About Company</h5>
            <ul className="NavList">
              {footerData.navLinks.map((item, index) => (
                <li key={index}>
                  <Link href={item.url}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-2">
            <h5>Legal Imprints</h5>
            <ul className="NavList">
              {footerData.legalLinks.map((item, index) => (
                <li key={index}>
                  <Link href={item.url}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-2">
            <h5>Follow Us</h5>
            <ul className="SocialIcon d-flex gap-3">
              {footerData.socialLinks.map((item, index) => (
                <li key={index}>
                  <Link href={item.url} aria-label={item.title} className="text-white">
                    {item.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="ftBottom text-center mt-4">
          <p>{footerData.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
