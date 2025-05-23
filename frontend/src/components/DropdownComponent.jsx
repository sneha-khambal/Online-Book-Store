import React, { useState } from 'react'
 import '../App.css';
 import { FaChevronDown } from 'react-icons/fa'; 

export const DropdownComponent = ({title,data}) => {
      const [currencyDropdown , setCurrencyDropdown] =useState(false);
  const [currencyType , setCurrencyType] = useState(title);
  console.log(currencyDropdown)

  return (
     <span className='group w-50 mr-5'>{currencyType}
      <button className='cursor m-2'   > <FaChevronDown size={10}  /></button>
      <ul id="CurrencyType" className="absolute w-35 mt-3 bg-white border-solid-gray rounded shadow-lg hidden opacity-0 group-hover:block group-hover:opacity-100  transition-opacity duration-200 z-10">
     {data && data.map((item,index)=>(
      <li className='hover:text-yellow-600 text-sm p-1' onClick={()=>{setCurrencyType(item)}} key={index}>{item}</li>

     ))}
     
    </ul>
     </span>
  )
}
