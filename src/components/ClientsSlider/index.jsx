import React from 'react';

//images
import Img1 from '../../assets/images/client1.png';
import Img2 from '../../assets/images/client2.png';
import Img3 from '../../assets/images/client3.png';
import Img4 from '../../assets/images/client4.png';
import Img5 from '../../assets/images/client5.png';

//slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, FreeMode } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/free-mode';

//styles
import './clientsSlider.scss';

const data = [
  { id: 1, img: Img1 },
  { id: 2, img: Img2 },
  { id: 3, img: Img3 },
  { id: 4, img: Img4 },
  { id: 5, img: Img5 },
];

const ClientsSlider = () => {
  return (
    <div className="clients__slider__container">
      <div className="clients__slider__title">
        <p className="title">OUR CLIENTS</p>
        <h1 className="subtitle">THEY TRUST US</h1>
        <p className="desc">
          We are committed to providing our customers with
          exceptional service while offering our employees
          the best training.
        </p>
      </div>
      <div className="slider">
        <Swiper
          slidesPerView={3}
          spaceBetween={40}
          freeMode={true}
          autoResize={true}
          pagination={{
            clickable: true,
            el: '.pagination-el',
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          modules={[Pagination, FreeMode]}
          breakpoints={{
            // when window width is >= 640px
            300: {
              slidesPerView: 1,
              spaceBetween: 50,
              slidesOffsetAfter: 520,
            },
            // when window width is <= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 50,
              slidesOffsetAfter: 768,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
              slidesOffsetAfter: 200,
            },
          }}
          className="mySwiper">
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="clients__item">
                <img src={item.img} alt="" />
                <div className="hover-el">
                  <span className="el"></span>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="pagination-el"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default ClientsSlider;
