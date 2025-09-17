import ImageCard from "../utils/ImageCard";

const IsThisForYouSection = () => (
  <section
    className="is-this-for-you bg-[var(--section-bg)] py-10 px-6 text-primary-900"
    data-animate="fade-up"
  >
    <h2
      className="font-times uppercase text-3xl md:text-5xl font-bold tracking-tight text-center max-w-xs mx-auto mb-4">
      IS THIS FOR <span className="text-teal-600 italic">YOU</span>?
    </h2>

    <p className="font-inter text-sm md:text-base text-center mt-4 max-w-md mx-auto">
      This portal is for the woman who's no longer willing to manifest
      on autopilot. She's building a life of depth, luxury, love and
      profound inner peace. Does that sound like you?
    </p>

    {/* Single image instead of 6-photo grid */}
    <ImageCard
      path="/mmd/itfu.jpg"
      alt="Who this is for"
      className="w-full block my-6"
    />

    <div
      className="mt-6 bg-white/90 backdrop-blur-md rounded-lg p-4 md:p-6 max-w-prose mx-auto shadow-md">
      <h3 className="font-times text-lg md:text-2xl mb-4">
        She's For You If…
      </h3>
      <ul className="space-y-2 font-inter text-sm md:text-base">
        <li>✔ You already lead — and want your energy to lead with you</li>
        <li>✔ You're calling in wealth, love, and next-level impact</li>
        <li>✔ You crave real-time reprogramming, not recycled advice</li>
        <li>✔ You desire radiant health and nervous-system calm</li>
        <li>✔ You're done with healing loops and ready for activation</li>
        <li>✔ You want tools that feel like <em>your truth</em></li>
      </ul>
      <div className="flex justify-center mt-4">
        <button
          className="bg-gradient-to-r from-[#F7E7CE] via-[#F3D9B1] to-[#EAD7B7] text-primary-900 rounded-full px-10 py-4 font-inter font-semibold text-lg shadow-lg shadow-primary-600/10 hover:from-[#F3D9B1] hover:to-[#F7E7CE] transition border-2 border-[#EAD7B7]"
        >
          HELL YES — I'm in
        </button>
      </div>
    </div>
  </section>
);

export default IsThisForYouSection; 