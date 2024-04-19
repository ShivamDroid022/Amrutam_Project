

const Home = () => {

  return (
    <>
      <div className=" shrink-0 mx-auto max-w-full bg-[url('public/assets/mobbg.svg')]   md:bg-[url('public/assets/back.svg')] bg-cover md:bg- w-full bg-center ">
      <div className="flex flex-col mt-11 mb-19 ml-20 max-w-full max-md:mt-20">

        <div className="flex flex-col max-md:max-w-full mt-3 md:mt-32 ">
          <div className="text-[2.0rem] md:text-5xl text-yellow-50 max-md:max-w-full leading-[100px] x-9">
            Namaste, Welcome to Amrutam
          </div>
          <div className="flex flex-col mt-2 max-md:max-w-full">
            <div className="text-[3.2rem] md:text-6xl  font-bold  text-white capitalize max-md:max-w-full  md:leading-[100px]">
              Step into Holistic Healing with 
              <span className="text-yellow-50 underline ml-4">Ayurveda</span> <br />
                Book Consultation with certified Experts.
            </div>
            <p className="leading-9 mt-5 text-2xl font-medium text-stone-300 max-md:max-w-full">
                Dive into the world of ayurveda and experience Personalized Health Solutions and <br /> Holistic Guidance
                from Trusted Ayurvedic Doctors Anytime, anywhere.
            </p>
            <button className="mb-20 justify-center self-start px-10 pt-7 pb-6 mt-12 text-2xl font-medium text-white uppercase
                  
         bg-green-800 hover:bg-green-900 rounded-2xl max-md:px-5 max-md:mt-10">
          Book an Appointment
             </button>
          </div>
        </div>
        
      </div>
    </div>
    </>
  )
}


export default Home

   

