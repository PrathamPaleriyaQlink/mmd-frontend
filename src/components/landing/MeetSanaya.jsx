import ImageCard from "../utils/ImageCard";

const MeetSanaya = () => (
  <section
    className="meet-sanaya bg-[var(--section-bg)] py-10 px-6 text-primary-900 flex flex-col gap-6 md:flex-row md:items-center md:gap-10"
    data-animate="fade-up"
  >
    {/* Full-width image above headline */}
    <ImageCard
      path="/mmd/KAW09547.JPG"
      alt="Meet Sanaya"
      className="w-full block mb-6"
    />

    {/* ── Copy */}
    <div className="max-w-prose md:w-1/2">
      <h2
        className="font-times uppercase tracking-tight text-2xl leading-snug md:text-4xl">
        Meet Sanaya —<br className="hidden md:block" />
        The Woman Behind&nbsp;<span className="italic">The Field</span>
      </h2>

      <p className="font-inter mt-4 text-sm md:text-base">
        Sanaya Chaturvedi is a manifestation teacher, subconscious-reprogramming
        coach, and founder of <em>The Manifestation Portal</em> — known for helping
        thousands of women activate success, inner peace, and feminine power
        without burnout.
      </p>

      <p className="font-inter mt-3 text-sm md:text-base">
        Her method blends neuroscience, energy work and daily ritual, rooted in the
        belief that women don’t need to hustle harder… they need to remember who
        they are. The Frequency Field™ is her life’s work — digitised,
        personalised, and now <strong>yours</strong>.
      </p>

      <p className="font-inter mt-3 text-sm md:text-base">
        Known for her calm, intuitive presence, Sanaya has guided women to manifest
        “impossible” dreams and receive wealth without pushing, proving, or
        performing. She doesn’t motivate — she mirrors. She doesn’t preach
        discipline — she builds desire fields.
      </p>

      <ul className="list-disc pl-4 mt-4 space-y-1 font-inter text-sm md:text-base">
        <li>Ancient wisdom × modern neuroscience</li>
        <li>Energetic precision & frequency coding</li>
        <li>Embodied teachings — not theory</li>
      </ul>

      <div className="flex justify-center mt-4">
        <button
          className="bg-gradient-to-r from-[#F7E7CE] via-[#F3D9B1] to-[#EAD7B7] text-primary-900 rounded-full px-10 py-4 font-inter font-semibold text-lg shadow-lg shadow-primary-600/10 hover:from-[#F3D9B1] hover:to-[#F7E7CE] transition border-2 border-[#EAD7B7]"
        >
          BEGIN YOUR JOURNEY
        </button>
      </div>
    </div>
  </section>
);

export default MeetSanaya; 