import React from "react";

const Card = ({ title, description, imageName, borderColor }) => {
  return (
    <div
      className={`mt-6 rounded-md rounded-t-md border-t-[4px] bg-white shadow-xl border-t-${borderColor} px-8 pt-5 font-Poppins lg:pt-7 lg:first:row-span-full lg:first:my-auto lg:last:col-start-3 lg:last:row-span-full lg:last:my-auto lg:[&:nth-child(3)]:col-start-2`}
    >
      <h1 className={"text-[20px] font-semibold text-very-dark-blue"}>
        {title}
      </h1>
      <p
        className={
          "pt-1 text-xs font-extralight leading-[22px] text-very-dark-blue lg:pt-2 lg:text-sm lg:leading-6"
        }
      >
        {description}
      </p>
      <img
        className={"ml-auto w-[57px] pb-8 pt-8 lg:w-[64px]"}
        src={imageName}
        alt={""}
      />
    </div>
  );
};

export default Card;
