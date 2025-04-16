'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { RiMenu3Fill } from "react-icons/ri";

export default function Header() {
  return (
    <motion.header
      className="site-header"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false }} // 🔁 allow it to animate every time it enters the view
    >
      <nav className="navbar navbar-expand-lg" aria-label="Fifth navbar example">
        <div className="container">
          <Link href="/" className="navbar-brand">
            <Image
              src="/images/logo.svg"
              alt="Social Vision logo"
              width={150}
              height={100}
              priority
              className="object-fit-contain"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample05"
            aria-controls="navbarsExample05"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <RiMenu3Fill size={30} />
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample05">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link href="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about-us" className="nav-link">
                  About us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="/services"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our Services
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link href="#" className="dropdown-item">
                      Website Design & Development
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="dropdown-item">
                      Digital Marketing & SEO
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="dropdown-item">
                      UI/UX Design
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link href="/our-work" className="nav-link">
                  Our Work
                </Link>
              </li>
            </ul>
            <div className="btn-wrap">
              <Link href="/contact-us" className="btn-main">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
