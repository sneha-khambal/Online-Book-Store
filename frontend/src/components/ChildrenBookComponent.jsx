import React, { useEffect, useState } from 'react';
import '../App.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchBooksData } from '../redux/actions';
import useChildrenBooksHook from '../redux/reduxHook';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'; // Font Awesome


export const ChildrenBookComponent = () => {
     const {
    childrenBooksData,
    childrenBooksDataError,
    childrenBooksDataLoading,
    fetchChildrenBooks
 } = useChildrenBooksHook();
 

  useEffect(() => {
   fetchChildrenBooks();
  }, []);

  useEffect(()=>{
    if(childrenBooksData){
      console.log(childrenBooksDataLoading == false && childrenBooksData.length > 0)
      console.log(childrenBooksData)
    }
  },[childrenBooksData])

  // btn click forword backword
  const[backBtn,setBackBtn] = useState(0);
  const[forwordBtn,setForwordBtn] = useState(6);
  const backfrowrdClick = (digit)=>{
    
  if(digit > 0 && digit < childrenBooksData.length){
       if(digit == forwordBtn){
      console.log('move forword')
      setBackBtn(forwordBtn)
      setForwordBtn(digit + forwordBtn)
      
     } else{
      console.log('move backword')
      setBackBtn(Math.abs(digit-backBtn))
      setForwordBtn(Math.abs(digit - forwordBtn))
     
     }
  }

     console.log(backBtn)
     console.log(forwordBtn)
      


  }

  return (
<>
   <div className='grid grid-cols-3 gap-5 p-10 '>
    
       {childrenBooksDataLoading == false && childrenBooksData.length > 0 ? childrenBooksData.slice(backBtn,forwordBtn)
    .sort((a, b) => a.title.localeCompare(b.title)).map((book,index)=>(
      
        
          <div className=" flex flex-col gap-3 items-center justify-center relative group overflow-hidden">
         <div className='absolute inset-0 bg-white  -translate-y-full group-hover:opacity-50 group-hover:translate-y-0 transition-all duration-500'></div>

         <img className='h-[250px]' src={`https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`} alt="" srcset="" />
          <h5 > {book.title}</h5>
         <small>$20</small>
         
        </div>
     
     
      )) :'no data'} 
     </div>
      <span className='flex gap-3'>
         <FaArrowLeft   onClick={()=>{backfrowrdClick(backBtn)}} />
      <FaArrowRight onClick={()=>{backfrowrdClick(forwordBtn)}}  />
      </span>
</>
  )
}
