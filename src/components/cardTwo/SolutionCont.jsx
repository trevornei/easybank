import React from "react";

// SVG's
import BankingSymbol from "../../assets/svg/icon-online.svg";
import Budgeting from "../../assets/svg/icon-budgeting.svg";
import OnboardingSymbol from "../../assets/svg/icon-onboarding.svg";
import ApiSymbol from "../../assets/svg/icon-api.svg";

/*
Online Banking
Simple Budgeting
Fast Onboarding
Open API
*/

export default function SolutionInfo() {
  return (
    <>
      <div className="flex flex-row items-center justify-center  xl:w-full h-auto xl:pb-[300px] xl:mx-0">
        {/*ONLINE BANKING */}
        <div className="flex flex-col items-start justify-center xl:w-48 xl:h-72 xl:mx-8 ">
          <img className="w-12 h-12" src={BankingSymbol} />
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-2xl font-normal text-left text-darkBlue whitespace-nowrap xl:pt-9 xl:pb-6 ">
              Online Banking
            </h1>
            <p className="text-left text-slate-500">
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
        </div>
        {/*SIMPLE BUDGETING */}
        <div className="flex flex-col items-start justify-center xl:w-48 xl:h-72 xl:mx-8">
          <img className="w-12 h-12" src={Budgeting} />
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-2xl font-normal text-left text-darkBlue whitespace-nowrap xl:pt-9 xl:pb-6">
              Simple Budgeting
            </h1>
            <p className="text-left text-slate-500">
              See exactly where your money goes each month. Receive
              notifications when you're close to hitting your limits.
            </p>
          </div>
        </div>

        {/*FAST ONBOARDING */}
        <div className="flex flex-col items-start justify-center xl:w-48 xl:h-72 xl:mx-8">
          <img className="w-12 h-12 " src={OnboardingSymbol} />
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-2xl font-normal text-left text-darkBlue whitespace-nowrap xl:pt-9 xl:pb-6">
              Fast Onboarding
            </h1>
            <p className="text-left text-slate-500">
              We don't do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </p>
          </div>
        </div>

        {/*OPEN API */}
        <div className="flex flex-col items-start justify-center xl:w-48 xl:h-72 xl:mx-8">
          <img className="w-12 h-12 " src={ApiSymbol} />
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-2xl font-normal text-left text-darkBlue whitespace-nowrap xl:pt-9 xl:pb-6">
              Open API
            </h1>
            <p className="text-left text-slate-500">
              We don't do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
