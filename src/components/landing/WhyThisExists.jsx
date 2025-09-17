import { useNavigate } from "react-router-dom";
import ImageCard from "../utils/ImageCard";

const WhyThisExists = () => {
  const navigate = useNavigate();
  return (
    <section
      className="why-exists px-6 text-primary-900 flex flex-col gap-0 md:flex-row-reverse md:items-center md:gap-10 bg-[#EFE9E2]"
      data-animate="fade-up"
    >
      {/* ── Copy */}
      <div
        className="w-full flex flex-col items-center"
        style={{ marginTop: 0, paddingTop: 0, gap: 0 }}
      >
        <ImageCard
          path="/mmd/wte.jpeg"
          alt="The Sanaya Method"
          className="max-w-[448px] mt-10"
        />
        <button
          type="button"
          onClick={() => navigate("/begin")}
          className="my-6 px-8 py-4 rounded-full bg-gradient-to-r from-[#F7E7CE] via-[#F3D9B1] to-[#EAD7B7] text-primary-900 font-inter font-semibold text-lg shadow-lg shadow-primary-600/10 hover:from-[#F3D9B1] hover:to-[#F7E7CE] transition border-2 border-[#EAD7B7]"
          style={{ letterSpacing: "0.04em", display: "inline-block" }}
        >
          BEGIN YOUR JOURNEY
        </button>
      </div>
    </section>
  );
};

export default WhyThisExists;
