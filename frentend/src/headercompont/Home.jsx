import React, { useEffect, useState } from 'react'
import {addToCart} from "../redux//features/cartslice"
import { useDispatch } from 'react-redux'
// import toast from 'react-hot-toast';
import toast, { Toaster } from 'react-hot-toast';
import Caluser from './Caluser';
import SmallImage from '../componets/SmallImage';
 



function Home() {

  const [product,setproduct] = useState([])
  const dispatch   = useDispatch();



  // const notify = () => toast('Here is your toast.');

  useEffect(()=>{
    const fetchproduct  = async()=>{
      const  res = await fetch("https://fakestoreapi.com/products")
      const data =await res.json();
      setproduct(data)
    }
    fetchproduct()
  },  
[]
  )

  const addhendler = (product)=>{
    dispatch(addToCart(product))
    toast.success('Successfully Add items!')
  }
  

  return (
    <>
    <div >   
    <Caluser/>
    <SmallImage/>
    
    <div className='grid md:grid-cols-3 md:gap-16 grid-cols-1  md:mx-20 xl:mx-44  mx-6  md:my-12' >
      
      {
        product.map((data,index)=>{
            return(
              <div key={index} className="border p-4 rounded shadow-md">
                <img className='h-[230px] w-full mx-2 my-2 '  src={data.image} alt="" />
              <h2 className="text-xl font-bold">{data.title}</h2>
              <p className="text-gray-700">${data.price}</p>
              <span className='flex  gap-4 ' >
              <button onClick={()=>addhendler(data)}
                
                className="bg-blue-500 text-white px-2 py-2 rounded mt-2 hover:bg-blue-700" >
             
                <Toaster />
                Add to Cart
              </button>
              <button 
             className="bg-blue-500 text-white px-2 py-2 rounded mt-2 hover:bg-blue-700"
             
             >Viwe Detles</button>
              </span>
            </div>
            )
        })
      }
    </div>
    </div>
 
    </>
  )
}


export default Home