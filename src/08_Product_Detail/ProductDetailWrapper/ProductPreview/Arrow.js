import React from 'react'

export const Arrow = () => {
  return (
    <div >
    <div className="inline-flex items-start gap-[10px] p-[12px] relative flex-[0_0_auto] bg-[#00a218] rounded-[100px] border-2 border-solid border-white">
      <img src={ArrowLeft} className="!relative !w-[24px] !h-[24px]" />
    </div>
    <div className="inline-flex items-start gap-[10px] p-[12px] relative flex-[0_0_auto] bg-[#00a218] rounded-[100px] border-2 border-solid border-white">
      <img src={ArrowRight} className="!relative !w-[24px] !h-[24px]" />
    </div>
  </div>
  );
};

