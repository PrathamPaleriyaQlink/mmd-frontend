import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MessageCircle, BookOpen, Lock, LogOut } from "lucide-react";
import {
  getVisionBoard,
  isLoggedIn,
  getEmail,
  logout,
  getUserProfile,
} from "../libs/api/api_utils";

const Dashboard = () => {
  const navigate = useNavigate();
  const [showChat, setShowChat] = useState(false);
  const [name, setName] = useState("");
  const [userName] = useState("Sanaya");
  const [visionBoard, setVisionBoard] = useState(null);

  useEffect(() => {
    if (!isLoggedIn()) {
      navigate("/auth");
      return;
    }

    const email = getEmail();
    if (!email) {
      navigate("/auth");
      return;
    }

    const fetchVisionBoard = async () => {
      try {
        const data = await getVisionBoard(email);
        const url =
          data?.vision_board_url &&
          data.vision_board_url.trim() !== "" &&
          data.vision_board_url !== "failed" &&
          data.vision_board_url !== "preparing"
            ? data.vision_board_url
            : null;

        setVisionBoard(data.vision_board_url);
      } catch (err) {
        console.error("Error fetching vision board:", err);
        setVisionBoard(null);
      }
    };

    const fetchName = async () => {
      try {
        const data = await getUserProfile(email);
        setName(data.name);
      } catch (err) {
        setName("");
      }
    };

    fetchVisionBoard();
    fetchName();
  }, [navigate]);

  const handleLogout = () => {
    logout();
    navigate("/auth");
  };

  return (
    <section className="relative min-h-[100svh] flex flex-col items-center justify-center lg:justify-start px-3 sm:px-4 py-6 sm:py-10 lg:py-12 overflow-hidden text-black/80">
      {/* Background */}
      <img
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={
          !visionBoard || visionBoard === "" || visionBoard === "preparing" || visionBoard === "failed"
            ? "/background2.webp"
            : visionBoard
        }
        alt="Dashboard background"
      />
      <div className="absolute inset-0 bg-black/15 backdrop-blur-md z-0" />

      {/* Main container */}
      <div className="relative z-10 w-full max-w-3xl mx-auto rounded-3xl bg-white/20 backdrop-blur-xl shadow-2xl p-4 sm:p-6 lg:p-8 flex flex-col gap-6 sm:gap-8 border border-white/30">
        {/* Top Bar with Logout */}
        <div className="flex justify-end">
          <button
            onClick={handleLogout}
            className="flex items-center gap-1 px-3 py-2 rounded-lg bg-white/20 hover:bg-white/60 transition-all text-sm"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

        {/* Greeting */}
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl lg:text-4xl font-times drop-shadow-md">
            Hi, {name} 🌸
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-black/60 mt-2">
            Welcome back to your manifestation journey
          </p>
        </div>

        {/* Affirmation */}
        <div className="rounded-2xl bg-white/20 backdrop-blur-xl p-3 sm:p-5 lg:p-6 border border-white/30 text-center">
          <p className="text-base sm:text-lg lg:text-2xl font-times">
            I am worthy of success in its many forms.
          </p>
        </div>

        {/* Buttons Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 rounded-2xl overflow-hidden gap-px border border-white/30">
          <Link
            to={"/chat"}
            className="flex items-center justify-center gap-2 p-3 sm:p-4 bg-white/20 backdrop-blur-lg hover:bg-white/60 cursor-pointer transition-all"
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="font-times text-base sm:text-lg">Chat</span>
          </Link>

          <button
            onClick={() => navigate("/masterclasses")}
            className="flex items-center justify-center gap-2 p-3 sm:p-4 bg-white/20 backdrop-blur-lg hover:bg-white/60 cursor-pointer transition-all"
          >
            <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="font-times text-base sm:text-lg">
              Masterclasses
            </span>
          </button>

          <button
            onClick={() => navigate("/resources")}
            className="flex items-center justify-center gap-2 p-3 sm:p-4 bg-white/20 backdrop-blur-lg hover:bg-white/60 cursor-pointer transition-all"
          >
            <Lock className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="font-times text-base sm:text-lg">Vault</span>
          </button>
        </div>

        {/* vision board Card */}
        <div className="rounded-2xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg p-3 sm:p-5 lg:p-6 text-center text-xl font-times">
          {visionBoard === "failed" && (
            <div>
              <p className="mb-3">⚠️ Unexpected error occured while creating vision board.</p>
              <button onClick={() => navigate("/re-genrate")}  className="rounded-full bg-white/30 px-5 sm:px-6 py-2 font-times text-xs sm:text-sm lg:text-base hover:bg-white/80 transition-all">
                Create Again
              </button>
            </div>
          )}

          {visionBoard === "preparing" && (
            <p>⏳ Preparing your vision board... You'll receive an email</p>
          )}

          {(visionBoard === "" || visionBoard === null) && (
            <button onClick={() => navigate("/begin")} className="rounded-full bg-white/30 px-5 sm:px-6 py-2 font-times text-xs sm:text-sm lg:text-base hover:bg-white/80 transition-all">
              Create One
            </button>
          )}

          {visionBoard && visionBoard !== "failed" && visionBoard !== "preparing" && visionBoard !== "" && (
            <div className="relative group mt-3">
      <img
        src={visionBoard}
        alt="Vision Board"
        className="rounded-xl w-full h-auto"
      />
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-[#cdcdcd]/10 rounded-xl flex items-center justify-center opacity-0 hover:backdrop-blur-lg group-hover:opacity-100 transition-all">
        <button onClick={() => navigate("/re-genrate")} className="mx-2 rounded-full bg-white/80 px-4 py-2 text-sm sm:text-base hover:bg-white transition">
          Create Again
        </button>
        <a
          href={visionBoard}
          target="_blank"
          download="vision_board.jpg"
          className="mx-2 rounded-full bg-white/80 px-4 py-2 text-sm sm:text-base hover:bg-white transition"
        >
          Download
        </a>
      </div>
    </div>
          )}
        </div>

        {/* Ritual Card */}
        <div className="rounded-2xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg p-3 sm:p-5 lg:p-6 text-center">
          <p className="text-sm sm:text-base lg:text-xl mb-3 sm:mb-4 font-times">
            Today’s Ritual: <br /> <b>7-Minute Abundance Stack</b>
          </p>
          <button className="rounded-full bg-white/30 px-5 sm:px-6 py-2 font-times text-xs sm:text-sm lg:text-base hover:bg-white/80 transition-all">
            Start Now
          </button>
        </div>

        {/* Featured Section */}
        <div className="rounded-2xl bg-white/10 backdrop-blur-lg border border-white/30 p-3 sm:p-5 lg:p-6">
          <h2 className="text-base sm:text-lg lg:text-xl font-times mb-2">
            Featured
          </h2>
          <p className="text-xs sm:text-sm lg:text-base text-black/70">
            New masterclasses, tools & events will appear here.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
