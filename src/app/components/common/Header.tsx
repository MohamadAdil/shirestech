"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const headerData = {
    "logo": "/images/logo.svg",
    "menu": [
      { "title": "Home", "url": "/", "id": "home" },
      { "title": "About Us", "url": "#about", "id": "about" },
      { "title": "Services", "url": "/services.php", "id": "services" },
      { "title": "Case Studies", "url": "#case-studies", "id": "case-studies" },
      { "title": "Blog", "url": "#blog", "id": "blog" },
      { "title": "Contact Us", "url": "/contact.php", "id": "contact" }
    ]
  };

  return (
    <header className="siteheader">
      <nav className="navbar navbar-expand-sm navbar-light bg-white">
        <div className="container">
          <Link className="navbar-brand" href="/">
            <Image src={headerData.logo} alt="Shires Tech logo" width={150} height={50} />
          </Link>
          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <Menu size={24} />
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarsExample03">
            <ul className="navbar-nav ms-auto">
              {headerData.menu.map((item, index) => (
                <li key={index} className="nav-item">
                  <Link className="nav-link" href={item.url} id={item.id}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
