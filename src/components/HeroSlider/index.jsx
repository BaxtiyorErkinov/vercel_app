import React, { useRef } from 'react';
import Button from '../button/';

//slide
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Autoplay } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/effect-fade';
import 'swiper/scss/navigation';

//icons
import {
  FiChevronLeft,
  FiChevronRight,
} from 'react-icons/fi';

//styles
import './heroslider.scss';

const sliderItems = [
  {
    id: 1,
    title: 'SMART WEB DESIGN AGENCY',
    desc: 'WELCOME TO MEAPLY AGENCY',
    img: 'https://meipaly-nextjs.vercel.app/_next/static/images/1_2-7b9ab5a9968e0485e27e51341ab20669.jpg',
  },
  {
    id: 2,
    title: 'SMART WEB DESIGN AGENCY',
    desc: 'WELCOME TO MEAPLY AGENCY',
    img: 'https://meipaly-nextjs.vercel.app/_next/static/images/1_1-f90490d4ecf54e452f86f13824144d67.jpg',
  },
];

const HeroSlider = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <div className="hero__slider">
      <Swiper
        effect={'fade'}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        fadeEffect={{ crossFade: true }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl =
              navigationPrevRef.current;
            swiper.params.navigation.nextEl =
              navigationNextRef.current;
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        modules={[EffectFade, Navigation, Autoplay]}
        className="mySwiper">
        {sliderItems.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="slider__container">
              <img src={item.img} alt="" />
              <div className="content">
                <p className="title">{item.title}</p>
                <h1 className="desc">{item.desc}</h1>
                <Button text="DISCOVER MORE" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="actions">
        <button
          className="actions-btn"
          ref={navigationPrevRef}>
          <FiChevronLeft />
        </button>
        <button
          className="actions-btn"
          ref={navigationNextRef}>
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
};

export default HeroSlider;
