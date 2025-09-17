import React from 'react'
import ImageCard from '../utils/ImageCard'

const Section1 = () => {
  return (
    <section
      className="about py-4 px-6 text-primary-900 flex flex-col gap-8 md:flex-row md:items-center md:gap-12 bg-[#EFE9E2]">

      {/* Visual side (mobile: on top) */}
      <ImageCard
        path={"/mmd/section1.jpeg"}
        alt="Sanaya smiling, sunrise clouds (uploaded)"
        className="w-full block"
      />

      {/* Text side */}
      <div className="max-w-prose md:w-1/2">
        <h2
          className="font-times font-bold uppercase tracking-tight text-3xl md:text-5xl text-center w-full mx-auto leading-tight">
          THE FUTURE OF<br />
          <span className="italic text-teal-600">MANIFESTATION</span> IS HERE
        </h2>

        <p className="font-inter mt-4 text-sm md:text-base">
          Welcome to your personal manifestation system — built with AI,
          guided by Sanaya's teachings, and designed to help you rewire your
          subconscious for lasting change.
        </p>

        <p className="font-inter mt-3 text-sm md:text-base">
          This isn't a random app pushing out generic content. This is
          <span className="font-semibold"> The Frequency Field™</span> —
          a neuroscience-backed, spiritually-guided method that adapts to
          <strong> your </strong> energy, goals, and life era.
        </p>

        

        <p className="font-inter mt-4 text-sm md:text-base">
          This is not ChatGPT with glitter. This is
          <strong> manifestation AI infused with Sanaya's signature method</strong> —
          the same process that has helped thousands of women step into success,
          wealth, ease, and deep inner peace.
        </p>
      </div>
    </section>
  )
}

export default Section1
