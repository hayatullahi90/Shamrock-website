import { IoPhonePortraitSharp } from 'react-icons/io5';
import Logo from '../assets/shamrock-animated-logo.gif'

const Hero = () => {
  return (
    <div className=" text-center  relative h-[60vh]">
    
        <img
          height={800}
          width={800}
          src={Logo}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          alt="Shamrock animated logo background"
        />
    

      <div className="z-20 inset-0 grid place-content-center absolute bg-pink-50/80 backdrop-blur-sm">
        <div>
          <h1 className="text-blue-800 font-bold text-4xl md:text-7xl">
            Aspire to{" "}
            <span className="text-pink-500 font-bold">
              Inspire <span className="bg-pink-500 h-96">|</span>
            </span>
          </h1>
          <h2 className="text-blue-800 text-2xl md:text-3xl font-semibold mt-2">
            Build skills, Discover Endless Opportunities
          </h2>
          <div className="mt-12 flex flex-col items-center">
            <div className="flex flex-row gap-2">
              <div className="flex flex-row justify-center items-center gap-2">
                <div className="h-7 w-7 flex items-center justify-center rounded-full bg-green-100">
                  <IoPhonePortraitSharp size={14} />
                </div>
                <span className="text-blue-800 text-xl font-bold">
                  Where Ideas Thrive.
                </span>
              </div>
              <div className="flex flex-row justify-center items-center gap-2">
                <div className="h-7 w-7 flex items-center justify-center rounded-full bg-green-100">
                  <IoPhonePortraitSharp size={14} />
                </div>
                <span className="text-blue-800 text-xl font-bold">
                  Bridging Communities to Opportunities.
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-center">
              <div className="h-7 w-7 flex items-center justify-center rounded-full bg-green-100">
                <IoPhonePortraitSharp size={14} />
              </div>
              <div className="text-blue-800 text-xl font-bold">
                Innovation and Technology.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
