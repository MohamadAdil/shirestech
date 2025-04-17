import Image from 'next/image';

const RevCard = ({ title, paragraphs, imageSrc, imageAlt, reverse }) => {
  return (
    <div className="RevCard">
      <div className="row">
        <div className={`md-mb-0 mb-3 col-md-6 ${reverse ? 'order-md-2' : ''}`}>
          <div className="RevText">
            <h2>{title}</h2>
            {paragraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
        </div>
        <div className={`col-md-6 ${reverse ? 'order-md-1' : ''}`}>
          <div className="RevImg">
            <Image
              src={imageSrc}
              width={613}
              height={352}
              alt={imageAlt}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevCard;
