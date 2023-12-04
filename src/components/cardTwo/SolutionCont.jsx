import React from 'react'

// SVG's
import BankingSymbol from '../../assets/svg/icon-onboarding.svg'

export default function SolutionInfo() {

  return (
    <>
        <div className="flex flex-row">
            {/*ONLINE BANKING */}
            <div className="flex flex-col">
              <img src={BankingSymbol}/>
              <h1 className="">Online Banking</h1>
              <p className="">
              Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.
              </p>
            </div>
            {/*SIMPLE BUDGETING */}
            <div className="flex flex-col">
              <img src={BankingSymbol}/>
              <h1 className="">Online Banking</h1>
              <p className="">
              Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.
              </p>
            </div>
            {/*FAST ONBOARDING */}
            <div className="flex flex-col">
              <img src={BankingSymbol}/>
              <h1 className="">Online Banking</h1>
              <p className="">
              Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.
              </p>
            </div>
            {/*OPEN API */}
            <div className="flex flex-col">
              <img src={BankingSymbol}/>
              <h1 className="">Online Banking</h1>
              <p className="">
              Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.
              </p>
            </div>
        </div>
    </>
  )
}
