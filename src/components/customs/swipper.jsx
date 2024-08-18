import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

export default ({slideArray}) => {
  return (
    <Swiper
      slidesPerView={"auto"}
      loop={true}
      spaceBetween={20}
      centeredSlides={true}
      autoplay={{
        delay: 1500,
        // disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {
        slideArray.map((item,index) => (
          <SwiperSlide key={index} className='cursor-grab w-auto open:cursor-grabbing max-w-[250px]'>
            <div className='flex flex-col py-4 justify-center items-center bg-white rounded-lg shadow-md'>
              <img src={item.img} alt={item.name} loading='lazy' className='w-full aspect-square p-5 object-contain' />
              <span className='text-2xl text-gray-500 font-semibold'>{item.name}</span>
            </div>
            </SwiperSlide>
        ))
      }
    </Swiper>
  );
};