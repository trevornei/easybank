import React from 'react'
import ReqDemoBtn from '../buttons/ReqDemoBtn'
import HeroAssets from './HeroAssets'

export default function Hero() {
  return (
    <>
        <div className="xl:pt-40 xl:pb-28 xl:px-40 flex flex-row max-w-screen max-h-[676px] bg-mGrey/10">
            <div className="flex flex-col items-start justify-center h-auto text-left max-w-96 xl:ml-28">
                <h1 className="text-6xl xl:font-semibold leading-[64px] text-darkBlue">Next generation</h1>
                <h1 className="text-6xl xl:font-semibold leading-[64px] text-darkBlue">digital banking</h1>
                <p className="my-4 xl:font-semibold xl:text-lg text-mGrey">Take your financial life online. Your Easybank account <br></br> will be a one-stop-shop for spending, saving, <br></br> budgeting, investing, and much more.</p>
                <ReqDemoBtn />
            </div>
        <HeroAssets />
        </div>
    </>
  )
}
