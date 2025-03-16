"use client";

import { Code, Smartphone, ShoppingCart, Shield, Paintbrush, Server } from "lucide-react";

const servicesData = [
  { id: "web-development", icon: <Code size={32} />, title: "Web Development", description: "Custom web solutions.", link: "/services/web-development" },
  { id: "responsive-design", icon: <Smartphone size={32} />, title: "Responsive Design", description: "Optimized for all devices.", link: "/services/responsive-design" },
  { id: "ecommerce-solutions", icon: <ShoppingCart size={32} />, title: "E-Commerce Solutions", description: "Secure online stores.", link: "/services/ecommerce-solutions" },
  { id: "cyber-security", icon: <Shield size={32} />, title: "Cyber Security", description: "Protect your data online.", link: "/services/cyber-security" },
  { id: "ui-ux-design", icon: <Paintbrush size={32} />, title: "UI/UX Design", description: "Modern and intuitive designs.", link: "/services/ui-ux-design" },
  { id: "web-hosting", icon: <Server size={32} />, title: "Web Hosting", description: "Reliable and secure hosting.", link: "/services/web-hosting" }
];

const ServicesPage = () => {
  return (
    <section className="services-page secpd">
      <div className="container">
        <h2>Our Services</h2>
        <div className="row">
          {servicesData.map((service) => (
            <div className="col-lg-4" key={service.id}>
              <div className="service-card">
                <div className="service-card-icon">{service.icon}</div>
                <div className="service-card-text">
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                  <a href={service.link} className="BtnMain">Learn More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
