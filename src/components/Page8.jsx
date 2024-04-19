
import Phone from '../assets/Group39489.svg'
const Page8 = () => {
  return (
    <div className="flex justify-center align-middle items-center px-16 py-16 w-full  bg-yellow-50 max-md:px-5">
    
      <div className="flex flex-row  w-full  max-w-[1244px] max-md:max-w-full">
      <div className="flex flex-col max-w-[674px]">
      <div className="flex flex-col  w-full max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="flex flex-col w-full max-md:max-w-full">
            <div className="w-full text-6xl font-bold text-green-800 capitalize leading-[67.2px] max-md:max-w-full max-md:text-4xl">
              Amrutam home App
            </div>
            <div className="text-xl  mt-4 w-full  tracking-normal text-stone-500 max-md:max-w-full">
              The Amrutam Home App is your one-stop app for all things Ayurveda!
              Apart from mimicking the significant characteristics of our
              website, this app offers a wide range of additional features.
            </div>
          </div>
          <div className="mt-6 w-full text-3xl font-medium leading-10 text-black capitalize max-md:max-w-full">
            Get a diet & lifestyle consultation with ayurvedic experts across
            the globe{" "}
          </div>
        </div>
        <div className="mt-16 w-full text-4xl font-bold text-black capitalize leading-[50.4px] max-md:mt-10 max-md:max-w-full">
          Get the App now
        </div>
      </div>
      <div className="flex gap-5 pr-4 mt-8 max-md:flex-wrap">
        <img
          srcSet="src/assets/image67.svg   "
          className="aspect-[3.33] w-[270px]"
        />

        <img
          srcSet="src/assets/image68.svg"
          className="aspect-[3.45] w-[272px]"
        />
      </div>
    </div>

    <img
      srcSet={Phone}
    />
      </div>
      
    </div>
  )
}

export default Page8
