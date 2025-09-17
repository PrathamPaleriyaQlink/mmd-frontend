import React from 'react'
import ImageCard from '../utils/ImageCard'

const WhoThisIsFor = () => {
  return (
    <section
    className="who-for bg-[#EFE9E2] py-10 px-6 text-primary-900"
    data-animate="fade-up"
  >
    <ImageCard
      path="/mmd/wtif.png"
      alt="Is this for you"
      className="w-full block"
    />
    <div className="flex justify-center mt-10">
      <a
        href="/begin"
        className="px-8 py-4 rounded-full bg-gradient-to-r from-[#F7E7CE] via-[#F3D9B1] to-[#EAD7B7] text-primary-900 font-inter font-semibold text-lg shadow-lg shadow-primary-600/10 hover:from-[#F3D9B1] hover:to-[#F7E7CE] transition border-2 border-[#EAD7B7]"
        style={{ letterSpacing: '0.04em', display: 'inline-block' }}
      >
        BEGIN YOUR JOURNEY!
      </a>
    </div>
  </section>
  )
}

export default WhoThisIsFor
