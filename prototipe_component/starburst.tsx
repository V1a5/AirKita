export default function StarburstSection() {
  const items = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#3b82f6]" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
        </svg>
      ),
      title: "WHAT",
      description: "Isu pelaporan kerusakan sanitasi manual yang lambat. Solusi: Pelaporan terintegrasi via QR Code.",
      bgColor: "bg-[#eff6ff]",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#22c55e]" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
        </svg>
      ),
      title: "WHO",
      description: "Mahasiswa, Dosen, Bagian Sarana dan Prasarana (SatPras), dan tim Cleaning Service kampus.",
      bgColor: "bg-[#f0fdf4]",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#f59e0b]" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
        </svg>
      ),
      title: "WHY",
      description: "Meningkatkan produktivitas belajar, menjaga kesehatan civitas, dan mendukung citra Green Campus UNJ.",
      bgColor: "bg-[#fffbeb]",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#06b6d4]" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
        </svg>
      ),
      title: "HOW",
      description: "Scan QR → Isi Form Singkat → Notifikasi Email Otomatis → Koordinasi Admin → Tindakan Vendor.",
      bgColor: "bg-[#ecfeff]",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8b5cf6]" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      ),
      title: "WHERE",
      description: "Seluruh lingkungan UNJ (Fakultas, Perpustakaan, Kantin) melalui platform mobile-first.",
      bgColor: "bg-[#f5f3ff]",
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="font-headline text-3xl font-bold text-[#1f2937] mb-3">
            Starburst — Tinjauan & Penyempurnaan Solusi
          </h2>
          <p className="text-[#6b7280] text-sm max-w-2xl">
            Analisis komprehensif menggunakan kerangka kerja 4W1H untuk memvalidasi efektivitas solusi digital AirKita.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map((item) => (
            <div 
              key={item.title}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Icon */}
              <div className={`w-12 h-12 ${item.bgColor} rounded-full flex items-center justify-center mb-4`}>
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-headline font-bold text-[#1f2937] mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#6b7280] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}