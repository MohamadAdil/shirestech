import Head from "next/head";

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Shires Tech - Expert Web Development & Digital Solutions",
  description = "Shires Tech offers expert web development, custom website design, and tech solutions. Get responsive, SEO-friendly websites to grow your business today!",
  url = "http://shires.in/",
  image = "http://shires.in/og-image.jpg",
}) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Dynamic Title & Description */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Robots Meta Tag */}
      <meta name="robots" content="index, follow" />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Shires Tech" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:url" content={url} />

      {/* Additional Meta Tags */}
      <meta name="author" content="Adil Ansari" />
      <meta name="business" content="Shires Tech - Your Web Development Partner" />

      {/* Schema Markup (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Shires Tech",
            "url": url,
            "logo": "http://shires.in/logo.svg",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91 8727971368",
              "contactType": "Customer Service",
              "email": "adilansari8727@gmail.com"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Chandigarh",
              "addressLocality": "Chandigarh",
              "addressCountry": "IN"
            }
          }),
        }}
      />
    </Head>
  );
};

export default SEO;
