import React from 'react'
import SolutionCont from './SolutionCont'

export default function CardTwo() {
  return (
    <>
        <div className="k xl:px-24 xl:py-28 bg-mGrey/20">
            <div className="xl:px-40">
                <h1 className="text-5xl font-light leading-[64px] text-darkBlue">Why choose Easybank?</h1>
                <div className="my-4">
                  <p className="font-light text-mGrey">We leverage Open Banking to leverage your bank account into a financial hub.</p>
                  <p className="font-light text-mGrey">Control your finances like never before.</p>
                </div>
                <SolutionCont />
            </div>  
        </div>
    </>
  )
}
