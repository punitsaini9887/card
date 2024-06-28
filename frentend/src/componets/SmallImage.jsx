import React from 'react'

export default function SmallImage() {


    const Small = [
        {
            img:"images/offer.jpg",
            name:"Top Offers"
        },
        {
            img:"images/mobil.jpeg",
            name:"Moblis & Tablets"
        },
        {
            img:"images/tv.webp",
            name:"TV & Application"
        },
        {
            img:"images/laptop.jpeg",
            name:"Electronics"
        },
        {
            img:"images/fastion.jpg",
            name:"Fashion"
        },
        
        {
            img:"images/fastion.jpg",
            name:"dnjnkjd"
        },
        {
            img:"images/fastion.jpg",
            name:"dnjnkjd"
        },{
            img:"images/fastion.jpg",
            name:"dnjnkjd"
        },{
            img:"images/fastion.jpg",
            name:"dnjnkjd"
        },{
            img:"images/fastion.jpg",
            name:"dnjnkjd"
        },
    ]


  return (
    <>
        <div className='grid md:grid-cols-10 grid-cols-2 ' >
                {
                    Small.map((data,index)=>{
                        return (
                            <div key={index} className='flex justify-center items-center flex-col' >
                                <img  className='rounded-full md:w-[120px] w-[60px] h-[60px] md:h-[120px] ' src={data.img} alt="" />
                                <h1 className='' ><b>{data.name}</b></h1>
                            </div>
                        )
                    })
                }
        </div>

    </>
  )
}
