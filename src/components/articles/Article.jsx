import React from 'react'

export default function Article({ img, author, title, description }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white xl:h-full xl:w-full rounded-t-xl xl:mx-4">
        <img className='w-64 h-48 rounded-t-lg shadow-darkBlue/20' src={img}/>
        <div className="items-center xl:p-2 xl:px-2 justify-normal">
          <p className="xl:p-2 font-semi text-darkBlue/40">By: {author}</p>
          <h3 className="xl:p-2 hover:text-eCash hover:delay-300 hover:transition-colors hover:ease-in-out">{title}</h3>
          <p className='xl:p-2 '>{description}</p>
        </div>
    </div>
  )
}
