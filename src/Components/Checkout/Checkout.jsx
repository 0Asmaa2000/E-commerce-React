import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import Regisrer from './../Regisrer/Regisrer';
import { UserContext } from '../../Context/UserContext';
import { CartContext } from '../../Context/CartContext';


export default function Checkout() { 
let {checkOut}=useContext(CartContext)
let {cardId}=useContext(CartContext)

let formik = useFormik({
  initialValues: {
    details: "",
    phone: "",
    city: "",
  },
  onSubmit:()=>handleCheckout(cardId,'http://localhost:5173'),
     });

     

   async function handleCheckout(cartId,url) { 
 let {data} = await  checkOut(cartId,url,formik.values);
//  console.log(data.session.url);
 window.location.href=data.session.url
 
 

 
  }



  return (
<>


<div className='py-2'>
<h1 className='text-center  mt-40'>CheckOut Now</h1>
  <form className="max-w-md mx-auto my-40" onSubmit={formik.handleSubmit}>
      <div className="relative z-0 w-full mb-5 group" >
      <input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange}  value={formik.values.details} name="details" id="details" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />

<label htmlFor="details" className="left-0 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-emraled-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your details</label>

      </div>
      
      <div className="relative z-0 w-full mb-5 group" >
      <input type="tel" onBlur={formik.handleBlur} onChange={formik.handleChange}  value={formik.values.phone} name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />

<label htmlFor="phone" className="left-0 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-emraled-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" aria-autocomplete='new-phone'>Enter Your phone</label>
{formik.errors.phone&&formik.touched.phone?<div className='text-red-700 text-sm mb-3 p-2 text-center'>{formik.errors.phone}</div>:null}
      </div>
      <div className="relative z-0 w-full mb-5 group" >
      <input type="text" onBlur={formik.handleBlur} onChange={formik.handleChange}  value={formik.values.city} name="city" id="city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />

<label htmlFor="city" className="left-0 peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-emraled-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" aria-autocomplete='new-city'>Enter Your city</label>
{formik.errors.city&&formik.touched.city?<div className='text-red-700 text-sm mb-3 p-2 text-center'>{formik.errors.city}</div>:null}
      </div>
      <div className='flex items-center gap-4'>

      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Check</button>


      </div>


  </form>
  
</div>

  </>
  

  )
}
