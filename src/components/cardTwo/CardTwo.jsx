import React from 'react'
import SolutionCont from './SolutionCont'

export default function CardTwo() {
  return (
    <>
        <div className="flex items-center justify-center xl:px-auto xl:pt-44 xl:py-28 bg-gradient-to-b from-slate-50 to-darkBlue/10">
            <div className="flex flex-col xl:px-40">
                <div className="flex flex-row">
                  <h1 className="text-5xl xl:mx-8 xl:font-semibold leading-[64px] text-darkBlue z-0">Why choose</h1>
                  <span className='relative inline-block ring-eCash xl:-translate-x-12 whitespace-nowrap before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-gradient-to-br before:from-eCash before:to-yellow-300 before:blur-xl before:animate-pulse'>
                    <span className="text-5xl xl:mx-8 xl:font-semibold leading-[64px] text-darkBlue relative">Easybank?</span>
                  </span>
                </div>
                <div className="xl:my-8 xl:mb-16">
                  <p className="underline xl:mb-3 xl:mt-8 decoration-eCash underline-offset-8 xl:mx-8 xl:font-semibold xl:text-lg text-mGrey">We leverage Open Banking to leverage your bank account into a financial hub.</p>
                  <p className="underline xl:mx-8 decoration-eCash underline-offset-8 xl:font-semibold xl:text-lg text-mGrey">Control your finances like never before 😊 💵.</p>
                </div>
                <SolutionCont />
            </div>  
        </div>
    </>
  )
}
