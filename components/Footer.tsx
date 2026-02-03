import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    // CHANGE: 'relative' add kiya taake background image footer ke hisab se set ho
    // 'overflow-hidden' ab sahi kaam karega aur neechay ki extra space kaat dega
    <footer className="w-full pt-5 pb-5 relative overflow-hidden" id="contact">
      
      {/* Background Grid Image */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        
        {/* Gmail Direct Link */}
        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=quratulain0977@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2026 Qurat Ul Ain
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a 
              key={info.id} 
              href={info.link} 
              target="_blank" 
              rel="noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;