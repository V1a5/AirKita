"use client";

import Link from "next/link";
import Sdg from "@/component/sdg"
import { useState } from "react";
import sdgData from "@/component/sdg_goals";

export default function Hero() {
  const [activeSDG, setActiveSDG] = useState<number | null>(null);
  return (
    <>
      <header className="relative bg-[#e0f7fa] dot-grid overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 py-10 lg:py-12 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="z-10">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#0077b6] text-white text-xs font-bold tracking-widest uppercase mb-6">
              UN Sustainable Development Goal 6
            </span>

            <h1 className="font-headline text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Wujudkan Akses{" "}
              <span className="relative inline-block">
                Air Bersih
                <span className="absolute bottom-1 left-0 w-full h-3 bg-[#26bde2]/30 -z-10"></span>
              </span>{" "}
              untuk Semua
            </h1>

            <p className="text-lg text-[#1a4a6b] text-justify mb-10 max-w-xl">
              Dikenal sebagai SDGs (Sustainable Development Goals), 17 tujuan ini adalah komitmen global untuk menciptakan dunia yang lebih adil, berkelanjutan, dan inklusif hingga tahun 2030. Dari mengakhiri kemiskinan hingga menjaga lingkungan, setiap tujuan punya ikon unik yang mewakili fokusnya dari manusia, planet, hingga kemakmuran bersama.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-[#0077b6] text-white rounded-lg font-bold flex items-center gap-2 hover:opacity-90 transition-opacity">
                Jelajahi Data
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <a href="#Sdg-section" className="px-8 py-4 border-2 border-[#0077b6] text-[#0077b6] rounded-lg font-bold hover:bg-[#e0f7fa] transition-colors">
                Pelajari SDG 6
              </a>
            </div>
          </div>

          {/* Right Content - SDG Grid */}
          <div className="relative grid grid-cols-5 gap-2 p-2">
            <div onClick={() => setActiveSDG(1)} className="w-24 h-24 bg-[#e5243b] rounded-md opacity-50 hover:opacity-100 transition-opacity hover:scale-110">
              <img src="/gambar/Goal 1/E_PRINT_01.jpg" alt="SDG 1 Icon" className="w-full h-full object-cover rounded-md" />
            </div>
            <div onClick={() => setActiveSDG(2)} className="w-24 h-24 bg-[#dda63a] rounded-md opacity-50 hover:opacity-100 transition-opacity hover:scale-110">
              <img src="/gambar/Goal 2/E_PRINT_02.jpg" alt="SDG 2 Icon" className="w-full h-full object-cover rounded-md" />
            </div>
            <div onClick={() => setActiveSDG(3)} className="w-24 h-24 bg-[#4c9f38] rounded-md opacity-50 hover:opacity-100 transition-opacity hover:scale-110">
              <img src="/gambar/Goal 3/E_PRINT_03.jpg" alt="SDG 3 Icon" className="w-full h-full object-cover rounded-md" />
            </div>
            <div onClick={() => setActiveSDG(4)} className="w-24 h-24 bg-[#c5192d] rounded-md opacity-50 hover:opacity-100 transition-opacity hover:scale-110">
              <img src="/gambar/Goal 4/E_PRINT_04.jpg" alt="SDG 4 Icon" className="w-full h-full object-cover rounded-md" />
            </div>
            <div onClick={() => setActiveSDG(5)} className="w-24 h-24 bg-[#ff3a21] rounded-md opacity-50 hover:opacity-100 transition-opacity hover:scale-110">
              <img src="/gambar/Goal 5/E_PRINT_05.jpg" alt="SDG 5 Icon" className="w-full h-full object-cover rounded-md" />
            </div>

            {/* SDG 6 MAIN — pakai GIF, col-span-2 row-span-2 */}
            <div className="col-span-2 row-span-2 bg-[#26bde2] w-52 h-50 rounded-md flex flex-col items-center justify-center text-white hover:scale-105">
              <a href="#Sdg-section">
                <img src="/gambar/Goal 6/E_GIF_06.gif" alt="SDG 6 Icon" className="w-46 h-42" />
              </a>
            </div>

            <div onClick={() => setActiveSDG(7)} className="w-24 h-24 bg-[#fcc30b] rounded-md opacity-50 hover:opacity-100 transition-opacity hover:scale-110">
              <img src="/gambar/Goal 7/E_PRINT_07.jpg" alt="SDG 7 Icon" className="w-full h-full object-cover rounded-md" />
            </div>
            <div onClick={() => setActiveSDG(8)} className="w-24 h-24 bg-[#a21942] rounded-md opacity-50 hover:opacity-100 transition-opacity hover:scale-110">
              <img src="/gambar/Goal 8/E_PRINT_08.jpg" alt="SDG 8 Icon" className="w-full h-full object-cover rounded-md" />
            </div>
            <div onClick={() => setActiveSDG(9)} className="w-24 h-24 bg-[#fd6925] rounded-md opacity-50 hover:opacity-100 transition-opacity hover:scale-110">
              <img src="/gambar/Goal 9/E_PRINT_09.jpg" alt="SDG 9 Icon" className="w-full h-full object-cover rounded-md" />
            </div>
            <div onClick={() => setActiveSDG(10)} className="w-24 h-24 bg-[#dd1367] rounded-md opacity-50 hover:opacity-100 transition-opacity hover:scale-110">
              <img src="/gambar/Goal 10/E_PRINT_10.jpg" alt="SDG 10 Icon" className="w-full h-full object-cover rounded-md" />
            </div>
            <div onClick={() => setActiveSDG(11)} className="w-24 h-24 bg-[#fd9d24] rounded-md opacity-50 hover:opacity-100 transition-opacity hover:scale-110">
              <img src="/gambar/Goal 11/E_PRINT_11.jpg" alt="SDG 11 Icon" className="w-full h-full object-cover rounded-md" />
            </div>
            <div onClick={() => setActiveSDG(12)} className="w-24 h-24 bg-[#bf8b2e] rounded-md opacity-50 hover:opacity-100 transition-opacity hover:scale-110">
              <img src="/gambar/Goal 12/E_PRINT_12.jpg" alt="SDG 12 Icon" className="w-full h-full object-cover rounded-md" />
            </div>
            <div onClick={() => setActiveSDG(13)} className="w-24 h-24 bg-[#3f7e44] rounded-md opacity-50 hover:opacity-100 transition-opacity hover:scale-110">
              <img src="/gambar/Goal 13/E_PRINT_13.jpg" alt="SDG 13 Icon" className="w-full h-full object-cover rounded-md" />
            </div>
            <div onClick={() => setActiveSDG(14)} className="w-24 h-24 bg-[#0a97d9] rounded-md opacity-50 hover:opacity-100 transition-opacity hover:scale-110">
              <img src="/gambar/Goal 14/E_PRINT_14.jpg" alt="SDG 14 Icon" className="w-full h-full object-cover rounded-md" />
            </div>
            <div onClick={() => setActiveSDG(15)} className="w-24 h-24 bg-[#56b3cd] rounded-md opacity-50 hover:opacity-100 transition-opacity hover:scale-110">
              <img src="/gambar/Goal 15/E_PRINT_15.jpg" alt="SDG 15 Icon" className="w-full h-full object-cover rounded-md" />
            </div>
            <div onClick={() => setActiveSDG(16)} className="w-24 h-24 bg-[#00689d] rounded-md opacity-50 hover:opacity-100 transition-opacity hover:scale-110">
              <img src="/gambar/Goal 16/E_PRINT_16.jpg" alt="SDG 16 Icon" className="w-full h-full object-cover rounded-md" />
            </div>
            <div onClick={() => setActiveSDG(17)} className="w-24 h-24 bg-[#19486a] rounded-md opacity-50 hover:opacity-100 transition-opacity hover:scale-110">
              <img src="/gambar/Goal 17/E_PRINT_17.jpg" alt="SDG 17 Icon" className="w-full h-full object-cover rounded-md" />
            </div>
          </div>
        </div>
      </header>

      {/* Popup goals */}
      {activeSDG && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setActiveSDG(null)}
        >
          <div
            className="bg-white p-6 rounded-xl max-w-md text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveSDG(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            >
              ✕
            </button>

            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {sdgData[activeSDG as keyof typeof sdgData]?.title}
            </h1>

            <h2 className="text-lg font-semibold text-gray-700 mb-3">
              Tujuan
            </h2>

            <p className="text-gray-700">
              {sdgData[activeSDG as keyof typeof sdgData]?.desc}
            </p>
          </div>
        </div>
      )}
    </>
  );
}