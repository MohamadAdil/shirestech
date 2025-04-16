'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const GrowTogether = () => {
  return (
    <motion.section
      className="GrowTogether"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="container">
        <motion.div
          className="GrowTogether-wrap"
          style={{ backgroundImage: 'url(/images/grow-bg.png)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <h2>Ready to Elevate Your Business?</h2>
          <p>
          Let’s create digital experiences that make an impact.
          </p>
          <Link href="/contact-us" className="btn-main">
          Contact Us Now
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GrowTogether;
