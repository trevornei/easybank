import React from 'react'

export default function Article({ img, author, title, description }) {
  return (
    <div className="">
        <img src={img}/>
        <p className="">{author}</p>
        <h3 className="">{title}</h3>
        <p className=''>{description}</p>
    </div>
  )
}
