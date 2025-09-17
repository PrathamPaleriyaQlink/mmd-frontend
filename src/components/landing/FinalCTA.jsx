import React from "react";

const FinalCTA = () => (
  <section
    className="final-cta relative overflow-hidden bg-[var(--section-bg)] text-primary-900 px-6 py-12 flex flex-col items-center gap-6">
    {/* 📸 Image reference: Optional subtle silhouette of sunrise clouds blended at 8–10 % opacity, file placeholder: /img/cta-bg.png — if no asset yet, keep empty div. */}
    <div className="absolute inset-0 pointer-events-none bg-center bg-cover opacity-10" style={{ backgroundImage: "url('/img/cta-bg.png')" }} />
    {/* — HEADLINE — */}
    <h2 className="font-times uppercase tracking-tight text-3xl leading-snug sm:text-4xl md:text-5xl text-center max-w-[22ch] relative z-10">
      Your Next Era Isn’t Waiting.<br />
      Why Are You?
    </h2>
    {/* — BODY COPY — */}
    <div className="font-inter text-base md:text-lg text-center max-w-prose space-y-4 relative z-10">
      <p>
        This portal isn’t just another tool. It’s a transmission — built to rewire your subconscious, elevate your identity, and guide you into the life that’s been calling you.
      </p>
      <p>
        You’ve done the healing. You’ve done the work.
        <br />Now it’s time to receive.
      </p>
      <p>
        Because the longer you delay your next self, the longer she stays out of reach.<br />
        And <em>she’s ready now.</em>
      </p>
    </div>
    {/* — FOUNDING MEMBER BONUS — */}
    <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-md py-6 px-6 md:px-8 mt-4 max-w-prose relative z-10">
      <h3 className="font-times text-lg md:text-xl mb-3">
        ⚡ Founding-Member Bonus
      </h3>
      <p className="font-inter text-sm md:text-base">
        Join the waitlist today to receive early access
        <br />+ instant entry to Sanaya’s private Masterclass Vault — a curated library of her most powerful energetic teachings.
        <br />Available only for the first wave of women who say <strong>yes</strong>.
      </p>
    </div>
    {/* — CTA BUTTON — */}
    <button className="font-inter font-semibold rounded-full bg-primary-600 text-primary-50 px-10 py-3 mt-6 shadow-lg shadow-primary-600/20 hover:shadow-primary-600/40 transition relative z-10">
      BEGIN YOUR JOURNEY
    </button>
  </section>
);

export default FinalCTA; 