import React from "react";

const Marque1 = () => {
  return (
    <div>
      {/* Marquee animation bar: THE SANAYA METHOD. DELIVERED DAILY. */}
      <div
        className="relative w-full overflow-hidden mb-2"
        style={{ height: "2.5em" }}
      >
        <div
          className="absolute left-1/2 -translate-x-1/2 w-screen h-full bg-teal-600"
          style={{ zIndex: 1, minWidth: "100vw" }}
        />
        <div
          className="flex items-center animate-marquee relative"
          style={{
            width: "max-content",
            whiteSpace: "nowrap",
            zIndex: 2,
            height: "100%",
          }}
        >
          {/* Repeat the text enough times to always fill the bar */}
          <span
            className="text-2xl md:text-4xl tracking-widest uppercase font-times text-white"
            style={{ letterSpacing: "0.12em", marginRight: "3em" }}
          >
            THE SANAYA METHOD. DELIVERED DAILY.
          </span>
          <span
            className="text-2xl md:text-4xl tracking-widest uppercase font-times text-white"
            style={{ letterSpacing: "0.12em", marginRight: "3em" }}
          >
            THE SANAYA METHOD. DELIVERED DAILY.
          </span>
          <span
            className="text-2xl md:text-4xl tracking-widest uppercase font-times text-white"
            style={{ letterSpacing: "0.12em", marginRight: "3em" }}
          >
            THE SANAYA METHOD. DELIVERED DAILY.
          </span>
          <span
            className="text-2xl md:text-4xl tracking-widest uppercase font-times text-white"
            style={{ letterSpacing: "0.12em", marginRight: "3em" }}
          >
            THE SANAYA METHOD. DELIVERED DAILY.
          </span>
          <span
            className="text-2xl md:text-4xl tracking-widest uppercase font-times text-white"
            style={{ letterSpacing: "0.12em" }}
          >
            THE SANAYA METHOD. DELIVERED DAILY.
          </span>
        </div>
        <style>{`
            @keyframes marquee {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(0); }
            }
            .animate-marquee {
              animation: marquee 40s linear infinite;
            }
          `}</style>
      </div>
    </div>
  );
};

export default Marque1;
