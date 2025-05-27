import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // base styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../App.css';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import ChildrenBookComponent from './childrenBookComponent';
import useChildrenBooksHook from '../redux/reduxHook';
import { motion } from 'framer-motion';



export const SliderComponent = ({bookType,slide,bgImage}) => {
   const [activeIndex, setActiveIndex] = useState(0);

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
    <> {slide =='horizontal' 
    ?
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
    :
      <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={30}
      slidesPerView={1}          // Show 3 books per view
      slidesPerGroup={1}        // Slide 3 books at a time
      loop
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      style={{height:'-webkit-fill-available'}}
    >
      {bgImage.map((img, index) => (
        <SwiperSlide key={index} style={{height:'-webkit-fill-available'}}>
  <div className=" flex flex-col gap-3 items-center justify-center relative group overflow-hidden  " style={{height:'-webkit-fill-available'}}>

         <img className='w-full absolute object-cover'  src={img}      />
           <div className="absolute inset-0 bg-black/50"></div>

  {/* Optional text or content on top */}
  <div className="absolute inset-0 flex flex-col gap-0 items-center justify-center text-white text-xl font-bold m-auto h-[250px]">
   {activeIndex === index && (
                <>
                  <motion.h1
                    key={`h1-${index}`} // unique key to replay animation
                    initial={{ x: '-10vw' }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.3,type: 'spring', stiffness: 60, damping: 15 }}
                    className="text-5xl font-bold"
                  >
                    Do it <br /> Yourself
                  </motion.h1>

                  <motion.div
                    key={`fall-${index}`} // unique key to replay animation
                    initial={{ y: '-100vh', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{delay: 0.5, type: 'spring', stiffness: 60, damping: 12 }}
                    className="w-64 h-32 mt-10 text-white flex items-center justify-center rounded-xl shadow-lg"
                  >
                    <div className="grid grid-cols-2 grid-row-2 m-auto text-2xl text-white">
                      <div className="row-span-2 bg-yellow-500 rounded text-center m-auto p-3 ml-12">
                        -20%
                      </div>
                      <div className="row-span-2 ml-2">
                        <strike>80.00</strike>
                        <h4 className="text-orange-500">60.00</h4>
                      </div>
                      <a
                        href="http://"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="col-span-2 block w-30 mt-5 font-medium"
                      >
                        Shop Now
                      </a>
                    </div>
                  </motion.div>
                </>
              )}
  </div>


        </div> 
              </SwiperSlide>
      ))}
    </Swiper>
    }
    </>


    }

 
    </>
  )
}
