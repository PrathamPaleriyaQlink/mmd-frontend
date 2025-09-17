import React from "react";

const Footer = () => {
  return (
    <div>
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url(/Background.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none z-0" />
        <div className="relative z-10">
          <footer className="relative py-12 px-6 border-t border-white/10">
            <div className="container mx-auto text-center">
              <div className="text-luxury-pearl mb-4">
                <span className="font-times text-2xl text-luxury-gold uppercase whitespace-nowrap">
                  SANAYA CHATURVEDI
                </span>
              </div>
              <p className="font-times text-luxury-pearl/60 text-sm">
                © 2024 Sanaya Chaturvedi. Luxury manifestation coaching
                reimagined.
              </p>
            </div>
          </footer>l
        </div>
      </section>
    </div>
  );
};

export default Footer;
