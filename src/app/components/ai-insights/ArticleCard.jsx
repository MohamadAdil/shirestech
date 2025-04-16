import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const ArticleCard = ({ imageSrc, category, date, author, title, description, link }) => {
  return (
    <div className="ArticleCard">
      <div className="ArticleCardImg">
        <Image
          src={imageSrc}
          alt={title}
          width={404}
          height={217}
        />
        <span className="BadgeCs">{category}</span>
      </div>
      <div className="ArticleCardCn">
        <span>{date} | {author}</span>
        <h4>{title}</h4>
        <p>{description}</p>
        <Link href={link}>
          Read More <FaArrowRight size={10} />
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
