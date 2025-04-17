import InnerHero from "../components/common/sections/InnerHero";
import GrowTogether from "../components/home/GrowTogether";
import OurTestimonials from "../components/home/OurTestimonials";
import WhyUs from "../components/home/WhyUs";
import SectionSc from "../components/services/SectionSc";

export default function Services() {
  return (
    <div>
      <InnerHero
        title="Digital Marketing"
        description="We revolutionizing digital engagement with the world's first hyperrealistic, interactive AI platforms. From livestreaming to customer service, we're redefining human-AI interaction across industries."
        imageSrc="/images/services-img/hero-img.png"
        imageAlt="AI Technology"
      />
      <SectionSc/>
      <WhyUs />
      <OurTestimonials />
      <GrowTogether />
    </div>
  );
}
