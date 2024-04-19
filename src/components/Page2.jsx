/* eslint-disable react/no-unescaped-entities */

import Page2main from "./Page2main"


const Page2 = () => {
  return (
    <div className=' flex flex-col   w-full '>
      <div className="flex justify-center items-center">
      <div className=" flex  flex-col  max-w-full text-center  mt-20">
      <div className="px-7 pt-3 pb-px text-6xl font-bold text-green-800 capitalize leading-[54px] max-md:px-5 max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
        Discover Ayurveda’s magic with us 
      </div>
      <div className="self-center text-xl leading-7 font-semibold text-stone-500 mt-10 py-2">
        Ayurvedic treatment aims to balance your body and mind, bringing harmony <br />

        and vitality. It's like a journey to better health using ancient wisdom,{" "}
        <br />a totally effective approach for a better life.{" "}
      </div>
    </div>
    </div>
    <Page2main/>

    </div>
  )
}

export default Page2
