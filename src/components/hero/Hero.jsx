import ReqDemoBtn from "../buttons/ReqDemoBtn";

export default function Hero() {
  return (
    <>
      <div className="xl:pt-40 xl:pb-0 xl:px-0 flex-wrap flex-row max-w-screen max-h-[676px] relative z-20 xl:w-auto">
        <div className="z-50 flex-col flex-wrap items-start justify-center h-auto text-left xl:-translate-x-20 max-w-96 xl:ml-28  bg-eCash/30 backdrop-blur-sm xl:w-[600px] xl:p-8 xl:rounded-lg">
          <h1 className="text-6xl leading-[64px] text-darkBlue">
            Next generation
          </h1>
          <h1 className="text-6xl leading-[64px] text-darkBlue">
            digital banking
          </h1>
          <p className="my-4 xl:text-lg xl:my-10 text-mGrey">
            Take your financial life online. Your Easybank account <br></br>{" "}
            will be a one-stop-shop for spending, saving, <br></br> budgeting,
            investing, and much more.
          </p>
          <ReqDemoBtn />
        </div>
      </div>
    </>
  );
}
