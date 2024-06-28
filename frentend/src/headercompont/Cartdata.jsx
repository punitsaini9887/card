import React,{useState,useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux"
import { MdDelete } from "react-icons/md";
import { removeToCart,removeSingleItem ,addToCart} from '../redux/features/cartslice';
import toast, { Toaster } from 'react-hot-toast';


export default function Cartdata() {
  
  const {carts} = useSelector((state)=>state.allcart)
  const dispatch   = useDispatch();
  const [totalquantity,setTotalQuantity] = useState(0);
  const [totalprice,setPrice] = useState(0);


  
//   const notify = () => toast('Here is your toast.');


const handleIncrement = (e)=>{
    dispatch(addToCart(e))
}


   const deletehendler = (e)=>{
      dispatch(removeToCart(e))
      toast.success('Successfully remove items!')
  }
  const total = ()=>{
    let totalprice = 0
    carts.map((ele,ind)=>{
        totalprice = ele.price * ele.qnty + totalprice
    });
    setPrice(totalprice)
}  


const handleSingleDecrement = (e)=>{
    dispatch(removeSingleItem(e))
}

  const countquantity = ()=>{
    let totalquantity = 0
    carts.map((ele,ind)=>{
        totalquantity = ele.qnty + totalquantity
    });
    setTotalQuantity(totalquantity)
}  
useEffect(()=>{
    total()
},[total])

useEffect(()=>{
    countquantity()
},[countquantity])


  return (
    <div>
<>
{
   <div className='row justify-content-center   m-0'>
   <div className='col-md-8 mt-5 mb-5 cardsdetails  '>
       <div className="card  ">
           <div className="card-header bg-dark p-3">
               <div className='card-header-flex'>
                   <h5 className='text-white m-0'>Cart Calculation{carts.length >0 ? `(${carts.length})`:""}</h5>
                   {
                       carts.length > 0 ? <button className='btn btn-danger mt-0 btn-sm'
                      
                       ><i className='fa fa-trash-alt mr-2'></i><span>EmptyCart</span></button>
                           : ""
                   }
               </div>

           </div>
           <div className="card-body p-0  ">
                   {
                       carts.length === 0 ? <table className='table cart-table mb-0'>
                           <tbody>
                               <tr>
                                   <td colSpan={6}>
                                       <div className='cart-empty'>
                                           <i className='fa fa-shopping-cart'></i>
                                           <img className='w-[1450px] p-6 flex justify-center items-center ' src="images/cartt.webp" alt="" />
                                           <p>Your Cart Is Empty</p>
                                       </div>
                                   </td>
                               </tr>
                           </tbody>
                       </table> :
                       <table className='table cart-table mb-0 table-responsive-sm w-[80%] border border-red-500'>
                           <thead  className='border border-red-500'>
                               <tr  >
                                   <th className='border border-red-500' >Action</th>
                                   <th className='border border-red-500' >Product</th>
                                   <th className='border border-red-500' >Name</th>
                                   <th className='border border-red-500' >Price</th>
                                   <th className='border border-red-500' >Qty</th>
                                   <th className='text-right border border-red-500'  > <span id="amount" className='amount'>Total Amount</span></th>
                               </tr>
                           </thead>
                           <tbody>
                               {
                                   carts.map((data,index)=>{
                                       return (
                                           < >
                                               <tr key={index}   >
                                                   <td className='border border-red-500' >
                                                       <button className='prdct-delete' 
                                                      > <MdDelete  onClick={()=>deletehendler(data.id)} /></button>
                                                          <Toaster />
                                                   </td>
                                               
                                                   <td className='border border-red-500  ' ><div className='product-img w-7 '><img src={data.image} alt="" /></div></td>
                                                   <td className='border border-red-500' ><div className='product-name'><p>{data.title}</p></div></td>
                                                   <td className='border border-red-500' >{data.price}</td>
                                                   <td className='border border-red-500' >
                                                       <div className="prdct-qty-container flex items-center justify-center  ">
                                                           <button className='prdct-qty-btn' type='button' 
                                                           onClick={data.qnty  <=1 ? ()=>deletehendler(data.id):()=>handleSingleDecrement(data)}
                                                           >
                                                               <i className='fa fa-minus  text-[30px] bg-slate-600 text-[white] '>-</i>
                                                           </button>
                                                           <input type="text" className='bg-slate-600 w-12 text-[white] ' value={data.qnty} disabled name="" id="" />
                                                           <button className='prdct-qty-btn' type='button' onClick={()=>handleIncrement(data)} >
                                                               <i className='fa fa-plus  text-[30px] bg-slate-600 text-[white]  '>+</i>
                                                           </button>
                                                       </div>
                                                   </td>
                                                   <td className='text-right border border-red-500' > ₹ { data.qnty * data.price} </td>
                                               </tr>
                                           </>
                                       )
                                   })
                               }
                           </tbody>
                           <tfoot>
                               <tr>
                                   <th>&nbsp;</th>
                                   <th colSpan={3}>&nbsp;</th>
                                   <th>Items In Cart <span className='ml-2 mr-2'>:</span><span className='text-danger'>{totalquantity}</span></th>
                                   <th className='text-right'>Total Price<span className='ml-2 mr-2'>:</span><span className='text-danger'>₹{totalprice} </span></th>
                               </tr>
                           </tfoot>
                       </table>
                   }
           </div>
       </div>
   </div>
</div>

}
</>



    </div>
  )
}
