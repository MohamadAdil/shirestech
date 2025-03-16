"use client";

import Link from "next/link";

const HeroBanner = () => {
  const heroData = {
    "backgroundImage": "/images/hero-banner.webp",
    "title": "Welcome to Shires Tech",
    "headline": "Innovating <span>Solutions Across</span> Industries",
    "description": "We offer top-notch web development and design services at competitive prices, ensuring high-quality results tailored to your needs. Whether you're looking for a simple website or a complex web solution, our expert team delivers stunning, fully functional websites.",
    "buttonText": "Explore Our Services",
    "buttonUrl": "/services.php"
  };

  return (
    <section
      className="herobanner secpd text-white py-5"
      style={{
        backgroundImage: `url(${heroData.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="textwrap">
              <h6>{heroData.title}</h6>
              <h1 dangerouslySetInnerHTML={{ __html: heroData.headline }} />
              <p>{heroData.description}</p>
              <div className="ButtonWrap">
                <Link href={heroData.buttonUrl} className="BtnMain">
                  <button type="button" className="BtnMain">{heroData.buttonText}</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
