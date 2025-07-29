'use client';

import { motion } from 'framer-motion';
import ArticleSc from "../components/ai-insights/ArticleSc";
import InnerHero from "../components/common/sections/InnerHero";
import Image from 'next/image';
import GrowTogether from "../components/home/GrowTogether";
import OurTestimonials from "../components/home/OurTestimonials";
import WhyUs from "../components/home/WhyUs";
import SectionSc from "../components/services/SectionSc";

export default function AboutUs() {
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
          title="Driven by Innovation. Built for Impact."
          description="At Shires Tech, we don’t just create websites — we craft digital experiences. Our mission is to empower brands through smart tech, creative design, and results-focused strategies."
          imageSrc="/images/ai-insights/ai-hero-img.png"
          imageAlt="AI Technology"
        />
      </motion.div>
      {/*  */}
      <SectionSc />
      <WhyUs />
      <OurTestimonials />
      <GrowTogether />

    </div>
  );
}
