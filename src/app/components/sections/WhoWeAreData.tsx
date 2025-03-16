"use client";

import Image from "next/image";
import Link from "next/link";

interface WhoWeAreProps {
  id: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  headline: string;
  description: string;
  features?: string[];
  buttonText?: string;
  buttonUrl?: string;
}

const WhoWeAreData = ({
  id,
  imageSrc,
  imageAlt,
  title,
  headline,
  description,
  features,
  buttonText,
  buttonUrl
}: WhoWeAreProps) => {
  return (
    <section className="who-we-are secpd" id={id}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="image-wrap">
              <Image src={imageSrc} alt={imageAlt} width={600} height={400} layout="responsive" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-wrap typography">
              <h6>{title}</h6>
              <h2>{headline}</h2>
              <p>{description}</p>
              {features && (
                <ul className="grid-li">
                  {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              )}
              {buttonText && buttonUrl && (
                <div className="button-wrap mt-4">
                  <Link href={buttonUrl} className="BtnMain">
                    {buttonText}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreData;
