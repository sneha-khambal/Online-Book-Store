import React from 'react'

export const CheckoutComponent = () => {
  return (
    <div className='grid lg:grid-cols-2 m-25 lg:mx-80'> 
                 <form  action="" className='grid grid-cols-19 gap-2  '>
                     <h1 className='col-span-19 text-2xl mb-2 font-medium'>Contact</h1>

                <input type="text" name='email' id='name' className='col-span-19 border-2 border-gray-200 rounded shadow p-2 w-full mb-5  'placeholder='Email Address'/>
              
              <div className='col-span-19 -mt-5 '>
                <input type="checkbox" name="emailBox" id=""  />
              <label htmlFor="emailBox" > Email me with news and offers</label>
 </div> 
                <h1   className='  text-2xl col-span-19 mt-10 mb-2 font-medium'>Delivery</h1>

                <input type="text" name='country'  className='col-span-19 border-2 border-gray-200 rounded shadow p-2 w-full mb-5  'placeholder='Country'/>
               
                <input type="text" name='firstName' className=' col-span-9 border-2 border-gray-200 rounded shadow p-2 w-full mb-5 'placeholder='First Name'/>
                <input type="text" name='lastName' className=' col-span-10 border-2 border-gray-200 rounded shadow p-2 w-full mb-5'placeholder='Last Name'/>

                
                <input type="text" name='address' className='col-span-19 border-2 border-gray-200 rounded shadow p-2 w-full mb-5'placeholder='Address'/>
                <input type="text" name='apartment' className='col-span-19 border-2 border-gray-200 rounded shadow p-2 w-full mb-5'placeholder='Apartment'/>
                
                <input type="text"name='city' className='col-span-6 border-2 border-gray-200 rounded shadow p-2 w-full mb-5 'placeholder='City'/>
                <input type="text" name='state' className='col-span-6 border-2 border-gray-200 rounded shadow p-2 w-full mb-5'placeholder='State'/>
                <input type="text" name='pinCode' className='col-span-7 border-2 border-gray-200 rounded shadow p-2 w-full mb-5 'placeholder='PIN code'/>
<div className=' col-span-19 -mt-5'>
                 <input type="checkbox" name="" id="addressBox"/>    
                 <label htmlFor="addressBox" > Save this information for next time</label>

</div>
  <h1 className=' text-1xl col-span-19 mt-5 font-medium ' >Shipping method</h1>
                <input type="text" name="" id="" className=' col-span-19 border-2 border-gray-200 rounded shadow p-2 w-full'  placeholder='International Shipping'/>
                     <h1 className=' text-2xl col-span-19 mt-10 font-medium '>Payment</h1>
                <small className='col-span-19 text-gray-500'>All transactions are secure and encrypted.</small>
                <input type="text" className='col-span-19 border-2 border-gray-200 rounded shadow p-2 w-full ' placeholder='Cash on Delivery (COD)'/>
                <h1 className='col-span-19 text-1xl mt-4  font-medium' >Billing address</h1>
           <div  className='col-span-19 border-2 border-gray-200 rounded shadow p-2 w-full'>
                  <div className='py-2' >
                  <label htmlFor=""><input type="radio" className=' '  /> Same as shipping address </label>  
                 </div>
                    <div className='border-t-1  border-gray-200 py-2 '>
               <label htmlFor=""><input type="radio" className=''  /> Use a different billing address </label>  

                 </div>
           </div>
                <input type="button" value="Complete Order" className=' col-span-19 mt-10 text-center bg-orange-400  shadow rounded py-2 w-full px-5' />

                </form>

             
             <div className='lg:pl-20  md:mt-10 '>
                <div className="grid grid-cols-2 gap-5 justify-around text-lg mb-5">
                
                <small className=" text-left flex gap-2 "> <img src="https://covers.openlibrary.org/b/id/12605605-M.jpg" alt="img" className='text-left h-15 w-10' />title </small>
                <small className="text-right">Rs. 34</small>
              </div>
              <div className="grid grid-cols-2 justify-around text-lg mb-5">
                 <small className="text-left">Subtotal</small>
                <small className="text-right">Rs. 34</small>
              </div>
               <div className="grid grid-cols-2  justify-around text-lg mb-5">
                 <small className="text-left">Shipping </small>
                <small className="text-right">Rs. 34</small>
              </div>
                <div className="grid grid-cols-2 gap-20 justify-around text-xl mb-5">
                <strong className="text-left">Total </strong>
                <strong className="text-right">Rs. 34</strong>
              </div>
             </div>
   </div>
  )
}
