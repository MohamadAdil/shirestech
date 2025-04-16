'use client';

import { motion } from 'framer-motion';
import ArticleSc from "../components/ai-insights/ArticleSc";
import InnerHero from "../components/common/sections/InnerHero";

export default function OurWork() {
  return (
    <div>
      {/* Scroll-triggered animation for InnerHero */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }} // Animation triggered every time the element is in view
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false, amount: 0.2 }} // Triggers every time the element comes into the viewport
      >
        <InnerHero
          title="Crafted with Passion, Built for Results"
          description="Explore the projects that showcase our creativity, technical expertise, and commitment to delivering real impact. From websites to marketing campaigns, every piece of our work reflects our dedication to quality and innovation."
          imageSrc="/images/ai-insights/ai-hero-img.png"
          imageAlt="AI Technology"
        />
      </motion.div>

      {/* ArticleSc is outside the motion.div */}
      <ArticleSc />
    </div>
  );
}
