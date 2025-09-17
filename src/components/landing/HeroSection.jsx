import React from "react";
import VideoCard from "../utils/VideoCard";

const HeroSection = () => {
  return (
    <div className="hero py-12 px-6 bg-ivory flex flex-col items-start justify-center text-left relative min-h-screen overflow-hidden bg-[#EFE9E2]">

      <div className="absolute inset-0 w-full h-full object-cover z-0">
        <VideoCard path={"/mmd/heroBg.mp4"}/>
      </div>

      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1
          className="font-times text-3xl leading-15 md:text-6xl tracking-tight uppercase text-white">
          Manifest Like A<br />
          <span className="font-bold">WOMAN</span> Who Gets<br />
          Everything She Wants
        </h1>

        <p className="font-times font-medium text-base md:text-xl my-5 max-w-[38ch] text-white">
          <span className="font-bold text-white">India's First</span> Luxury Manifestation Portal —<br />
          guided by <span className="italic">Sanaya Chaturvedi</span><br />
          and powered by her frequency-coded AI system.
        </p>

        <a
          href="/begin"
          className="mt-2 bg-white/10 backdrop-blur-md border border-white/20 
                     rounded-full px-8 py-3 font-inter font-semibold text-white text-left flex justify-start
                     hover:bg-white/20 hover:border-white/30 transitio n w-fit"
        >
          <span className="text-left w-full block font-times">BEGIN YOUR JOURNEY</span>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
