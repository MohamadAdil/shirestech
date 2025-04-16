import Image from "next/image";

const InnerHero = ({ title, description, imageSrc, imageAlt }) => {
  return (
    <div className="InnerHero" style={{ backgroundImage: 'url(/images/herobanner.png)' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="InnerHeroText">
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="InnerHeroImg">
              <Image
                src={imageSrc}
                width={500}
                height={550}
                alt={imageAlt}
                className="object-fit-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerHero;
