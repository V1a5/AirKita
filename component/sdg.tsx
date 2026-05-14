export default function AboutSDG() {
  return (
    <section id="Sdg-section" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-start">
        {/* Left Content */}
        <div>
          <span className="inline-flex items-center px-4 py-1.5 rounded-lg bg-[#0e9f6e] text-white text-xs font-bold tracking-widest uppercase mb-6">
            Tujuan PBB No. 6
          </span>

          <h2 className="font-headline text-4xl font-extrabold text-[#191c1e] mb-8">
            Apa itu SDG 6?
          </h2>

          <p className="text-[#1a4a6b] text-lg mb-12 leading-relaxed">
            Tujuan ini bertujuan untuk menjamin ketersediaan serta pengelolaan
            air bersih dan sanitasi yang berkelanjutan untuk semua orang pada
            tahun 2030 — mencakup akses universal, kualitas air, dan praktik
            kebersihan yang layak.
          </p>

          <div className="space-y-6">
            {/* Target 6.1 */}
            <div className="flex gap-6 p-6 rounded-xl bg-[#e0f7fa] border-l-[4px] border-[#0077b6]">
              <div className="flex-shrink-0">
                <span className="bg-[#0077b6] text-white px-3 py-1 rounded text-sm font-bold">
                  6.1
                </span>
              </div>
              <div>
                <h4 className="font-bold text-[#191c1e] mb-2">
                  Akses Air Minum yang Aman dan Terjangkau
                </h4>
                <p className="text-sm text-[#1a4a6b]">
                  Pada tahun 2030, mencapai akses universal dan merata terhadap
                  air minum yang aman dan terjangkau bagi semua orang.
                </p>
              </div>
            </div>

            {/* Target 6.2 */}
            <div className="flex gap-6 p-6 rounded-xl bg-[#e0f7fa] border-l-[4px] border-[#0077b6]">
              <div className="flex-shrink-0">
                <span className="bg-[#0077b6] text-white px-3 py-1 rounded text-sm font-bold">
                  6.2
                </span>
              </div>
              <div>
                <h4 className="font-bold text-[#191c1e] mb-2">
                  Sanitasi & Kebersihan Layak untuk Semua
                </h4>
                <p className="text-sm text-[#1a4a6b]">
                  Pada tahun 2030, mencapai akses terhadap sanitasi dan kebersihan
                  yang memadai dan merata bagi semua orang, menghentikan praktik
                  buang air besar sembarangan (BABS), dengan perhatian khusus pada
                  kebutuhan perempuan, anak perempuan, dan kelompok rentan.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:sticky lg:top-32 space-y-8">
          <div className="rounded-xl overflow-hidden aspect-square flex flex-col items-center justify-center">
            <img
              src="/gambar/Goal 6/6_SDG_MakeEveryDayCount_Gifs_GDU.gif"
              alt="SDG 6 - Air Bersih dan Sanitasi"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          <div className="border-l-4 border-[#0077b6] pl-6 py-2">
            <p className="text-[#0077b6] italic text-xl font-medium leading-relaxed">
              "Air adalah hak asasi manusia. Tanpa sanitasi yang layak, kesehatan,
              martabat, dan masa depan jutaan orang terancam."
            </p>
            <p className="mt-4 text-sm font-bold text-[#1a4a6b] uppercase tracking-widest">
              — UN Water, SDG 6
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}