import { Pen, Key, Zap, Eye, Pause, Image, Bot, Mic } from 'lucide-react';
import ImageCard from '../utils/ImageCard';

const features = [
  {
    icon: Pen,
    title: 'The Rewrite Room™',
    desc: 'Daily subconscious reprogramming through neuroscience-based journaling prompts — tuned to your desires, blocks, and energy state.',
    note: 'You don’t have to figure it out. Just write — and let the shift begin.',
    image: '/mmd/Rewrite.png',
  },
  {
    icon: Key,
    title: 'CodeWords™',
    desc: 'AI-personalized affirmations built on Sanaya’s 3Ps Method — personalized, present-tense, powerful.',
    note: 'Not quotes. Neural commands.',
    image: '/mmd/Codewords.png',
  },
  {
    icon: Zap,
    title: 'The Tap Code™',
    desc: 'Expert-crafted EFT scripts that dissolve fear, release sabotage, and help your body feel safe with success.',
    note: 'Tap into your calm. Tap into your power.',
    image: '/mmd/TAP.png',
  },
  {
    icon: Eye,
    title: 'Vision Flow™',
    desc: 'Immersive visualizations that train your brain to recognize — and receive — the future you’re calling in.',
    note: 'Feel it. Practice it. Become it.',
    image: '/mmd/vISON.png',
  },
  {
    icon: Pause,
    title: 'The Still Space™',
    desc: 'Healing chakra meditations that soothe your nervous system, bring alignment, and restore your magnetic field.',
    note: 'No spiritual noise. Just potent stillness.',
    image: '/mmd/sTILL.png',
  },
  {
    icon: Image,
    title: 'The Visual Field™',
    desc: 'A science-backed vision board experience — structured by life zones and eras to embed your goals deeply into the subconscious.',
    note: 'Because what your brain sees consistently, it starts to create.',
    // image: '/mmd/VB.png',
  },
  {
    icon: Bot,
    title: 'The Oracle™',
    desc: 'Your personal AI channel built on Sanaya’s method — ask it for guidance, get custom prompts, clear your energy, or reconnect with your vision anytime.',
    note: 'It’s like having your higher self, coach, and journal in one.',
  },
  {
    icon: Mic,
    title: 'Live Transmission™',
    desc: 'Monthly masterclasses with Sanaya for real-time energetic recalibration, ritual, and deep collective expansion.',
    note: 'This is your sacred reset — shared with women walking the same path.',
  },
];

const PortalFeaturesSection = () => (
  <section className="pt-0 pb-16" style={{ backgroundColor: '#F6F0E9' }}>
    {/* Main content container with padding */}
    <div className="max-w-5xl mx-auto flex flex-col items-center text-center px-6">
      <h2 className="font-times font-bold uppercase tracking-tight text-3xl md:text-5xl text-center w-full mx-auto mb-4">
        WHAT YOU RECEIVE<br />
        INSIDE THE <span className="text-teal-600 font-bold italic">PORTAL</span>
      </h2>
      <img
        src="/Phone.webp"
        alt="Portal Feature Phone"
        className="w-full block my-8"
        style={{ display: 'block', width: '100%', height: 'auto', maxWidth: 480, margin: '0 auto' }}
      />
      <img
        src="/Phone2.webp"
        alt="Portal Feature Phone 2"
        className="w-full block mb-8"
        style={{ display: 'block', width: '100%', height: 'auto', maxWidth: 480, margin: '0 auto' }}
      />
      <p className="font-inter text-base md:text-lg max-w-2xl mb-8 text-primary-900 text-center mx-auto">
        Welcome to the <strong>first-of-its-kind manifestation portal built exclusively for women</strong> — combining neuroscience, spiritual wisdom, and daily ritual to help you reclaim your power and unlock your highest potential.<br /><br />
        This isn’t just a toolbox.<br /><br />
        It’s a frequency field — one that mirrors your energy, rewires your beliefs, and helps you manifest the life you were born to lead.
      </p>
      <div className="w-full grid grid-cols-1 gap-4 px-4 sm:px-6">
        {features.filter((f) => !!f.image).map((f, i) => (
          <div
            key={f.title}
            className="relative flex items-center justify-center"
            style={{ animationDelay: `${i * 0.07 + 0.1}s` }}
          >
            <ImageCard
              path={f.image}
              alt={f.title}
              className="relative z-10 block w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
    <style>{`
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(24px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in {
        animation: fade-in 0.7s cubic-bezier(0.4,0,0.2,1) both;
      }
    `}</style>
  </section>
);

export default PortalFeaturesSection; 