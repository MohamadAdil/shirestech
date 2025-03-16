"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const servicesDetails = {
  "web-development": {
    title: "Web Development",
    description: "We build modern, scalable web applications.",
    image: "/images/web-development.jpg",
  },
  "responsive-design": {
    title: "Responsive Design",
    description: "Your website will look great on any device.",
    image: "/images/responsive-design.jpg",
  },
  "ecommerce-solutions": {
    title: "E-Commerce Solutions",
    description: "We provide secure and scalable e-commerce platforms.",
    image: "/images/ecommerce-solutions.jpg",
  },
  "cyber-security": {
    title: "Cyber Security",
    description: "Advanced security solutions to protect your digital assets.",
    image: "/images/cyber-security.jpg",
  },
  "ui-ux-design": {
    title: "UI/UX Design",
    description: "Create stunning and user-friendly interfaces.",
    image: "/images/ui-ux-design.jpg",
  },
  "web-hosting": {
    title: "Web Hosting",
    description: "Reliable and secure hosting solutions.",
    image: "/images/web-hosting.jpg",
  },
};

type ServiceKey = keyof typeof servicesDetails;

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const [service, setService] = useState<(typeof servicesDetails)[ServiceKey] | null>(null);

  useEffect(() => {
    if (slug && typeof slug === "string" && slug in servicesDetails) {
      setService(servicesDetails[slug as ServiceKey]);
    }
  }, [slug]);

  if (!service) {
    return <p>Loading...</p>;
  }

  return (
    <section className="service-detail-page secpd">
      <div className="container">
        <h2>{service.title}</h2>
        <Image src={service.image} alt={service.title} width={600} height={400} />
        <p>{service.description}</p>
        <Link href="/services" className="BtnMain">Back to Services</Link>
      </div>
    </section>
  );
};

export default ServiceDetailPage;
