'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { IoMdMail } from 'react-icons/io';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="upper-ft">
        <div className="container">
          <div className="site-logo">
            <Link href="/">
              <Image
                src="/images/logo.svg"
                alt="Social Vision logo"
                width={150}
                height={100}
                priority
                className="object-fit-contain"
              />
            </Link>
          </div>
          <div className="cn-wrap">
            <div className="footer-description">
              <p>
              Shires Tech is your go-to partner for web development, digital marketing, and design solutions. We’re committed to helping businesses grow through innovative and reliable tech services. Let’s build your digital future together.
              </p>
              <div className="social-icon">
                <Link href="https://www.facebook.com" target="_blank">
                  <FaFacebook size={24} />
                </Link>
                <Link href="https://www.instagram.com" target="_blank">
                  <AiFillInstagram size={24} />
                </Link>
                <Link href="https://www.linkedin.com" target="_blank">
                  <FaLinkedin size={24} />
                </Link>
              </div>
            </div>
            <div className="quick-links">
              <h5>Quick Links</h5>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/services">Our Services</Link></li>
                <li><Link href="/about-us">About us</Link></li>
                <li><Link href="/our-work">OUR WORK</Link></li>
              </ul>
            </div>
            <div className="contact-us">
              <h5>Contact Us</h5>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhoneAlt size={20} />
                </div>
                <div>
                  <h6>Call Us:</h6>
                  <Link href="tel:+918816810512">
                    +91 88168 10512
                  </Link>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <IoMdMail size={20} />
                </div>
                <div>
                  <h6>Email Us:</h6>
                  <Link href="mailto:shirestech@yopmail.com">
                    shiresorg@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-ft">
        <div className="container">
          <p>©copyright 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
