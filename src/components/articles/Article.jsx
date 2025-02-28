import React from "react";

export default function Article({ img, author, title, description }) {
  return (
    <>
      <div className="flex flex-col items-center justify-start overflow-clip bg-white xl:w-[500px] xl:h-[550px] rounded-t-xl xl:mx-4">
        <img
          className="xl:w-full h-auto aspect-square rounded-t-lg shadow-darkBlue/20"
          src={img}
        />
        <div className="items-center justify-normal xl:py-2">
          <p className="font-semi xl:text-sm xl:px-2 text-darkBlue/40">
            By: {author}
          </p>
          <h3 className="xl:text-lg font-normal xl:p-2 hover:text-eCash/70 hover:duration-300 text-darkBlue hover:transition-colors hover:ease-in-out">
            {title}
          </h3>
          <p className="xl:p-2 xl:text-sm text-slate-500">{description}</p>
        </div>
      </div>
    </>
  );
}
