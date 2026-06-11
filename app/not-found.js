import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#e6f3ff] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* 404 Code */}
        <h1 className="font-headline text-8xl font-black text-[#26bde2] mb-2">
          404
        </h1>

        {/* Title */}
        <h2 className="font-headline text-2xl font-bold text-[#1f2937] mb-4">
          Halaman Tidak Ditemukan
        </h2>

        {/* Description */}
        <p className="text-[#6b7280] mb-2 leading-relaxed">
          Masih tahap Development, halaman ini belum tersedia. Jangan khawatir, saya sedang bekerja keras untuk menyelesaikannya!
        </p>

        {/* SDG 6 Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#26bde2]/10 rounded-full mb-8">
          <span className="w-2 h-2 bg-[#26bde2] rounded-full"></span>
          <span className="text-sm text-[#26bde2] font-semibold">
            SDG 6 - Air Bersih dan Sanitasi
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="px-8 py-3 bg-[#26bde2] text-white rounded-lg font-semibold hover:bg-[#1fa3c4] transition-colors shadow-lg shadow-[#26bde2]/25 flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            Kembali ke Beranda
          </Link>
        
        </div>

        {/* Water Wave Decoration */}
        <div className="mt-12 flex justify-center gap-1 opacity-30">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="w-1 bg-[#26bde2] rounded-full"
              style={{ 
                height: `${Math.sin(i * 0.5) * 20 + 24}px`,
                opacity: 0.3 + (i % 3) * 0.2
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}