import React from 'react'
import { useForm } from "react-hook-form";
import hook from '../redux/reduxHook';
import { useParams } from 'react-router-dom';

export const AccountPageComponent = () => {
      const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
const {type} = useParams();


  const {
        accountCreationData,accountCreationLoading,accountCreationError,fetchAccountCreationData
    } = hook.useAccountCreationHook();

  const onSubmitFunction =(data)=>{
    console.log(data) 
    const formData = new FormData();
    formData.append('email',data.email)
    formData.append('password',data.confirmPassword)
    formData.append('firstName',data.firstName)
    formData.append('lastName',data.lastName)

    if(data.password === data.confirmPassword)
    fetchAccountCreationData(formData);
  else
  console.log('password didnt matched')


  }
  console.log('type',type)

  return (
    
    <div className="grid grid-rows-2 place-items-center h-100 my-25">
        <h1  >{type == 'signUp' ? 'Create Acount' : 'Sign In'}</h1>

<form className="max-w-md mx-auto rounded shadow border-black p-5 m-0 p-0 "
style={{'width': '400px'}}
 onSubmit={handleSubmit(onSubmitFunction)}>
  <div className="relative z-0 w-full mb-5 group">
      <input
            {...register("email", { required: "Email is required" })}
            type="email"
            id="floating_email"
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required 
            style={{ color: 'black' }}
          /><label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input 
      {...register("password", { required: "password is required" })}
      type="password"  
       id="floating_password" style={{'color':'black'}}
       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
       placeholder=""
/> <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
   {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>}

  </div>
  {type == 'signUp' ? 
  <>
   <div className="relative z-0 w-full mb-5 group">
      <input 
      {...register("confirmPassword", { required: "confirm password is required" })}

      type="password"
        id="floating_repeat_password"
         style={{'color':'black'}} 
         className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
     {errors.confirmPassword && <p className="text-red-600 text-sm mt-1">{errors.confirmPassword.message}</p>}

  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
        <input
      {...register("firstName", { required: "first Name is required" })}

         type="text"
          id="floating_first_name" 
          style={{'color':'black'}}
           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
        <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
        {errors.firstName && <p className="text-red-600 text-sm mt-1">{errors.firstName.message}</p>}

    </div>
    <div className="relative z-0 w-full mb-5 group">

        <input type="text"
      {...register("lastName", { required: "last Name is required" })} 
       id="floating_last_name" 
       style={{'color':'black'}}
        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
        <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
           {errors.lastName && <p className="text-red-600 text-sm mt-1">{errors.lastName.message}</p>}

    </div>
  </div>
  </>
   : ''}

 
 
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
</div>
  )
}
