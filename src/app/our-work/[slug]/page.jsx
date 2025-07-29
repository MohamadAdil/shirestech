'use client';

import { useParams, notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import InnerHero from '../../components/common/sections/InnerHero'; // Adjust path if needed

const articles = [
  {
    slug: 'how-custom-websites-are-shaping-modern-brands',
    title: 'How Custom Websites Are Shaping Modern Brands',
    description: 'Explore how tailor-made websites are redefining digital branding in 2025.',
    imageSrc: '/images/custom-websites.webp',
    imageAlt: 'Custom website design example',
    category: 'Web Development',
    date: 'July 25, 2025',
    author: 'Team Shires',
  },
  {
    slug: 'ai-in-web-development-2025',
    title: 'AI in Web Development 2025',
    description: 'How AI is revolutionizing the future of frontend and backend development.',
    imageSrc: '/images/ai-web-dev.webp',
    imageAlt: 'AI illustration in web development',
    category: 'AI & Tech',
    date: 'July 10, 2025',
    author: 'Shires Insights',
  },
  // Add more articles as needed
];

export default function ArticleDetail() {
  const { slug } = useParams();

  const article = articles.find((a) => a.slug === slug);

  if (!article) return notFound();

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <InnerHero
          title={article.title}
          description={article.description}
          imageSrc={article.imageSrc}
          imageAlt='Article visual' // ✅ fallback alt
        />
      </motion.div>

      <div className="container py-5">
        <p><strong>Category:</strong> {article.category}</p>
        <p><strong>Date:</strong> {article.date}</p>
        <p><strong>Author:</strong> {article.author}</p>
        <div className="mt-4 text-lg">
          {article.description}
        </div>
      </div>
    </div>
  );
}
