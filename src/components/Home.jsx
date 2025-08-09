import React, { useState } from "react";
import { videos } from "../data";
import { motion, AnimatePresence } from "framer-motion";
import { VideoCameraIcon } from "@heroicons/react/24/solid"; // ganti icon

const MotionH1 = motion.h1;
const MotionDiv = motion.div;
const MotionA = motion.a;

function Home() {
  const [currentVideo, setCurrentVideo] = useState(videos[0].src);
  const [showThumbnails, setShowThumbnails] = useState(false);

  return (
    <div className="font-sans text-white scroll-smooth">
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <AnimatePresence mode="wait">
          <motion.video
            key={currentVideo}
            className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
            src={currentVideo}
            type="video/mp4"
            autoPlay
            loop
            muted
            playsInline
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          />
        </AnimatePresence>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 via-black/20 to-black/80 backdrop-blur-[2px] z-[-1]" />

        {/* Tombol indikator */}
        <motion.button
          className="absolute top-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-4 py-2 bg-black/40 rounded-full backdrop-blur-md border border-white/10 shadow-lg hover:shadow-cyan-400/30 text-sm font-medium cursor-pointer"
          onClick={() => setShowThumbnails((prev) => !prev)}
          animate={{
            scale: [1, 1, 1],
            boxShadow: [
              "0 0 0px rgba(6,182,212,0.6)",
              "0 0 12px rgba(6,182,212,0.8)",
              "0 0 0px rgba(6,182,212,0.6)",
            ],
          }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <VideoCameraIcon className="w-5 h-5 text-cyan-300" />
          Change Background
        </motion.button>

        {/* Thumbnail selector */}
        <AnimatePresence>
          {showThumbnails && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-16 left-1/2 -translate-x-1/2 flex gap-3 z-20 p-3 bg-black/30 backdrop-blur-lg rounded-2xl shadow-lg max-w-[90vw] overflow-x-auto"
              onMouseLeave={() => setShowThumbnails(false)}
            >
              {videos.map((vid, idx) => {
                const isActive = currentVideo === vid.src;
                return (
                  <motion.div
                    key={idx}
                    className="group relative cursor-pointer"
                    onClick={() => setCurrentVideo(vid.src)}
                    whileHover={{ scale: 1.08 }}
                    animate={isActive ? { scale: 1.12 } : { scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    {isActive && (
                      <motion.div
                        className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 blur-md opacity-60"
                        layoutId="activeGlow"
                      />
                    )}
                    <div className="relative rounded-xl p-[2px] bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md shadow-md hover:shadow-cyan-400/20 transition-shadow">
                      <img
                        src={vid.thumb}
                        alt={vid.name}
                        className="w-14 h-14 md:w-16 md:h-16 rounded-lg object-cover"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main content */}
        <MotionDiv
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <MotionH1 className="text-5xl md:text-7xl font-extrabold font-cinzel tracking-wide drop-shadow-[2px_2px_8px_rgba(0,0,0,0.8)]">
            Wuthering Wave
          </MotionH1>

          <MotionA
            href="#more-content"
            className="mt-12 group relative inline-block focus:outline-none"
            whileHover={{ scale: 1.05 }}
          >
            <span
              className="relative z-10 flex items-center gap-3 px-10 py-4 text-lg font-medium tracking-wide text-white rounded-full shadow-lg overflow-hidden"
              style={{
                background:
                  "linear-gradient(270deg, #06b6d4, #3b82f6, #8b5cf6, #ec4899)",
                backgroundSize: "800% 800%",
                animation: "gradientMove 8s ease infinite",
              }}
            >
              <span className="relative font-bold z-10">
                Explore Characters
              </span>
              <div className="absolute inset-0 rounded-full bg-white/10 blur-md opacity-50 group-hover:opacity-70 transition duration-300"></div>
            </span>
            <span className="absolute inset-0 rounded-full bg-cyan-400/20 blur-xl group-hover:opacity-80 transition duration-300"></span>
          </MotionA>
        </MotionDiv>

        <style>{`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>
      </section>
    </div>
  );
}

export default Home;
