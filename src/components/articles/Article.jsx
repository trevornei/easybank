import React from 'react'

export default function Article({ img }) {
  return (
    <div className="">
        <img src={img}/>
        <h3 className="">Title</h3>
        <p className=''>Short article description. Short article description. Short article description. Short article description.</p>
    </div>
  )
}
