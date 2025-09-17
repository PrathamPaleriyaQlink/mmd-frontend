import VideoCard from "../utils/VideoCard";

const Image12Section = () => (
  <section
    className="image-12 bg-[#EFE9E2] p-0"
    data-animate="fade-up"
  >
    <div className="flex justify-center items-center overflow-hidden">
      <VideoCard
        path={"/mmd/tsm.mp4"}
        className="w-full block transform scale-110"
      />
    </div>
  </section>
);

export default Image12Section; 