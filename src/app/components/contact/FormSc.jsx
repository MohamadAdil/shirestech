'use client';

import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import ContactCard from './ContactCard';
import ContactForm from '../common/forms/ContactForm';
import { TiLocation } from "react-icons/ti";
import { IoMdMail } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa'; 

const FormSc = () => {
  return (
    <div className="FormSc">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }} // Animation triggered when element comes into view
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.2 }} // Ensures animation is triggered every time it's in view
              className='CnCardWrap'
            >
              <ContactCard
                imgSrc={<FaPhoneAlt size={20} />}
                altText="Phone Icon"
                label="Call Us"
                linkText="+1-76269 77694"
                linkHref="tel:+17626977694"
              />
              <ContactCard
                imgSrc={<IoMdMail size={20} />}
                altText="Email Icon"
                label="Email Us"
                linkText="example12321@gmail.com"
                linkHref="mailto:example12321@gmail.com"
              />
              <ContactCard
                imgSrc={<TiLocation size={20} />}
                altText="Location Icon"
                label="Our Location"
                linkText="2nd Floor, F-426, St. Sebastian Road Industrial Area, California, USA"
                linkHref={null}
              />
            </motion.div>
          </div>

          <div className="col-md-7">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }} // Animation triggered when element comes into view
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.2 }} // Ensures animation is triggered every time it's in view
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSc;
