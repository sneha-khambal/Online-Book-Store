import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import hook from '../redux/reduxHook';
import { FaTrash } from "react-icons/fa";
import { deleteBookFromCartApiCall,deleteAllBooksFromCartApiCall} from '../APIs/bookSaleingApi';
import { useNavigate } from 'react-router-dom';


export const AddToCartComponent = () => {
    const {getCartLoading,getCartSuccessData,getCartErrorData,fetchCartData} = hook.useGetCartHook();
    const dispatch = useDispatch();
    const [bookDeletedId,setBookDeletedId] = useState(null);
    const [finalTotal,setFinalTotal] = useState(0);
    const navigate = useNavigate();

    useEffect(()=>{
        console.log(getCartLoading)
        if( getCartLoading == undefined || getCartLoading == true){
          fetchCartData()
        }
       

    },[ ])
   useEffect(()=>{
    if(getCartSuccessData?.Cart != undefined){
   const total = getCartSuccessData.Cart.reduce((acc,book)=>{
     return acc + book.total
    },0)
    setFinalTotal(total)
}
   },[getCartSuccessData])

    const deleteBookFunction = (id)=>{
        setBookDeletedId(id)
        deleteBookFromCartApiCall(id).then(
            (res)=>{
            console.log(res)
if(res.data.message == 'Book Deleted Successfully.')fetchCartData()
            }
        ).catch(
            (err)=>{console.log(err)}
        )
    }

       const deleteAllBooksFunction = ()=>{
        deleteAllBooksFromCartApiCall().then(
            (res)=>{
            console.log(res)
if(res.data.message == 'All Books Deleted Successfully.')fetchCartData()
            }
        ).catch(
            (err)=>{console.log(err)}
        )
    }
    
   
  return (
    <>
   
  {!getCartLoading && getCartSuccessData != undefined &&  getCartSuccessData.Cart != undefined && getCartSuccessData.Cart.length == 0  ?
          <div className=" transform translate-y-70  py-4 px-5 text-gray-500">
           <strong className='flex justify-center text-6xl' >Your cart is currently empty. </strong>
           <small className='block pt-2 pl-6 hover:text-blue-500 cursor-pointer' onClick={()=>{navigate('/')}}>Continue Shopping</small>
          </div>
            :
            <div class="relative overflow-y-hidden h-auto mx-10  my-50">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead class="text-xs text-gray-700 uppercase dark:text-gray-700 ">
            <tr >
                <th scope="col" class="px-6 py-3 text-center border-1 ">
                      Cover
                </th>
                <th scope="col" class="px-6 py-3 text-center border-1">
                    Title
                </th>
                <th scope="col" class="px-6 py-3 text-center border-1  ">
                    Price
                </th>
                <th scope="col" class="px-6 py-3 text-center border-1">
                    Count
                </th>
                 <th scope="col" class="px-6 py-3 text-center border-1">
                    Total
                </th>
                 <th scope="col" class="px-6 py-3 text-center border-1">
                    Remove
                </th>
            </tr>
        </thead>
        <tbody>
          {!getCartLoading && getCartSuccessData != undefined &&  getCartSuccessData.Cart != undefined && getCartSuccessData.Cart.length > 0  ?<>
           {getCartSuccessData.Cart.map((book,i)=>(
             <tr class="border-b border-gray-200 dark:border-gray-700 text-gray-700 " key={book._id}>
                <td scope="row" class="px-6 py-4 place-items-center border-1 ">
<img  src={`https://covers.openlibrary.org/b/id/${book.bookCover}-M.jpg`} className='h-20' alt={book.title} srcset="" />
                </td>
                <td class="px-6 py-4 text-center border-1">
                    {book.title}
                </td>
                <td class="px-6 py-4 text-center border-1  ">
                    {book.price}
                </td>
                <td class="px-6 py-4 text-center border-1">
                   {book.count}
                </td>
                 <td class="px-6 py-4 text-center border-1">
                    {book.total}
                </td>
                 <td class="px-6 py-4 place-items-center border-1">
                    {bookDeletedId == book._id ? 
                                          <div role="status">
  <svg aria-hidden="true" class={`w-8 h-8 text-gray-300 animate-spin fill-green-600`} viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg> 
</div>:
                  <FaTrash size={30}    className="text-red-500" onClick={()=>{deleteBookFunction(book._id)}} />   
}
 
    
                </td>
            </tr>
           ))}
          </>:
         <tr>
     
            <td colSpan="6" className="text-center py-4 text-gray-500">Loading...</td>
            
  
</tr>
          }
         
        </tbody>
    </table>
<div className='py-5 absolute '>
    <button className='bg-black text-white text-bold px-5 py-2 mr-5' onClick={()=>{navigate('/')}}>Continue Shipping</button>
    <button className='bg-black text-white text-bold px-5 py-2' onClick={()=>{deleteAllBooksFunction()}} >Clear Cart</button>
</div>

    <div className='ml-auto w-fit '>
        <h1 className='flex justify-end text-3xl py-5'>Cart Totals</h1>
         <div className='grid grid-rows-2 gap-2 mb-5'>
              <div className='grid grid-cols-2 gap-20 justify-around text-xl'><small  className="text-right">Sub Total </small> <small className="text-right"  >Rs. {finalTotal}</small></div>
        <div className='grid grid-cols-2 gap-20 justify-around text-xl' ><strong className="text-right">Total  </strong><strong  className="text-right">Rs. {finalTotal}</strong></div>
         </div>
    <button className='bg-yellow-500 text-white text-bold px-5 py-2 absolute right-0'>Checkout</button>
    </div>
      
</div>
            }


    </>
  )
}
