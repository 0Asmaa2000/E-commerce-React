import React from 'react'
import style from './Product.module.css'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import useProducts from '../../Hooks/useProducts'
useProducts
export default function Product() {

//        function getProduct(){
//  return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)

//   }
  let {data , isError,error,isLoading,isFetching} =productInfo();

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
  
  // const [Products, setProducts] = useState([])
  // function getProducts(){
    
  //   axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
  //   .then((res)=>{setProducts(res.data.data);
  //   })
  //   .catch((res)=>{})
  // }
  // useEffect(()=>{
  //   getProducts()
  // },[]);
  return (
  <div className="row">
    {data?.data?.data.map((product)=>(
      <div key={product.id} className='w-1/6'>
    
<div  className="product p-2">
<Link to={`/productdetails/${product.id}/${product.category.name}`}>
<img src={product.imageCover} className='w-full' alt="" />
<h3 className='text-emerald-700 p-1'>{product.category.name}</h3>
<h3 className='text-slate-800 font-semibold mb-1'>{product.title.split(' ').slice(0,2).join(' ')}</h3>
<div className='flex justify-between p-1'>
<span>{product.price} EGP</span>
<span><i className='fas fa-star text-yellow-400'></i>{product.ratingsAverage} EGP</span>
</div>
</Link>

<button className='btn'>Add To Card</button>
</div>
    </div>))}
  </div> 
  )  

 
}
