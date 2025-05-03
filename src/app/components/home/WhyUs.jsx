'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const WhyUs = () => {
  return (
    <motion.section
      className="WhyUs"
      style={{ backgroundImage: 'url(/images/whyus-bg.png)' }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="container">
        <motion.div
          className="heading-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <div className="hd-box">What We Offer</div>
          <h2>Effective Digital Services That Get Real Results</h2>
          <p>
          At Shires Tech, we put together clever design, up-to-date development, and results-based marketing to make businesses succeed online.
          </p>
        </motion.div>

        <div className="whyus-card">
          <div className="row">
            {[
              {
                title: 'Web Development',
                img: '/images/whyus-card-img/img-1.png',
                desc: 'Personalized Sites That Do the Job for You. We design quick, secure, and mobile-responsive websites customized to your business objectives. From simple landing pages to complex web applications, our development team makes sure your site runs smoothly on every device.',
              },
              
              {
                title: 'Digital Marketing',
                img: '/images/whyus-card-img/img-2.png',
                desc: 'Reach the Right Audience, Get Real Results. We develop and manage effective digital campaigns—including SEO, Google Ads, PPC, social media marketing, and content branding—that drive traffic and conversions.',
              },
              {
                title: 'UI/UX Design',
                img: '/images/whyus-card-img/img-3.png',
                desc: 'User-Centered Design That Inspires Action. We create intuitive interfaces and compelling user experiences through a design process that includes wireframes, high-fidelity mockups, responsive UI for web and mobile, and continuous user testing.',
              },
            ].map((item, index) => (
              <motion.div
                className="col-md-4 mb-md-0 mb-5"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: false }}
              >
                <div className="whyus-card-item">
                  <div className="whyus-card-img">
                    <Image
                      src={item.img}
                      width={38}
                      height={38}
                      alt={item.title}
                      className="object-fit-cover"
                    />
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="whyus-btm-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: false }}
        >
          Not sure what service is right for you?{' '}
          <Link href="/contact-us">Let’s Build Something Great</Link> and let’s figure it out.
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyUs;
