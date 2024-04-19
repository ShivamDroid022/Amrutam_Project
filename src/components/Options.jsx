
const Options = () => {
  return (
    <>
     <div className=" shrink-0 mx-auto max-w-full max-">
      <div className="flex ">
        <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full ">
          <div className="flex flex-col grow justify-center px-6 py-10 mx-auto w-full bg-yellow-50 border border-orange-100 border-solid max-md:pl-5">
            <div className="flex gap-3">
              <div className="flex flex-col justify-center ml-10">
                <div className="flex justify-center items-center px-4 bg-white rounded-full border border-green-800 border-solid h-[70px] stroke-[1px] w-[70px]">
                  <img
                    
                    srcSet="src/assets/Ellipsee.svg"
                    className="w-10 aspect-square"
                  />
                </div>
              </div>
              <div className="my-auto text-2xl font-bold leading-6 text-green-800 capitalize">
              convenient online & <br />
                In-clinic consultations
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col  w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center px-6 py-10 mx-auto w-full bg-yellow-50 border border-orange-100 border-solid max-md:pl-5">
            <div className="flex gap-3">
              <div className="flex flex-col justify-center ml-10">
                <div className="flex justify-center items-center px-4 bg-white rounded-full border border-green-800 border-solid h-[70px] stroke-[1px] w-[70px]">
                  <img
                    srcSet="src/assets/shield.png"
                    className="w-10 aspect-square"
                  />
                </div>
              </div>
              <div className="my-auto text-2xl font-bold leading-6 text-green-800 capitalize">
                Safe and effective treatment
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col  w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center px-6 py-10 mx-auto w-full bg-yellow-50 border border-orange-100 border-solid max-md:px-5">
            <div className="flex gap-3">
              <div className="flex flex-col justify-center ml-10">
                <div className="flex justify-center items-center px-3 bg-white rounded-full border border-green-800 border-solid h-[70px] stroke-[1px] w-[70px]">
                  <img
                    loading="lazy"
                    srcSet="src/assets/doctor.svg"
                    className="w-12 shadow-sm aspect-square"
                  />
                </div>
              </div>
              <div className="justify-center my-auto text-2xl font-bold leading-7 text-green-800">
                Experienced Ayurvedic Practitioners
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col  w-3/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow justify-center px-4 py-10 mx-auto w-full bg-yellow-50 border border-orange-100 border-solid">
            <div className="flex gap-3">
              <div className="flex flex-col justify-center ml-10">
                <div className="flex flex-col justify-center items-center px-5 bg-white rounded-full border border-green-800 border-solid h-[70px] stroke-[1px] w-[70px]">
                  <img
                    loading="lazy"
                    srcSet="src/assets/prescription.svg"
                    className="w-10 aspect-square"
                  />
                </div>
              </div>
              <div className="my-auto text-2xl font-bold leading-6 text-green-800 capitalize">
                personalized Treatment <br />
                Plans & Guidance
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default Options
