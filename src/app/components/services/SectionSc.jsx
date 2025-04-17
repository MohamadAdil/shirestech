import RevCard from "./RevCard";


export default function SectionSc() {
  return (
    <div className="SectionSc">
      <div className="container">
        <div className="RevCardWrap">
          <RevCard
            title="Revolutionizing Digital Marketing"
            paragraphs={[
              "Revolutionizing digital marketing means going beyond traditional strategies and embracing innovation to create meaningful, data-driven experiences for consumers.",
              "This transformation empowers brands to connect with their audiences on a deeper level, deliver hyper-relevant content, and achieve measurable results with greater efficiency."
            ]}
            imageSrc="/images/services-img/rev-card/img-1.png"
            imageAlt="Marketing Strategy"
          />

          <RevCard
            title="Why Digital Marketing Matters"
            paragraphs={[
              "Digital marketing matters because it connects businesses with their audiences where they spend most of their time—online. In today’s digital-first world, consumers research, interact with, and purchase from brands across various digital platforms",
              "Digital marketing not only enhances brand visibility and awareness but also allows for precise targeting, real-time engagement, and measurable results. Whether it’s through social media, search engines, email, or content marketing, it empowers businesses of all sizes to compete, grow, and build lasting relationships with their customers in a cost-effective and scalable way."
            ]}
            imageSrc="/images/services-img/rev-card/img-2.png"
            imageAlt="Why Digital Marketing Matters"
            reverse
          />
        </div>
      </div>
    </div>
  );
}
