import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // base styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../App.css'

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import ChildrenBookComponent from './childrenBookComponent';
import useChildrenBooksHook from '../redux/reduxHook';


export const SliderComponent = ({bookType,slide}) => {
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

    // Chunk data into groups of 3
  const chunkArray = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const groupedBooks = chunkArray(childrenBooksData, 3);
  return (
    <>
    {slide == 'vertical'?
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={30}
      slidesPerView={1}       // One vertical group per slide
      slidesPerGroup={1}
    >
      {groupedBooks.map((group, idx) => (
        <SwiperSlide key={idx}>
          <div className="flex flex-col gap-6 p-4">
            { group && group.map((book, index) => (
              <div key={index} className="flex flex-col gap-2 items-center justify-center relative group overflow-hidden  ">
                <div className='absolute inset-0 bg-white  -translate-y-full group-hover:opacity-50 group-hover:translate-y-0 transition-all duration-500'></div>
                <img className='h-[200px]' src={`https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`} alt={book.title} />
                <h5 className="font-semibold text-center">{book.title}</h5>
                <small>$20</small>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>:
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

         <img className='h-[250px]' src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} alt={book.title}   />
          <h5 > {book.title}</h5>
         <small>$20</small>
         
        </div> 
              </SwiperSlide>
      ))}
    </Swiper>

    }

 
    </>
  )
}
