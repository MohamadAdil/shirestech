'use client';

import { motion } from 'framer-motion';
import InnerHero from '../components/common/sections/InnerHero';
import FormSc from '../components/contact/FormSc';

export default function ContactUs() {
  return (
    <div>
      {/* Scroll-triggered animation for InnerHero */}
      <motion.div
        className="contact-page"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }} // Animation triggered every time the element is in view
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.2 }} // Triggers every time the element comes into the viewport
      >
        <InnerHero
          title="Get In Touch With Us"
          description="We revolutionizing digital engagement with the world's first hyperrealistic, interactive AI platforms. From livestreaming to customer service, we're redefining human-AI interaction across industries."
          imageSrc="/images/contact-img/hero-img.png"
          imageAlt="AI Technology"
        />
      </motion.div>

      {/* FormSc is outside the motion.div */}
      <FormSc />
    </div>
  );
}
