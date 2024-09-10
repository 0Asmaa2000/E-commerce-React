import React from 'react'
import style from './Woman.module.css'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
Link
export default function Men() {
  function getProduct(){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
   
     }
     let {data , isError,error,isLoading,isFetching} =useQuery({
       queryKey:['recentProduct'],
       queryFn:getProduct,
       staleTime:7000,
       gcTime:1000,
       select:(data)=>data.data.data.filter(product=>product.category.name=="Women's Fashion")       
     })
     if(isError){
       return <h3>{error}</h3>
     }
     
     if(isLoading){
       return <div className="spinner">
       <div className="bounce1"></div>
       <div className="bounce2"></div>
       <div className="bounce3"></div>
     </div>
     }
     

     return (
  
  <div className="row flex flex-wrap -mx-2 ">
  {data.map((product) => (
    <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-2 mb-4 mt-16">
      <div className="product p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md hover:scale-105 transition-transform duration-300 ease-in-out">
        <Link to={`/productdetails/${product.id}/${product.category.name}`} className="block">
          <img src={product.imageCover} className="w-full h-96 object-cover rounded-t-lg" alt={product.title} />
          <div className="collection flex  justify-between mt-4">
            <div className="collection2 mb-2">
              <h3 className="text-emerald-700 text-sm font-semibold">{product.category.name}</h3>
              <h3 className="text-slate-800 font-semibold text-sm">{product.title.split(' ').slice(0, 2).join(' ')}</h3>
            </div>
            <div className="button">
            <button className="  text-emerald-700 rounded-lg ">
            <i className="fa-solid fa-cart-shopping mr-2"></i>
          </button>
            </div>
          </div>
       
          <div className="flex justify-between items-center mt-2 text-sm">
              <span className="font-medium">{product.price} EGP</span>
              <span className="flex items-center">
                <i className="fas fa-star text-yellow-400 mr-1"></i>
                {product.ratingsAverage}
              </span>
            </div>
        </Link>
      </div>
    </div>
  ))}
</div>

     )  
}
