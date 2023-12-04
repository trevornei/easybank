import React from 'react'
import ReqDemoBtn from '../buttons/ReqDemoBtn'
import HeroAssets from './HeroAssets'

export default function Hero() {
  return (
    <>
        <div className="flex flex-row max-w-screen max-h-[676px] border-4 border-darkBlue">
            <div className="flex flex-col items-center justify-center h-auto text-left max-w-96">
                <h1 className="text-3xl font-bold text-darkBlue">Next generation digital banking</h1>
                <p className="font-semibold text-mGrey">Take your financial life online. Your Easybank account <br></br> will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                <ReqDemoBtn />
            </div>
        <HeroAssets />
        </div>
    </>
  )
}
