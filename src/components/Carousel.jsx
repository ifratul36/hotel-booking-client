// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import Slide from './Slide'

import bgimg1 from '../assets/bg1.jpg'
import bgimg2 from '../assets/bg2.jpg'
import bgimg3 from '../assets/bg3.jpg'


export default function Carousel() {
  return (
    <div className='container px-6 py-10 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper'
      >
        <SwiperSlide>
          <Slide
            image={bgimg1}
            text='EXPERIENCE LUXURY AND COMFORT AT ITS BEST'
            text2='Discover the perfect blend of elegance and tranquility in our beautifully designed rooms. Book your stay with us today and elevate your travel experience.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg2}
            text='UNWIND IN COMFORT AND STYLE AT OUR LUXURIOUS HOTEL RETREAT'
            text2='Relax in style with our modern amenities, personalized service, and breathtaking views. Whether it’s a vacation or a business trip, we’ve got you covered.'
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg3}
            text='YOUR DREAM STAY AWAITS IN THE HEART OF LUXURY AND SERENITY'
            text2='Our well-appointed rooms are crafted to provide you with a restful and memorable experience. Let us be your home away from home.'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
