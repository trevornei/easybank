import ReqDemoBtn from "../buttons/ReqDemoBtn";

export default function Hero() {
  return (
    <>
      <div className="xl:pt-40 xl:pb-0 xl:px-0 flex-wrap flex-row max-w-screen max-h-[676px] relative z-20 md:pt-[175px] md:pl-[100px] lg:w-auto md:w-auto lg:pt-[200px] lg:pl-[100px] xl:w-auto 2xl:ml-20">
        <div className="z-50 flex-col flex-wrap items-start justify-center h-auto text-left xl:-translate-x-20 max-w-96 xl:ml-28  bg-eCash/10 backdrop-blur-2xl md:p-6 md:w-[425px] w-[200px] sm:w-[400px] lg:p-6 lg:rounded-lg md:rounded-lg sm:rounded-lg rounded-lg lg:w-[450px] xl:w-[600px] xl:p-8 xl:rounded-lg ">
          <h1 className="xl:text-5xl md:text-2xl  lg:text-3xl leading-[64px] text-darkBlue xl:font-bold font-bold">
            Next Generation
          </h1>
          <h1 className="xl:text-5xl lg:text-3xl leading-[64px] text-darkBlue font-bold md:text-2xl">
            Digital Banking
          </h1>
          <p className="my-4 xl:text-lg xl:my-10 text-darkBlue xl:leading-10">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <ReqDemoBtn />
        </div>
      </div>
    </>
  );
}
