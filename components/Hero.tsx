import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="pb-10 pt-24 relative overflow-hidden" id="home">
      
      {/* Spotlights */}
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Grid Background */}
      <div className="min-h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Main Content */}
      <div className="flex justify-center relative z-10 my-5 px-5">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[75vw] flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* LEFT SIDE: Text */}
          <div className="flex flex-col items-center lg:items-start justify-center flex-1">
            <p className="uppercase tracking-widest text-xs text-center lg:text-left text-blue-100 max-w-80 mb-4">
              Welcome to my portfolio!
            </p>

            <TextGenerateEffect
              words="Turning AI/ML concepts into intelligent solutions."
              className="text-center lg:text-left text-[40px] md:text-5xl lg:text-6xl"
            />

            <p className="text-center lg:text-left md:tracking-wider mt-4 mb-8 text-sm md:text-lg lg:text-2xl text-white-100">
               I&apos;m an AI/ML expert and full-stack developer.
            </p>

            <a href="#projects">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>

          {/* RIGHT SIDE: Profile Image & Name */}
          {/* CHANGE: Yahan 'flex-col' add kiya taake naam image ke neeche aaye */}
          <div className="flex flex-col items-center justify-center lg:mt-0 mt-10 flex-1">
            
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
              
              {/* Image Container */}
              <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-white/[0.1] shadow-2xl shadow-purple-500/20">
                <img 
                  src="/profile.png" 
                  alt="Qurat Ul Ain"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* NAME ADDED HERE WITH PURPLE STYLE */}
            <h1 className="mt-6 text-center font-bold text-3xl md:text-4xl">
              <span className="text-purple">Qurat Ul Ain</span>
            </h1>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;