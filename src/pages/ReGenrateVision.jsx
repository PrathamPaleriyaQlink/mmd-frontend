import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { generateVision, reGenerateVision, storeToken } from "../libs/api/api_utils"; // frontend API utils
// questions and vibes arrays remain the same

const questions = [
  {
    label: "What are 3 specific goals you want to manifest this year?",
    variable: "goals",
    type: "array",
    placeholder:
      "Don't be shy here. Claim the life you actually want—not the one that seems 'reasonable.'\n(e.g. Buy a house, Start a business, Travel to Japan)",
    rows: 4,
  },
  {
    label:
      "If you had to quantify success in numbers right now, what would that look like?",
    variable: "success_metrics",
    type: "string",
    placeholder:
      "Numbers make the vision real. Be honest—what would feel wildly expansive and safe?\n(e.g. $100k savings, 10 clients, 3 trips)",
    rows: 4,
  },
  {
    label: "What is one luxury or milestone you dream of experiencing soon?",
    variable: "pinch_moment",
    type: "string",
    placeholder:
      "This is the 'pinch-me' moment. Go there. Let your desire breathe.\n(e.g. Private jet trip, Dream wedding, Bestseller book)",
    rows: 4,
  },
  {
    label: "What parts of your current life feel out of alignment or heavy?",
    variable: "out_of_alignment",
    type: "string",
    placeholder:
      "Whatever you name here gets to shift. You're not here to carry what isn't yours anymore.\n(e.g. Overworking, toxic relationships, self-doubt)",
    rows: 4,
  },
  {
    label:
      "What is your soul secretly craving that you haven't allowed yourself to fully own?",
    variable: "secret_craving",
    type: "string",
    placeholder:
      "This is where the magic hides. Say the quiet want out loud.\n(e.g. Creative freedom, deep rest, wild romance)",
    rows: 4,
  },
  {
    label:
      "If no one judged you and everything was guaranteed, what would you create or become?",
    variable: "limitless_identity",
    type: "string",
    placeholder:
      "This is your permission slip. No logic. Just desire.\n(e.g. Visionary leader, World traveler, Healer)",
    rows: 4,
  },
  {
    label: "What kind of woman do you want to wake up as 6 months from now?",
    variable: "future_self",
    type: "string",
    placeholder:
      "Imagine her morning. Her pace. Her power. Let her guide you.\n(e.g. Calm CEO, radiant mother, joyful artist)",
    rows: 4,
  },
  {
    label: "What are 3 core feelings you want to experience daily?",
    variable: "feelings",
    type: "array",
    placeholder:
      "These are the emotions your vision board must evoke every single time you look at it.\n(e.g. Peaceful, Inspired, Abundant)",
    rows: 4,
  },
  {
    label:
      "What is the one emotion or state you believe your current life lacks—but your dream life has in abundance?",
    variable: "frequency_anchor",
    type: "string",
    placeholder:
      "This becomes the frequency anchor. Your whole board will be designed to help you live here.\n(e.g. Freedom, joy, confidence)",
    rows: 4,
  },
  {
    label:
      'Finish this sentence: "When I\'ve manifested this life, I will feel so _____."',
    variable: "north_star",
    type: "string",
    placeholder:
      "Let your heart finish this. Whatever word shows up is your energetic north star.\n(e.g. Fulfilled, unstoppable, grateful)",
    rows: 4,
  }
];

const vibes = [
  {
    key: "boss",
    emoji: "✨",
    name: "Rich Boss Babe Era",
    visuals: "wealth, power, premium expansion",
  },
  {
    key: "motherhood",
    emoji: "🌿",
    name: "Soft Motherhood + Legacy Era",
    visuals: "nurturing, home, harmony",
  },
  {
    key: "business",
    emoji: "📈",
    name: "Business Expansion Era",
    visuals: "scale, systems, success",
  },
  {
    key: "healing",
    emoji: "🦋",
    name: "Healing & Rebirth Era",
    visuals: "surrender, softness, trauma recovery",
  },
  {
    key: "magnetic",
    emoji: "💃",
    name: "Magnetic Feminine Era",
    visuals: "radiance, play, sensuality",
  },
  {
    key: "minimalist",
    emoji: "📓",
    name: "Minimalist Clarity Era",
    visuals: "peace, simplicity, intentional living",
  },
];

const ReGenrateVision = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [showQuestions, setShowQuestions] = useState(false);
  const [step, setStep] = useState("questions");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleNext = (e) => {
    e.preventDefault();
    const q = questions[current];

    if (q.variable === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(answers.email || "")) {
        alert("Please enter a valid email address");
        return;
      }
    }

    if (q.required && !answers[q.variable]) {
      alert(`${q.label} is required`);
      return;
    }

    setAnimating(true);
    setTimeout(() => {
      setAnimating(false);
      if (current === questions.length - 1) {
        setStep("vibe");
      } else {
        setCurrent((prev) => prev + 1);
      }
    }, 300);
  };

  const handleChange = (val) => {
    const q = questions[current];
    setAnswers((prev) => ({ ...prev, [q.variable]: val }));
  };

  const handleStart = () => setShowQuestions(true);

  const handleVibeSelect = async (vibe) => {
    setLoading(true);
    setError("");

    try {
      const payload = {
        answers: { ...answers }, // put all user responses here
        vibe: vibe, // send full object {key, emoji, name, visuals}
      };

      const res = await reGenerateVision(
        payload.answers,
        payload.vibe
      );

      if (res.sucess === true) {
        setStep("done");
      }
      else {
        setError("Something went wrong while generating your vision board.");
      }
    } catch (err) {
      setError(err.message || "API error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden bg-teal-600">
      <img
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/background2.webp"
        alt="Background"
        style={{ pointerEvents: "none" }}
      />
      <div className="border border-luxury-gold rounded-2xl shadow-xl p-8 w-full max-w-md text-center backdrop-blur-md text-black relative z-10">
        <h1 className="font-luxury text-3xl md:text-4xl text-black mb-8">
          BEGIN YOUR JOURNEY
        </h1>

        {error && <p className="text-red-500 mb-4">{error}</p>}
        {loading && (
          <div className="flex justify-center my-4">
            <ClipLoader color="#FFD700" size={35} />
          </div>
        )}

        {step === "questions" && !loading && (
          <div className="flex flex-col gap-6">
            {!showQuestions ? (
              <>
                <button
                  className="w-full px-6 py-4 rounded-lg bg-luxury-gold text-black font-luxury text-lg font-semibold shadow-lg hover:bg-luxury-gold/90 transition-all duration-300"
                  onClick={handleStart}
                >
                  BUILD A PERSONALISED
                  <br />
                  VISION BOARD
                </button>
                <button
                  className="w-full px-6 py-4 rounded-lg bg-white text-black font-luxury text-lg font-semibold border border-luxury-gold shadow-lg hover:bg-luxury-gold/10 transition-all duration-300"
                  onClick={() => navigate("/dashboard")}
                >
                  BACK TO DASHBOARD
                </button>
              </>
            ) : (
              <div>
                {/* Progress Bar */}
                <div className="relative w-full mb-10">
                  <div className="w-full h-2 bg-luxury-gold/20 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-luxury-gold transition-all duration-500"
                      style={{
                        width: `${((current + 1) / questions.length) * 100}%`,
                      }}
                    />
                  </div>
                </div>

                {/* Question Form */}
                <form onSubmit={handleNext} className="relative min-h-[290px]">
                  <div
                    key={current}
                    className={`absolute inset-0 w-full transition-all duration-300 ease-in-out ${
                      animating
                        ? "opacity-0 translate-x-6 scale-95"
                        : "opacity-100 translate-x-0 scale-100"
                    } flex flex-col`}
                  >
                    <label className="font-luxury text-lg text-black block mb-2 text-left">
                      {questions[current].label}
                    </label>
                    <textarea
                      className="w-full px-4 py-4 rounded-lg border border-luxury-gold bg-white/90 text-navy-blue font-luxury focus:outline-none focus:ring-2 focus:ring-luxury-gold placeholder-navy-blue/60 mb-4 text-lg"
                      rows={questions[current].rows}
                      placeholder={questions[current].placeholder}
                      value={answers[questions[current].variable] || ""}
                      onChange={(e) => handleChange(e.target.value)}
                      required={questions[current].required || current === 0}
                      autoFocus
                      type={
                        questions[current].type === "password"
                          ? "password"
                          : "text"
                      }
                    />
                    <div className="flex gap-2 mt-2">
                      {current > 0 && (
                        <button
                          type="button"
                          className="px-4 py-2 rounded-lg bg-white text-navy-blue border border-luxury-gold font-luxury text-base font-semibold hover:bg-luxury-gold/10 transition-all duration-300"
                          onClick={() => setCurrent((prev) => prev - 1)}
                        >
                          Back
                        </button>
                      )}
                      <button
                        type="submit"
                        className="flex-1 px-6 py-4 rounded-lg bg-luxury-gold text-navy-blue font-luxury text-lg font-semibold shadow-lg hover:bg-luxury-gold/90 transition-all duration-300"
                      >
                        {current === questions.length - 1
                          ? "Continue to Vibe Selection"
                          : "Next"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}

        {step === "vibe" && !loading && (
          <div className="flex flex-col gap-8 animate-fade-in">
            <h2 className="font-luxury text-2xl text-black mb-2">
              What vibe do you want for your vision board?
            </h2>
            <div className="text-black text-lg font-luxury mb-2">
              These options are just to understand the vibe. Your vision board
              will be generated as per your responses.
            </div>
            <div className="flex flex-col gap-4">
              {vibes.map((vibe) => (
                <button
                  key={vibe.key}
                  className="w-full flex flex-col items-start p-4 rounded-xl border-2 border-luxury-gold bg-white/80 hover:bg-luxury-gold/10 transition-all duration-300 shadow-lg"
                  onClick={() => handleVibeSelect(vibe)}
                >
                  <div className="font-luxury text-lg text-navy-blue mb-1">
                    {vibe.name}
                  </div>
                  <div className="text-sm text-navy-blue/80">
                    {vibe.visuals}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === "done" && (
          <div className="flex flex-col items-center justify-center min-h-[180px] animate-fade-in w-full">
            <div className="text-3xl mb-4">✨</div>
            <div className="font-luxury text-lg text-black mb-4 text-center">
              Your vision board is being generated. You'll get notified via
              email once it's ready.
            </div>
            <button
              className="px-6 py-3 rounded-lg bg-luxury-gold text-navy-blue font-luxury text-lg font-semibold shadow-lg hover:bg-luxury-gold/90 transition-all duration-300"
              onClick={() => navigate("/dashboard")}
            >
              Go to Dashboard
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReGenrateVision;
