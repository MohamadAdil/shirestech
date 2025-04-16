'use client';

import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function LaunchPage() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    setMounted(true); // Ensure we render only after mounting (hydration-safe)

    const calculateTimeLeft = () => {
      const launchDate = new Date('2025-05-01T00:00:00');
      const now = new Date();
      const difference = launchDate - now;

      return difference > 0
        ? {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
        : { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null; // Wait for hydration to finish

  return (
    <>
      <Head>
        <title>We're Launching Soon!</title>
        <meta name="description" content="A new experience is coming. Get ready!" />
      </Head>

      <div
        className="d-flex align-items-center justify-content-center text-white"
        style={{
          height: '100vh',
          background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
          textAlign: 'center',
          flexDirection: 'column',
          padding: '20px',
        }}
      >
        <motion.h1
          className="display-3 fw-bold mb-3"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          🚀 We're Launching Soon!
        </motion.h1>

        <motion.p
          className="lead mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          A brand new experience is on the way. Stay tuned!
        </motion.p>

        <motion.div
          className="d-flex justify-content-center gap-3 mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
            <div key={unit} className="bg-dark px-3 py-2 rounded-3 shadow">
              <h2 className="mb-0">{timeLeft[unit]?.toString().padStart(2, '0')}</h2>
              <small className="text-uppercase">{unit}</small>
            </div>
          ))}
        </motion.div>

        <motion.form
          className="d-flex flex-column align-items-center justify-content-center mb-5 gap-2 w-100"
          style={{ maxWidth: 500 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <input type="email" className="form-control me-sm-2 mb-2 mb-sm-0" placeholder="Enter your email" required />
          <button className="btn btn-light text-primary fw-bold">Notify Me</button>
        </motion.form>

        <motion.p
          className="text-light small"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.5 }}
        >
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </motion.p>
      </div>
    </>
  );
}
