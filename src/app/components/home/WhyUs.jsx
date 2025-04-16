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
          <h2>Powerful Services That Drive Results</h2>
          <p>
          We help businesses grow through smart design, development, and marketing strategies.
          </p>
        </motion.div>

        <div className="whyus-card">
          <div className="row">
            {[
              {
                title: 'Web Development',
                img: '/images/whyus-card-img/img-1.png',
                desc: 'Build modern, responsive websites tailored to your brand.From simple landing pages to complex platforms — we do it all.',
              },
              
              {
                title: 'Digital Marketing',
                img: '/images/whyus-card-img/img-2.png',
                desc: 'Reach your audience and boost engagement. SEO, social media, and targeted campaigns that convert.',
              },
              {
                title: 'UI/UX Design',
                img: '/images/whyus-card-img/img-3.png',
                desc: 'Crafting seamless and intuitive user experiences. Designs that not only look good but feel good to use.',
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
