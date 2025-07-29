'use client';

import React from 'react';
import { motion } from 'framer-motion';  // Import motion from framer-motion
import ArticleCard from './ArticleCard';

const ArticleSc = () => {
  function slugify(text) {
    return text
      .toLowerCase()
      .replace(/\s+/g, '-')     // replace spaces with hyphens
      .replace(/[^\w-]+/g, ''); // remove all non-word characters except hyphen
  }

  const articles = [
    {
      imageSrc: '/images/ai-insights/articles/img-1.png',
      category: 'Web Development',
      date: '10 April 2025',
      author: 'Aarav Khanna',
      title: 'How Custom Websites Are Shaping Modern Brands',
      description: 'Discover why businesses are moving towards custom web development to create stronger digital identities.',
      link: `/our-work/${slugify('How Custom Websites Are Shaping Modern Brands')}`,
    },
    {
      imageSrc: '/images/ai-insights/articles/img-2.png',
      category: 'UI/UX Design',
      date: '08 April 2025',
      author: 'Meera Jain',
      title: '5 UX Trends That Will Define 2025',
      description: 'Explore the latest trends in UI/UX design and how they are reshaping user behavior and product interaction.',
      link: `/our-work/${slugify('5 UX Trends That Will Define 2025')}`,
    },
    {
      imageSrc: '/images/ai-insights/articles/img-3.png',
      category: 'Digital Marketing',
      date: '05 April 2025',
      author: 'Raj Singh',
      title: 'Boost Your SEO with These Proven Strategies',
      description: 'Simple yet powerful SEO strategies every business should implement to increase online visibility.',
      link: `/our-work/${slugify('Boost Your SEO with These Proven Strategies')}`,
    },
    {
      imageSrc: '/images/ai-insights/articles/img-4.png',
      category: 'Tech Insights',
      date: '02 April 2025',
      author: 'Simran Kaur',
      title: 'The Role of AI in Next-Gen Web Applications',
      description: 'A deep dive into how artificial intelligence is driving innovation in modern web app development.',
      link: `/our-work/${slugify('The Role of AI in Next-Gen Web Applications')}`,
    },
  ];


  return (
    <div className="ArticleSc">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }} // Triggers animation every time the element is in view
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.2 }} // Triggers each time element enters the viewport
        >
          Our latest Articles
        </motion.h2>
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="row g-4">
              {articles.map((article, index) => (
                <div key={index} className="col-md-6">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }} // Animation triggers each time element is in view
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: false, amount: 0.2 }}
                  >
                    <ArticleCard {...article} />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-4">
            <div className="ReportCardWrap">
              <h4>Our Reports</h4>
              <div>
                {articles.slice(0, 2).map((article, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }} // Animation triggers each time element is in view
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: false, amount: 0.2 }}
                  >
                    <ArticleCard
                      imageSrc={article.imageSrc}
                      category={article.category}
                      title={article.title}
                      link={article.link}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleSc;
