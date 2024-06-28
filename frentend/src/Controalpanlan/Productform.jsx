import React, { useState } from 'react';
import axios from 'axios';

function ProductForm() {
  const [product, setProduct] = useState({
    name: '',
    company: '',
    remark: '',
    reting: '',
    stock: '',
    price: '',
    imgpath:'',
    cutprice: '',
    off: '',
    description: '',
  });

  const handleChange = (e) =>{
    setProduct({...product,[e.target.name]:e.target.value})
  }
  


  const  submithendler = async (e) =>{
    e.preventDefault();
    await axios.post('http://localhost:5000/add',product) 
    console.log(product)
    alert("success add product")
  }

  return (
    <div className="max-w-md mx-auto mt-10">
      <form  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e)=>handleChange(e)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">
            Product Company
          </label>
          <input
            type="text"
            name="company"
            id="company"
            onChange={(e)=>handleChange(e)}

            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="remark">
            Product Remark
          </label>
          <input
            type="text"
            name="remark"
            id="remark"
            onChange={(e)=>handleChange(e)}

            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
            Product Rating
          </label>
          <input
            type="number"
            name="reting"
            id="reting"
            onChange={(e)=>handleChange(e)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="stock">
            Product Stock
          </label>
          <input
            type="number"
            name="stock"
            id="stock"
            onChange={(e)=>handleChange(e)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
            Price
          </label>
          <input
            type="number"
            name="price"
            id="price"
            onChange={(e)=>handleChange(e)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
          imgpath
          </label>
          <input
            type="file"
            name="imgpath"
            id="imgpath"
            onChange={(e)=>handleChange(e)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cutprice">
            Product Cut Price
          </label>
          <input
            type="number"
            name="cutprice"
            id="cutprice"
            onChange={(e)=>handleChange(e)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="off">
            Product Off
          </label>
          <input
            type="number"
            name="off"
            id="off"
            onChange={(e)=>handleChange(e)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            onChange={(e)=>handleChange(e)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            onClick={(event)=>{submithendler(event)}}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
