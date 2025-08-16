import React, { useState } from "react";
import { videos } from "../data";
import { motion, AnimatePresence } from "framer-motion";
import { VideoCameraIcon } from "@heroicons/react/24/solid";

const MotionDiv = motion.div;
const MotionA = motion.a;

function SlashTitle({ children }) {
  return (
    <motion.div
      className="relative inline-block [perspective:2000px]"
      initial={{ opacity: 0, y: 40, rotateX: -10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <h1
        className="text-5xl md:text-7xl lg:text-8xl font-bold font-cinzel tracking-widest 
                   bg-gradient-to-b from-[#ffecd5] via-[#ffe89c] to-[#d6b85d] bg-clip-text text-transparent select-none"
        style={{
          textShadow: `
            0 3px 4px rgba(0,0,0,0.85),
            0 1px 28px rgba(0,0,0,0.4)
          `,
          WebkitTextFillColor: "transparent",
          WebkitBackgroundClip: "text",
        }}
      >
        {children}
      </h1>

      <motion.div
        className="absolute left-1/2 bottom-[-12px] h-[2px] w-[70%] rounded-full bg-gradient-to-r from-transparent via-[#ffe89c] to-transparent origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
      />

      <motion.span
        aria-hidden="true"
        initial={{ x: "-160%", rotate: -18, opacity: 0.8 }}
        animate={{ x: "160%", opacity: 0 }}
        transition={{ delay: 1.2, duration: 1.2, ease: "easeOut" }}
        className="absolute -top-8 left-0 w-[180%] h-[200%] pointer-events-none"
      >
        <span
          className="absolute block w-full h-full"
          style={{
            background:
              "linear-gradient(120deg, rgba(255,255,255,0) 48%, rgba(255,255,255,0.85) 50%, rgba(255,255,255,0) 52%)",
            transform: "rotate(-18deg)",
            filter: "blur(0.5px)",
          }}
        />
      </motion.span>
    </motion.div>
  );
}

export default function Home() {
  const [currentVideo, setCurrentVideo] = useState(videos[0].src);
  const [showThumbnails, setShowThumbnails] = useState(false);

  return (
    <div className="font-sans text-white scroll-smooth">
      <section className="relative w-screen h-screen overflow-hidden">
        {/* Background Video with smooth fade transitions */}
        <AnimatePresence mode="wait">
          <motion.video
            key={currentVideo}
            className="absolute inset-0 w-screen h-full object-cover z-[-2]"
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

        {/* Dark gradient overlay with blur for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/15 to-black/70 backdrop-blur-[1px] z-[-1]" />
        {/* Button to toggle video thumbnails */}
        <motion.button
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="
            absolute top-2 left-1/2 -translate-x-1/2 z-30
            flex items-center gap-3
            px-3 py-2
            bg-black/70 rounded-xl backdrop-blur-lg
            border border-blue-700/30 shadow-[0_0_10px_rgba(30,144,255,0.3)]
            text-blue-500 text-sm  font-semibold
            cursor-pointer
            hover:bg-black/85 hover:border-blue-500
            transition-colors duration-300 ease-in-out
          "
          onClick={() => setShowThumbnails((prev) => !prev)}
          whileHover={{
            scale: 1.06,
            boxShadow: "0 0 15px rgba(30,144,255,0.5)",
            transition: { type: "spring", stiffness: 300, damping: 20 },
            transformOrigin: "center",
          }}
          whileTap={{
            scale: 0.93,
            transition: { type: "spring", stiffness: 400, damping: 30 },
            transformOrigin: "center",
          }}
          aria-label="Change background"
        >
          <VideoCameraIcon className="w-4 h-4 text-blue-500" />
          <span className="select-none font-normal text-white">
            Change Background
          </span>
        </motion.button>

        {/* Video Thumbnails panel */}
        <AnimatePresence>
          {showThumbnails && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.22 }}
              className="
                absolute top-16 left-1/2 -translate-x-1/2
                flex gap-3
                z-20 p-3 bg-black/30 backdrop-blur-md rounded-2xl shadow-lg
                max-w-[90vw] overflow-x-auto
              "
              onMouseLeave={() => setShowThumbnails(false)}
            >
              {videos.map((vid, idx) => {
                const isActive = currentVideo === vid.src;
                return (
                  <motion.button
                    key={idx}
                    onClick={() => setCurrentVideo(vid.src)}
                    whileHover={{ scale: 1.08, boxShadow: "0 0 12px #00bfff" }}
                    animate={
                      isActive
                        ? { scale: 1.1, boxShadow: "0 0 18px #00bfff" }
                        : { scale: 1, boxShadow: "none" }
                    }
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="
                      relative rounded-lg p-[2px]
                      bg-gradient-to-br from-white/6 to-white/2
                      backdrop-blur-sm shadow-md
                    "
                  >
                    {isActive && (
                      <span className="absolute -inset-0.5 rounded-lg bg-blue-400/30 blur-md" />
                    )}
                    <img
                      src={vid.thumb}
                      alt={vid.name}
                      className="w-14 h-14 md:w-16 md:h-16 rounded-md object-cover block"
                      loading="lazy"
                    />
                  </motion.button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Center Content: Title & Explore Button */}
        <MotionDiv
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6">
            <SlashTitle>Wuthering Wave</SlashTitle>
          </div>

          <MotionA
            href="#more-content"
            className="mt-6 top-50 group relative inline-block focus:outline-none rounded-full"
            initial={{ scale: 1 }}
            whileHover={{
              scale: 1.04,
              filter: "drop-shadow(0 0 12px rgba(255, 140, 0, 0.7))",
              transition: { duration: 0.35, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.96, filter: "none" }}
          >
            <span
              className="
                relative z-10 inline-flex items-center gap-3
                px-5 py-3 text-base font-bold tracking-wide
                rounded-xl text-black font-cinzel
                border border-yellow-500
                bg-gradient-to-b from-yellow-500 via-yellow-600 to-orange-300
                transition-colors duration-300 group-hover:border-yellow-400
              "
              style={{ backdropFilter: "blur(6px)" }}
            >
              Explore Characters
            </span>
            <span className="absolute inset-0 rounded-2xl bg-black/70 pointer-events-none transition duration-300 group-hover:bg-black/60" />
          </MotionA>
        </MotionDiv>
      </section>
    </div>
  );
}
