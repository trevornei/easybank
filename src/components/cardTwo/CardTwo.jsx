import React from 'react'
import SolutionCont from './SolutionCont'

export default function CardTwo() {
  return (
    <>
        <div className="flex items-center justify-center xl:px-auto xl:py-28 bg-cyan-50/10">
            <div className="xl:px-40 ">
                <h1 className="text-5xl xl:font-semibold leading-[64px] text-darkBlue">Why choose Easybank?</h1>
                <div className="my-4 xl:mb-16">
                  <p className="xl:font-semibold xl:text-lg text-mGrey">We leverage Open Banking to leverage your bank account into a financial hub.</p>
                  <p className="xl:font-semibold xl:text-lg text-mGrey">Control your finances like never before.</p>
                </div>
                <SolutionCont />
            </div>  
        </div>
    </>
  )
}
