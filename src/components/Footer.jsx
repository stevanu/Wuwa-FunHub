import React from "react";

function Footer() {
  return (
    <footer className="py-8 text-center border-t border-gray-700 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Garis tipis bercahaya di atas */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-pulse"></div>

      {/* Teks utama */}
      <p className="text-gray-300 text-sm sm:text-base">
        © {new Date().getFullYear()} Wuthering Wave Fan Hub. All rights
        reserved.
      </p>

      {/* Teks by Ren */}
      <p className="mt-2 text-sm sm:text-base">
        <span className="text-gray-400">Created By</span>{" "}
        <a
          href="https://discord.gg/Y9Fft5tq"
          target="_blank"
          rel="noopener noreferrer"
          className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 font-semibold hover:drop-shadow-[0_0_5px_rgba(0,200,255,0.8)] transition-all duration-300 cursor-pointer"
        >
          Ren
        </a>
      </p>
    </footer>
  );
}

export default Footer;
