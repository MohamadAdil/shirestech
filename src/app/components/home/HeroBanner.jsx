"use client";

import Link from "next/link";
import BrandSlider from "./BrandSlider";
import { GiRoundStar } from "react-icons/gi";
import { motion } from "framer-motion";

export default function HeroBanner() {
  return (
    <motion.section
      className="HeroBanner"
      style={{ backgroundImage: 'url(/images/herobanner.png)' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }} // Triggers every time it enters view, adjust 'amount' as needed
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container">
        <motion.div
          className="heading-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1>Transforming Ideas into Digital Solutions</h1>
          <p>At Shires Tech, we combine innovation, creativity, and technology to bring your business vision to life. From website development to digital marketing, our services are designed to help you grow in the digital world.</p>
          <div className="button-wrap">
            <Link href="/contact-us" className="btn-main">Get Started Today</Link>
          </div>
        </motion.div>

        <motion.div
          className="review-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="ra-star">
            <GiRoundStar size={20} />
            <GiRoundStar size={20} />
            <GiRoundStar size={20} />
            <GiRoundStar size={20} />
            <GiRoundStar size={20} />
          </div>
          <p>4.9/5 From 3,602 Customers</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <BrandSlider />
        </motion.div>
      </div>
    </motion.section>
  );
}
