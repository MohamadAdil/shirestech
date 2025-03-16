"use client";

import { useParams } from "next/navigation";

const servicesDetails = {
  "web-development": {
    title: "Web Development",
    description: "We build modern, scalable web applications.",
    image: "/images/web-development.jpg"
  },
  "responsive-design": {
    title: "Responsive Design",
    description: "Your website will look great on any device.",
    image: "/images/responsive-design.jpg"
  },
  "ecommerce-solutions": {
    title: "E-Commerce Solutions",
    description: "We provide secure and scalable e-commerce platforms.",
    image: "/images/ecommerce-solutions.jpg"
  },
  "cyber-security": {
    title: "Cyber Security",
    description: "Advanced security solutions to protect your digital assets.",
    image: "/images/cyber-security.jpg"
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    description: "Create stunning and user-friendly interfaces.",
    image: "/images/ui-ux-design.jpg"
  },
  "web-hosting": {
    title: "Web Hosting",
    description: "Reliable and secure hosting solutions.",
    image: "/images/web-hosting.jpg"
  }
};

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = servicesDetails[slug as keyof typeof servicesDetails];

  if (!service) {
    return <p>Service not found</p>;
  }

  return (
    <section className="service-detail-page secpd">
      <div className="container">
        <h2>{service.title}</h2>
        <img src={service.image} alt={service.title} />
        <p>{service.description}</p>
        <a href="/services" className="BtnMain">Back to Services</a>
      </div>
    </section>
  );
};

export default ServiceDetailPage;
