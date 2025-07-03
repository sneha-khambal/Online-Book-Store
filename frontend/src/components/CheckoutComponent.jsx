import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export const CheckoutComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [hideAddressBox, setHideAddressBox] = useState(false);

   const deliveryAddress = (
    <div className="grid grid-cols-6 gap-3">
      <input
        {...register("country", { required: "Country is required" })}
        type="text"
        className="col-span-6 border-2 border-gray-200 rounded shadow p-2 w-full mb-3"
        placeholder="Country"
      />
      <input
        {...register("firstName", { required: "First name is required" })}
        type="text"
        className="col-span-3 border-2 border-gray-200 rounded shadow p-2 w-full mb-3"
        placeholder="First Name"
      />
      <input
        {...register("lastName", { required: "Last name is required" })}
        type="text"
        className="col-span-3 border-2 border-gray-200 rounded shadow p-2 w-full mb-3"
        placeholder="Last Name"
      />
      <input
        {...register("address", { required: "Address is required" })}
        type="text"
        className="col-span-3 border-2 border-gray-200 rounded shadow p-2 w-full mb-3"
        placeholder="Address"
      />
      <input
        {...register("apartment", { required: "Apartment is required" })}
        type="text"
        className="col-span-3 border-2 border-gray-200 rounded shadow p-2 w-full mb-3"
        placeholder="Apartment"
      />
      <input
        {...register("city", { required: "City is required" })}
        type="text"
        className="col-span-2 border-2 border-gray-200 rounded shadow p-2 w-full mb-3"
        placeholder="City"
      />
      <input
        {...register("state", { required: "State is required" })}
        type="text"
        className="col-span-2 border-2 border-gray-200 rounded shadow p-2 w-full mb-3"
        placeholder="State"
      />
      <input
        {...register("pinCode", { required: "PIN code is required" })}
        type="text"
        className="col-span-2 border-2 border-gray-200 rounded shadow p-2 w-full mb-3"
        placeholder="PIN Code"
      />
    </div>
  );

  const onSubmitFunction = (data) => {
    alert("Form submitted");
    console.log("Submitted Data:", data);
    const address = {
      country:data.country,
      firstname: data.firstName,
      lastname: data.lastName,
      city:data.city,
      apartment:data.apartment,
      state: data.state,
      pinCode:data.pinCode
    };
    
    const checkout = 
      {
        email: data.email,
    
        firstBillingAddress:data.billingOption == 'same' ?address :'',
    
        secondBillingAddress: data.billingOption == 'different' ?address :'',
    
        shippingMethod: data.shippingMethod,
    
        paymentMethod:data.shippingMethod,
      } 
      console.log(checkout)
   
  };

 

  return (
    <div className="grid lg:grid-cols-2 mx-10 my-10 gap-10">
      <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit(onSubmitFunction)}>
        <h1 className="text-2xl font-medium">Contact</h1>

        <input
          {...register("email", { required: "Email is required" })}
          type="email" 
          className="border-2 border-gray-200 rounded shadow p-2 w-full"
          placeholder="Email Address"
        />
        {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}

        <div>
          <input type="checkbox" {...register("subscribe")} id="emailBox" />
          <label htmlFor="emailBox" className="ml-2">
            Email me with news and offers
          </label>
        </div>

        <h2 className="text-2xl font-medium mt-4">Delivery</h2>
        {deliveryAddress}

        <div>
          <input type="checkbox" {...register("saveAddress")} id="addressBox" />
          <label htmlFor="addressBox" className="ml-2">
            Save this information for next time
          </label>
        </div>

        <h2 className="text-xl font-medium mt-4">Shipping Method</h2>
        <input
          {...register("shippingMethod", { required: true })}
          type="text"
          placeholder="e.g., International Shipping"
          className="border-2 border-gray-200 rounded shadow p-2 w-full"
        />

        <h2 className="text-2xl font-medium mt-4">Payment</h2>
        <small className="text-gray-500">All transactions are secure and encrypted.</small>
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
              <input type="radio" value="same" {...register("billingOption")} defaultChecked />
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

            {hideAddressBox && <div className="mt-5">{deliveryAddress}</div>}
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
        <h1 className="lg:hidden mb-10 text-center font-medium text-xl">Order Summary</h1>
        <div className="grid grid-cols-2 gap-5 text-lg mb-5">
          <small className="text-left flex gap-2">
            <img
              src="https://covers.openlibrary.org/b/id/12605605-M.jpg"
              alt="img"
              className="h-15 w-10"
            />
            title
          </small>
          <small className="text-right">Rs. 34</small>
        </div>
        <div className="grid grid-cols-2 text-lg mb-5">
          <small className="text-left">Subtotal</small>
          <small className="text-right">Rs. 34</small>
        </div>
        <div className="grid grid-cols-2 text-lg mb-5">
          <small className="text-left">Shipping</small>
          <small className="text-right">Rs. 34</small>
        </div>
        <div className="grid grid-cols-2 text-xl mb-5">
          <strong className="text-left">Total</strong>
          <strong className="text-right">Rs. 68</strong>
        </div>
      </div>
    </div>
  );
};
