import React from 'react'

export default function Article({ img, author, title, description }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white xl:w-full xl:h-full rounded-t-xl xl:mx-4">
        <img className='rounded-t-lg shadow-sm xl:h-auto xl:w-full h-52 shadow-darkBlue/20' src={img}/>
        <div className="items-center xl:px-2 justify-normal">
          <h3 className="">{title}</h3>
          <p className=''>{description}</p>
          <p className="font-semi text-darkBlue/40">By: {author}</p>
        </div>
    </div>
  )
}
