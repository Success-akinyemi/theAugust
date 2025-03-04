import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from '../assets/projects/1.png';
import slide_image_2 from '../assets/projects/2.jpg';
import slide_image_3 from '../assets/projects/3.jpg';
import slide_image_4 from '../assets/projects/4.jpg';
import slide_image_5 from '../assets/projects/5.png';
import slide_image_6 from '../assets/projects/6.jpg';
import slide_image_7 from '../assets/projects/2.jpg';


function Projects() {
  return (
    <div className="pad1 w-full bg-[#3E4149] flex items-center justify-center">

        <div className="flex flex-col mt-20 gap-8 mb-20 justify-center items-center w-[65%] tablet:w-[95%]">
            <h1 className="text-[#FF8F0F] text-[36px] font-extrabold">Projects</h1>

            <div className="container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
            <a href='https://www.google.com' target='_blank'>
                <img src={slide_image_1} alt="slide_image" />
            </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">

          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>

        </div>
      
    </div>
  )
}

export default Projects
