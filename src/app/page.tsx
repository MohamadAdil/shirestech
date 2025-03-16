import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import HeroBanner from "./components/sections/HeroBanner";
import WhoWeAreData from "./components/sections/WhoWeAreData";
import ServiceSection from "./components/sections/ServiceSection";
import SEO from "./components/common/SEO";

export default function Home() {
  const visionData = {
    id: "vision",
    imageSrc: "/images/whoweare.webp",
    imageAlt: "Team brainstorming future technology innovations.",
    title: "Our Vision",
    headline: "Shaping the Future of Digital Innovation",
    description: "We aim to revolutionize industries with cutting-edge technologies and innovative digital solutions.",
    features: ["AI & Machine Learning", "Cloud Computing", "Blockchain Technology"],
    buttonText: "Discover More",
    buttonUrl: "/vision.php"
  };

  const aboutData = {
    id: "about",
    imageSrc: "/images/whoweare.webp",
    imageAlt: "Team collaborating on future technology innovations.",
    title: "Who We Are",
    headline: "Striving for Excellence in Technology",
    description: "Our expert teams provide top-tier solutions in web development, property management, and more.",
    features: ["User-Friendly Interface", "Secure Transactions", "Real-Time Analytics"],
    buttonText: "Learn More",
    buttonUrl: "/about-us.php"
  };

  return (
    <div>
       <SEO 
        title="Home | Shires Tech - Web Solutions" 
        description="We offer top-notch web development services to help your business grow."
        url="http://shires.in/"
      />
      <Header />
      <HeroBanner />
      <WhoWeAreData {...visionData} />
      <ServiceSection/>
      <WhoWeAreData {...aboutData} />
      <Footer />
    </div>
  );
}
