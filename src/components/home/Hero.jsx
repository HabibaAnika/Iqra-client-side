
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

function Hero() {
  
  return (
    <div className=''>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="banner-4.jpg" alt="banner-1" /></SwiperSlide>
        <SwiperSlide><img src="banner-3.jpg" alt="banner-2" /></SwiperSlide>
        <SwiperSlide><img src="banner-1.jpg" alt="banner-3" /></SwiperSlide>
        <SwiperSlide><img src="banner-2.jpg" alt="banner-4" /></SwiperSlide>
        
      </Swiper>
    </div>
  );
}

export default Hero;
