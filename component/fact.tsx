export default function Facts() {
  const facts = [
    {
      stat: "93,22%",
      trend: "positive",
      label: "Akses Air Minum Layak",
      desc: "Indonesia mencapai 93,22% akses air minum layak secara nasional — tren positif yang terus meningkat dari tahun ke tahun.",
      source: "BPS, 2025",
      href: "https://www.bps.go.id/id/statistics-table/2/ODU0IzI=/persentase-rumah-tangga-yang-memiliki-akses-terhadap-sumber-air-minum-layak-menurut-provinsi-dan-klasifikasi-desa--persen-.html",
      icon: "💧",
    },
    {
      stat: "58%",
      trend: "negative",
      label: "Sekolah Tanpa Sanitasi Layak",
      desc: "Sekitar 58% sekolah di Indonesia masih kekurangan layanan sanitasi dasar yang memadai bagi para siswanya.",
      source: "UNICEF, 2025",
      href: "https://www.unicef.org/indonesia/id/wash/laporan/wash-acts-edisi-2025",
      icon: "🏫",
    },
    {
      stat: "2,35%",
      trend: "positive",
      label: "Angka BABS Nasional",
      desc: "Indonesia berhasil menekan praktik Buang Air Besar Sembarangan (BABS) hingga tersisa 2,35% — pencapaian besar menuju target SDG 6.2.",
      source: "UNICEF, 2025",
      href: "https://www.unicef.org/indonesia/id/wash/laporan/wash-acts-edisi-2025",
      icon: "✅",
    },
    {
      stat: "89,75%",
      trend: "negative",
      label: "Sanitasi Belum Aman",
      desc: "Sebanyak 89,75% rumah tangga di Indonesia belum menikmati akses sanitasi yang dikategorikan sebagai layanan \"aman\" sepenuhnya.",
      source: "UNICEF, 2025",
      href: "https://www.unicef.org/indonesia/id/wash/laporan/wash-acts-edisi-2025",
      icon: "⚠️",
    },
    {
      stat: "80%",
      trend: "positive",
      label: "Fasilitas Cuci Tangan",
      desc: "Sebanyak 80% rumah tangga Indonesia sudah memiliki fasilitas cuci tangan dengan sabun dan air sebagai bagian dari peningkatan hygiene.",
      source: "GoodStats, 2024",
      href: "https://data.goodstats.id/statistic/80-rumah-tangga-indonesia-sudah-punya-fasilitas-cuci-tangan-dengan-sabun-dan-air-Y37IK",
      icon: "🧼",
    },
  ];

  return (
    <section className="bg-[#f0f9ff] py-20">
      <div className="max-w-7xl mx-auto px-8">

        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 bg-[#0077b6]/10 text-[#0077b6] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zm6-4a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zm6-3a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
            Data & Fakta
          </div>
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-[#0a1628] mb-3">
            Fakta Sanitasi & Air Bersih Indonesia
          </h2>
        </div>

        {/* Cards Grid — 3 col top + 2 col bottom centered */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {facts.slice(0, 3).map((fact, i) => (
            <FactCard key={i} fact={fact} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {facts.slice(3).map((fact, i) => (
            <FactCard key={i} fact={fact} />
          ))}
        </div>

      </div>
    </section>
  );
}

function FactCard({ fact }: { fact: any }) {
  const isPositive = fact.trend === "positive";
  return (
    <div className="group bg-white rounded-2xl p-7 border border-[#cce7f5] hover:border-[#0077b6] hover:shadow-lg transition-all duration-300 relative overflow-hidden">

      {/* Top accent bar */}
      <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl ${isPositive ? "bg-[#0e9f6e]" : "bg-[#e63946]"}`} />

      {/* Icon + trend badge */}
      <div className="flex items-start justify-between mb-4 mt-2">
        <span className="text-3xl">{fact.icon}</span>
        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
          isPositive
            ? "bg-[#d1fae5] text-[#065f46]"
            : "bg-[#fee2e2] text-[#991b1b]"
        }`}>
          {isPositive ? "▲ Positif" : "▼ Perhatian"}
        </span>
      </div>

      {/* Stat */}
      <p className={`text-4xl font-extrabold font-headline mb-1 ${
        isPositive ? "text-[#0077b6]" : "text-[#e63946]"
      }`}>
        {fact.stat}
      </p>

      {/* Label */}
      <p className="text-[#0a1628] font-bold text-sm mb-2">{fact.label}</p>

      {/* Divider */}
      <div className="h-px bg-[#e0f4fb] mb-3" />

      {/* Description */}
      <p className="text-[#1a4a6b] text-sm leading-relaxed mb-4">{fact.desc}</p>

      {/* Source */}
      <a
        href={fact.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-[#0077b6] text-xs font-semibold hover:underline"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
        </svg>
        {fact.source}
      </a>
    </div>
  );
}