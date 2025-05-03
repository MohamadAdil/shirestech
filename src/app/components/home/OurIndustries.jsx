'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaAudioDescription } from 'react-icons/fa';

const OurIndustries = () => {
  const industries = [
    {
      title: 'Cutting Edge Solutions',
      description:'We leverage the newest technologies and innovative approaches to bring your ideas to life in a form of strong digital experiences.',
      img: '/images/industries-img/img-1.png',
    },
    {
      title: 'Professional Team',
      description:'Our professional team includes experienced web designers, developers, and marketers who are dedicated to providing results and going above your expectations.',
      img: '/images/industries-img/img-2.png',
    },
    {
      title: 'Personalized Approach',
      description:'We dont work on a cookie-cutter basis. Each project is built based on your objectives, brand image, and target audience.',
      img: '/images/industries-img/img-3.png',
    },
    {
      title: 'Successful Record',
      description:'From startups to enterprises, we’ve helped businesses grow with measurable improvements in traffic, engagement, and conversions.',
      img: '/images/industries-img/img-4.png',
    },
  ];

  return (
    <motion.section
      className="OurIndustries"
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
          <span className="hd-border-line center">Why Shires Tech?</span>
          <h2>Your Digital Growth Partner</h2>
        </motion.div>

        <div className="industries-card-wrap">
          <div className="row">
            {industries.map((item, index) => (
              <motion.div
                className="col-md-3 col-6 mb-md-0 mb-5"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: false }}
              >
                <div className="industries-card-item">
                  <div className="industries-card-img">
                    <Image
                      src={item.img}
                      width={34}
                      height={34}
                      alt={item.title}
                      className="object-fit-contain"
                    />
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default OurIndustries;
