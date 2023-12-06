import React from 'react'

export default function Article({ img, author, title, description }) {
  return (
    <div className="bg-white xl:w-80 rounded-t-xl">
        <img className='rounded-t-lg shadow-sm xl:h-auto xl:w-80 h-52 shadow-darkBlue/20' src={img}/>
        <div className="xl:p-6">
          <p className="">{author}</p>
          <h3 className="">{title}</h3>
          <p className=''>{description}</p>
        </div>
    </div>
  )
}
