import React,{useState} from 'react'
import { FaSearch } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux"



export default function Navbar() {

  const {carts} = useSelector((state)=>state.allcart)




    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
         <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 text-white text-xl font-bold">
            E-ecommerce
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">

               <h1 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"> <Link to="/" >Home</Link></h1>
               <h1  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"> <Link to="/man" >Man</Link> </h1>
                <h1 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"> <Link to="/children" > Children</Link></h1>
                <h1 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><Link to="/jevler" >Jevler</Link></h1>
                <h1 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"><Link to="/prdouct" > Add Prdouct</Link></h1>
                <span  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex " >
                <input  type="text" placeholder=' Search All product' className='rounded-l-sm'  />
                <span className='bg-[white] text-[black] p-2  text-[20px] ' >  <FaSearch /></span>
                </span>
                <samp className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" ><Link to="/cart" >
                <FaCartArrowDown className='text-[40px]'  />
                
            
                
                </Link>
                <span>items{carts.length}</span>
                </samp>
             </div>
            </div>
          </div>
        </div>  
      </div>

      <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <h1 className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"> <Link to="/" >Home</Link></h1>
          <h1 className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><Link to="/man" >Man</Link></h1>
          <h1 className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><Link to="/children" > Children</Link></h1>
          <h1 className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"><Link to="/jevler" >Jevler</Link></h1>
          <samp className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" ><Link to="/cart" >
                <FaCartArrowDown className='text-[40px]'  />
                <span>items:0</span>
                </Link>
                </samp>
        </div>
      </div>
    </nav>
    </div>
  )
}
