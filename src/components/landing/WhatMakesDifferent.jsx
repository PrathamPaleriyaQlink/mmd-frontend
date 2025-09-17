import ImageCard from "../utils/ImageCard";
import VideoCard from "../utils/VideoCard";

const WhatMakesDifferent = () => (
  <section
    className="relative overflow-hidden bg-[#EFE9E2] text-primary-900 px-6 pt-12 pb-0 flex flex-col items-center gap-8"
    data-animate="fade-up"
  >
    {/* — Subtle marble texture overlay for depth — */}
    <span className="pointer-events-none absolute inset-0 bg-[#EFE9E2] opacity-10 z-0" />

    {/* Full-width image above headline */}
    <ImageCard
      path="/mmd/wmd.JPG"
      alt="What Makes This Different"
      className="relative z-10 w-full block mb-6"
    />
    <div className="flex justify-center items-center overflow-hidden w-full mb-0">
      <VideoCard
        path="/mmd/sif.mp4"
        className="relative z-10 w-full block transform scale-110"
      />
    </div>
  </section>
);

export default WhatMakesDifferent; 