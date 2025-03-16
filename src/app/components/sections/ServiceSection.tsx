"use client";

import { Code, Smartphone, ShoppingCart, ArrowRight } from "lucide-react";
import Link from "next/link";

const servicesData = [
  { icon: <Code size={32} />, title: "Web Development", description: "Custom web solutions with modern technologies.", link: "/services/web-development" },
  { icon: <Smartphone size={32} />, title: "Responsive Design", description: "Optimized for all devices.", link: "/services/responsive-design" },
  { icon: <ShoppingCart size={32} />, title: "E-Commerce Solutions", description: "Secure online stores.", link: "/services/ecommerce-solutions" }
];

const ServiceSection = () => {
  return (
    <section className="our-services secpd">
      <div className="container">
        <div className="top-wrap">
          <div className="text-wrap">
            <h6>What We Do</h6>
            <h2>Our Services</h2>
          </div>
        </div>
        <div className="row">
          {servicesData.map((service, index) => (
            <div className="col-lg-4" key={index}>
              <div className="service-card">
                <div className="service-card-icon">{service.icon}</div>
                <div className="service-card-text">
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                  <div className="button-wrap">
                    <Link href={service.link} className="flex items-center gap-2 text-blue-600 hover:underline">
                      Learn More <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="button-wrap mt-4 text-center">
          <Link href="/services" className="BtnMain">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
