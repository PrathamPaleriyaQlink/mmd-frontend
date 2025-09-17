const MasterclassVault = () => (
  <section
    className="vault bg-[var(--section-bg)] text-primary-900 px-6 py-12 flex flex-col items-center gap-6"
    data-animate="fade-up"
  >
    {/* — HEADLINE — */}
    <h2
      className="font-times uppercase tracking-tight text-2xl sm:text-3xl md:text-4xl text-center">
      Unlock The Masterclass Vault
    </h2>

    {/* — SHORT INTRO — */}
    <p
      className="font-inter text-base md:text-lg text-center max-w-prose mt-3">
      Your membership includes exclusive access to Sanaya’s private library of
      deep-dive trainings — recorded workshops that have never been released
      publicly.
    </p>

    {/* — GRID OF COVERS — */}
    <div
      className="grid grid-cols-2 gap-4 mt-6 md:grid-cols-3"
      data-animate="stagger">
      {/* 📸 Image references — 1:1, minimal text baked into artwork */}
      {[
        { file: '/img/vault-wealth.jpg',  title: 'Wealth Frequency'        },
        { file: '/img/vault-feminine.jpg',title: 'Feminine Power'         },
        { file: '/img/vault-business.jpg',title: 'Soul-led Business'      },
        { file: '/img/vault-journaling.jpg',title: 'Manifest Journaling'  },
        { file: '/img/vault-quantum.jpg', title: 'Quantum Visualisation'  },
        { file: '/img/vault-nervous.jpg', title: 'Nervous-System Calm'    },
      ].map(({file,title},i)=>{
        // Use a placeholder if the image is not available
        const isReference = true; // Set to true for all for now, or add logic to check if image exists
        return (
          <figure key={i}
                  className="relative overflow-hidden rounded-lg shadow-sm">
            {isReference ? (
              <div className="relative w-full h-40 md:h-48 bg-neutral-200 flex items-center justify-center">
                <img
                  src="https://placehold.co/400x400?text=Reference+Image"
                  alt={title + ' (reference)'}
                  className="w-full h-full object-cover rounded-lg opacity-60" />
                <span className="absolute inset-0 flex items-center justify-center font-inter text-xs md:text-base text-primary-900 font-semibold">
                  Reference Image
                </span>
                <figcaption
                  className="absolute bottom-0 w-full bg-black/60 text-white font-times text-xs sm:text-sm tracking-wide py-1 text-center">
                  {title}
                </figcaption>
              </div>
            ) : (
              <>
                <img src={file} alt={title}
                  className="w-full h-40 md:h-48 object-cover filter grayscale hover:grayscale-0 transition duration-500 ease-out scale-100 hover:scale-105"/>
                <figcaption
                  className="absolute bottom-0 w-full bg-black/60 text-white font-times text-xs sm:text-sm tracking-wide py-1 text-center">
                  {title}
                </figcaption>
              </>
            )}
          </figure>
        );
      })}
    </div>

    {/* — CTA — */}
    <button
      className="mt-12 font-inter font-semibold rounded-full bg-primary-600 text-primary-50 px-10 py-3 shadow-lg shadow-primary-600/20 hover:shadow-primary-600/40 transition">
      BEGIN YOUR JOURNEY
    </button>

    <p
      className="font-inter text-xs text-center mt-2 max-w-[30ch] opacity-80">
      Founding-member bonus, available for a limited time.
    </p>
  </section>
);

export default MasterclassVault; 