import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import hook from "../redux/reduxHook";

export const CheckoutComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [finalTotal, setFinalTotal] = useState(0);

  const {
        saveCheckoutDataLoading,saveCheckoutData,saveCheckoutDataError,saveCheckoutFunction
    } = hook.useCheckoutHook();
     const {
        getCartLoading,
        getCartSuccessData,
        getCartErrorData,
        fetchCartData,
      } = hook.useGetCartHook();
     
      
      useEffect(()=>{fetchCartData()},[])
        useEffect(() => {
          if (getCartSuccessData?.Cart != undefined) {
            const total = getCartSuccessData.Cart.reduce((acc, book) => {
              return acc + book.total;
            }, 0);
            setFinalTotal(total);
          }
        }, [getCartSuccessData]);

  const [hideAddressBox, setHideAddressBox] = useState(false);

  const DeliveryAddressForm = ({ prefix, register }) => (
    <div className="grid grid-cols-6 gap-3">
      <input
        {...register(`${prefix}.country`, { required: "Country is required" })}
        type="text"
        className="col-span-6 border-2 border-gray-200 rounded shadow p-2 w-full mb-3"
        placeholder="Country"
      />
      <input
        {...register(`${prefix}.firstName`, {
          required: "First name is required",
        })}
        type="text"
        className="col-span-3 border-2 border-gray-200 rounded shadow p-2 w-full mb-3"
        placeholder="First Name"
      />
      <input
        {...register(`${prefix}.lastName`, {
          required: "Last name is required",
        })}
        type="text"
        className="col-span-3 border-2 border-gray-200 rounded shadow p-2 w-full mb-3"
        placeholder="Last Name"
      />
      <input
        {...register(`${prefix}.address`, { required: "Address is required" })}
        type="text"
        className="col-span-3 border-2 border-gray-200 rounded shadow p-2 w-full mb-3"
        placeholder="Address"
      />
      <input
        {...register(`${prefix}.apartment` )}
        type="text"
        className="col-span-3 border-2 border-gray-200 rounded shadow p-2 w-full mb-3"
        placeholder="Apartment"
      />
      <input
        {...register(`${prefix}.city`, { required: "City is required" })}
        type="text"
        className="col-span-2 border-2 border-gray-200 rounded shadow p-2 w-full mb-3"
        placeholder="City"
      />
      <input
        {...register(`${prefix}.state`, { required: "State is required" })}
        type="text"
        className="col-span-2 border-2 border-gray-200 rounded shadow p-2 w-full mb-3"
        placeholder="State"
      />
      <input
        {...register(`${prefix}.pinCode`, { required: "PIN code is required" })}
        type="text"
        className="col-span-2 border-2 border-gray-200 rounded shadow p-2 w-full mb-3"
        placeholder="PIN Code"
      />
    </div>
  );

  const onSubmitFunction = (data) => {
    console.log("Submitted Data:", data);
const formData = new FormData();
 
      formData.append('email', data.email)
      formData.append('shippingAddress',  JSON.stringify(data.shipping))
      formData.append('billingAddress',  JSON.stringify(data.billing))
      formData.append('paymentMethod', data.paymentMethod)
      formData.append('billingOption', data.billingOption)
     formData.append ('emailbox', data.emailbox)
      formData.append('saveAddress', data.saveAddress)
    
      if(data.email !== ''){
    saveCheckoutFunction(formData)}
  };

  return (
    <div className="grid lg:grid-cols-2 mx-10 my-10 gap-10">
      <form
        className="grid grid-cols-1 gap-4"
        onSubmit={handleSubmit(onSubmitFunction)}
      >
        <h1 className="text-2xl font-medium">Contact</h1>

        <input
          {...register("email", { required: "Email is required" })}
          type="email"
          className="border-2 border-gray-200 rounded shadow p-2 w-full"
          placeholder="Email Address"
        />
        {errors.email && (
          <p className="text-red-600 text-sm">{errors.email.message}</p>
        )}

        <div>
          <input type="checkbox" {...register("emailbox")} id="emailBox" />
          <label htmlFor="emailBox" className="ml-2">
            Email me with news and offers
          </label>
        </div>

        <h2 className="text-2xl font-medium mt-4">Delivery</h2>
        <DeliveryAddressForm prefix={"shipping"} register={register} />

        <div>
          <input type="checkbox" {...register("saveAddress")} id="addressBox" />
          <label htmlFor="addressBox" className="ml-2">
            Save this information for next time
          </label>
        </div>

        {/* <h2 className="text-xl font-medium mt-4">Shipping Method</h2>
        <input
          {...register("shippingMethod", { required: true })}
          type="text"
          placeholder="e.g., International Shipping"
          className="border-2 border-gray-200 rounded shadow p-2 w-full"
        /> */}

        <h2 className="text-2xl font-medium mt-4">Payment</h2>
        <small className="text-gray-500">
          All transactions are secure and encrypted.
        </small>
        <input
          {...register("paymentMethod")}
          type="text"
          defaultValue="Cash on Delivery (COD)"
          className="border-2 border-gray-200 rounded shadow p-2 w-full"
        />

        <h2 className="text-xl font-medium mt-4">Billing Address</h2>
        <div className="border-2 border-gray-200 rounded shadow p-3">
          <div className="py-2">
            <label>
              <input
                type="radio"
                value="same"
                {...register("billingOption")}
                defaultChecked
              />
              <span className="ml-2">Same as shipping address</span>
            </label>
          </div>
          <div className="border-t border-gray-200 py-2">
            <label>
              <input
                type="radio"
                value="different"
                {...register("billingOption")}
                onClick={() => setHideAddressBox(!hideAddressBox)}
              />
              <span className="ml-2">Use a different billing address</span>
            </label>

            {hideAddressBox && (
              <div className="mt-5">
                {" "}
                <DeliveryAddressForm prefix={"billing"} register={register} />
              </div>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 bg-orange-400 text-white py-2 px-5 rounded shadow text-center"
        >
          Complete Order
        </button>
      </form>

      <div>
        <h1 className="lg:hidden mb-10 text-center font-medium text-xl">
          Order Summary
        </h1>
       
            {getCartSuccessData != undefined &&  getCartSuccessData.Cart != undefined && getCartSuccessData.Cart.map((book, i) => (
        <div className="grid grid-cols-2 gap-5 text-lg mb-5">
                 <small className="text-left flex gap-2">
                  
                  { book.count > 1 ?<small className="bg-gray-500 transparent text-white text-sm text-center  absolute
                  ml-7 -mt-2 rounded-full w-5 h-5">{ book.count}</small> :'' }
            <img
              src={`https://covers.openlibrary.org/b/id/${book.bookCover}-M.jpg`}
                          alt={book.title}
              className="h-15 w-10"
            />
            {book.title}
          </small>
          <small className="text-right">{book.total}</small>
        </div>
            ))}
        <div className="grid grid-cols-2 text-lg mb-5">
          <small className="text-left">Subtotal</small>
          <small className="text-right">Rs. {finalTotal}</small>
        </div>
        <div className="grid grid-cols-2 text-lg mb-5">
          <small className="text-left">Shipping</small>
          <small className="text-right">Rs. {finalTotal}</small>
        </div>
        <div className="grid grid-cols-2 text-xl mb-5">
          <strong className="text-left">Total</strong>
          <strong className="text-right">Rs. {finalTotal}</strong>
        </div>
      </div>
    </div>
  );
};
