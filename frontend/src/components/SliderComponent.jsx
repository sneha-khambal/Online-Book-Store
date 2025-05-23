import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // base styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import ChildrenBookComponent from './childrenBookComponent';
import useChildrenBooksHook from '../redux/reduxHook';


export const SliderComponent = ({bookType}) => {
         const {
    childrenBooksData,
    childrenBooksDataError,
    childrenBooksDataLoading,
    fetchChildrenBooks
 } = useChildrenBooksHook();
  useEffect(() => {
     console.log(bookType)
    fetchChildrenBooks(bookType);
   }, []);
  return (
  <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={30}
      slidesPerView={3}          // Show 3 books per view
      slidesPerGroup={3}        // Slide 3 books at a time
    >
      {childrenBooksData.map((book, index) => (
        <SwiperSlide key={index}>
  <div className=" flex flex-col gap-3 items-center justify-center relative group overflow-hidden">
         <div className='absolute inset-0 bg-white  -translate-y-full group-hover:opacity-50 group-hover:translate-y-0 transition-all duration-500'></div>

         <img className='h-[250px]' src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt="" srcset="" />
          <h5 > {book.title}</h5>
         <small>$20</small>
         
        </div> 
              </SwiperSlide>
      ))}
    </Swiper>
  )
}
