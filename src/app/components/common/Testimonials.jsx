'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import Image from 'next/image';
import { GiRoundStar } from 'react-icons/gi';

const testimonials = [
  {
    name: 'Amit Patel',
    image: '/images/testimonials-img/img-1.png', // Replace with your actual image path
    text: `Shires Tech delivered exactly what we needed — fast, clean, and professional.`,
  },
  {
    name: 'Neha Sharma',
    image: '/images/testimonials-img/img-2.png',
    text: `Their team transformed our online presence. We saw instant growth in traffic!`,
  },
  {
    name: 'Rahul Mehta',
    image: '/images/testimonials-img/img-3.png',
    text: `Excellent service and attention to detail. Highly recommend!`,
  },
  ,
  {
    name: 'Sneha Verma',
    image: '/images/testimonials-img/img-4.png',
    text: `Working with Shires Tech was a game-changer for our brand. They truly understand digital.`,
  },
];

export default function Testimonials() {
  return (
    <div className="w-full TestimonialsSlider ">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="Testimonials-card">
              <div className="user">
                <div className="user-img">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={81}
                    height={81}
                    className="object-fit-cover rounded-full"
                  />
                </div>
                <div>
                  <h6 className="">{item.name}</h6>
                  <div className="ra-star">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <GiRoundStar key={i} size={16} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="">{item.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
