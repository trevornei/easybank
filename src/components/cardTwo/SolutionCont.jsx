import React from 'react'

// SVG's
import BankingSymbol from '../../assets/svg/icon-online.svg'
import Budgeting from '../../assets/svg/icon-budgeting.svg'
import OnboardingSymbol from '../../assets/svg/icon-onboarding.svg'
import ApiSymbol from '../../assets/svg/icon-api.svg'

/*
Online Banking
Simple Budgeting
Fast Onboarding
Open API
*/


export default function SolutionInfo() {

  return (
    <>
        <div className="flex flex-row">
            {/*ONLINE BANKING */}
            <div className="flex flex-col items-center justify-center xl:w-64 xl:h-72 xl:mx-8">
              <img className='w-16 h-16' src={BankingSymbol}/>
              <div className="flex flex-col items-start justify-center">
                <h1 className="text-3xl font-normal text-left text-darkBlue whitespace-nowrap xl:pt-9 xl:pb-6">Online Banking</h1>
                <p className="text-left">
                Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.
                </p>
              </div>
            </div>
            {/*SIMPLE BUDGETING */}
            <div className="flex flex-col items-center justify-center xl:w-64 xl:h-72 xl:mx-8">
              <img className='w-16 h-16' src={Budgeting}/>
              <div className="flex flex-col items-start justify-center">
                <h1 className="text-3xl font-normal text-left text-darkBlue whitespace-nowrap xl:pt-9 xl:pb-6">Simple Budgeting</h1>
                <p className="text-left">
                See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.
                </p>
              </div>
            </div>
            {/*FAST ONBOARDING */}
            <div className="flex flex-col items-center justify-center xl:w-64 xl:h-72 xl:mx-8">
              <img className='w-16 h-16' src={OnboardingSymbol}/>
              <div className="flex flex-col items-start justify-center">
                <h1 className="text-3xl font-normal text-left text-darkBlue whitespace-nowrap xl:pt-9 xl:pb-6">Fast Onboarding</h1>
                <p className="text-left">
                We don’t do branches. Open your account in minutes online and start taking control of your finances right away.
                </p>
              </div>
            </div>
            {/*OPEN API */}
            <div className="flex flex-col items-center justify-center xl:w-64 xl:h-72 xl:mx-8">
              <img className='w-16 h-16' src={ApiSymbol}/>
              <div className="flex flex-col items-start justify-center">
                <h1 className="text-3xl font-normal text-left text-darkBlue whitespace-nowrap xl:pt-9 xl:pb-6">Open API</h1>
                <p className="text-left">
                We don’t do branches. Open your account in minutes online and start taking control of your finances right away.
                </p>
              </div>
            </div>
        </div>
    </>
  )
}
