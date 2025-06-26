import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { addToCartApiCall } from "../APIs/bookSaleingApi";
import { SliderComponent } from "./SliderComponent";
import hook from "../redux/reduxHook";

export const SingleBookViewComponent = () => {
  const location = useLocation();
  const { book } = location.state || {};
  const [bookCount, setBookCount] = useState(1);
   const [showMessage, setShowMessage] = useState(false);

  const { cartDataLoading, cartSuccessData, cartErrorData, addBookToCart } =
    hook.useAddToCartHook();

  const { bookType } = useParams();

  const bookCountFunction = (count) => {
    if (count >= 1) setBookCount(count);
  };

  const addToCartFunction = () => {
    const bookDetail = {
      title: book.title,
      cover: book.cover_i,
      price: 30,
      count: bookCount,
    };

    addBookToCart(bookDetail);
  };
  console.log(cartSuccessData);
  console.log(cartErrorData);
  useEffect(()=>{
    if(cartSuccessData.message == 'book added to Cart successfully.'){
 setShowMessage(true);

    // Hide after 3 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 1500);
    }
  },[cartSuccessData])

  return (
    <>
      <div className="grid grid-cols-2 place-items-center gap-0 mt-25 mx-50">
        <img
          className="h-[250px]"
          src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
          alt={book.title}
        />
        <div className="m-0 p-0 capitalize">
          <h1 className="text-lg">{book.title}</h1>
          <span className=" block text-sm mt-2">{book.author_name}</span>
          <span className="block text-sm mt-2">Avilability : 4</span>
          <span className="block text-sm my-15">$30</span>

          <button className="grid grid-cols-2 place-items-center bg-black text-white my-2 w-20">
            <span className="grid grid-row-2 w-1/2 p-2">
              <small onClick={() => bookCountFunction(bookCount - 1)}>-</small>
              <small onClick={() => bookCountFunction(bookCount + 1)}>+</small>
            </span>
            <span className="w-1/2 p-1 ">{bookCount}</span>
          </button>
          <div className="grid grid-cols-2 gap-1 place-items-center">
              <button
                    className="bg-black text-white py-2 px-5 "
                    onClick={() => {
                      addToCartFunction();
                    }}
                  >
                  
                               {cartErrorData != null ? (
            
                <div role="status" className="inline">
                    <div className='animate-ping py-1 px-5  ' style={{'fontSize':'10px'}}> Loading... 
    </div>
                </div>
           
            ) : (
              <>
                Add To Cart
              </>
            )}
                  </button>
          
            <Link to={`/addToCart/${book}`}>
              <button className="bg-black text-white py-2 px-5">
                Checkout
              </button>
            </Link>
       
              {showMessage  ? (
                <small className="mt-15 -ml-30 absolute">Added !</small>
                ) : (
                  ""
                )}
          </div>
        </div>
      </div>
      <div className="mx-50 mt-25">
        <span className="border-1 border-gray-400 px-5 py-1 ">Description</span>
        <span className="border-1 border-gray-400 px-5 py-1">Reviews</span>
        <span className="border-1 border-gray-400 px-5 py-1">Comments</span>
        <div className="block border-1 border-gray-400 p-5 mt-1">
          <p className="text-gray-800 text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            deleniti est dignissimos odit at. Dolorem iure quo in corrupti!
            Accusantium praesentium pariatur debitis laboriosam nam
            necessitatibus ea unde porro asperiores!
          </p>
        </div>
      </div>

      <div className="mx-50 mt-25">
        <SliderComponent bookType={bookType} slide={"horizontal"} />
      </div>
    </>
  );
};
