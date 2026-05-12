export default function Hero() {
    return (
        <section className="bg-[#fff8f0] py-12 overflow-hidden">
            <div className="max-w-7xl mx-auto px-8">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-xs font-medium tracking-wider uppercase mb-6">
                    <span className="text-gray-500">Beranda</span>
                    <span className="text-gray-400">/</span>
                    <span className="text-[#9b4500] font-semibold">
                        Ideation
                    </span>
                </div>

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ffe9d6] text-[#9b4500] text-xs font-semibold mb-6 border border-[#ffd2ad]">
                    <span>💡</span>
                    <span>Brainstorming Solusi SDG 6.2</span>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    {/* Left */}
                    <div>
                        {/* Title */}
                        <h1 className="font-headline text-5xl lg:text-6xl font-extrabold text-[#1f2937] leading-tight mb-5">
                            Ideation
                        </h1>

                        {/* Description */}
                        <p className="text-[#584236] text-lg leading-relaxed mb-8 max-w-2xl">
                            Tahap ideation dilakukan untuk mengeksplorasi berbagai
                            kemungkinan solusi terhadap permasalahan sanitasi dan
                            higiene di lingkungan pendidikan. Proses ini dilakukan
                            menggunakan mind map untuk menghubungkan akar masalah,
                            dampak, stakeholder, dan alternatif solusi secara
                            terbuka serta terstruktur.
                        </p>

                        {/* Info Cards */}
                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                                <p className="text-sm text-gray-500 mb-2">
                                    Tool yang Dipilih
                                </p>

                                <h3 className="font-bold text-lg text-gray-800">
                                    Canva Mind Map
                                </h3>

                                <p className="text-sm text-gray-600 mt-2">
                                    Digunakan untuk memetakan hubungan antara
                                    masalah sanitasi, penyebab, dampak, dan solusi.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                                <p className="text-sm text-gray-500 mb-2">
                                    Fokus Ideation
                                </p>

                                <h3 className="font-bold text-lg text-gray-800">
                                    SDG 6.2
                                </h3>

                                <p className="text-sm text-gray-600 mt-2">
                                    Sanitasi layak, akses hygiene, dan monitoring
                                    fasilitas lingkungan publik.
                                </p>
                            </div>
                        </div>

                        {/* Button */}
                        {/* <div className="flex flex-wrap gap-3">
                            <button className="px-6 py-3 bg-[#26bde2] text-white rounded-full text-sm font-semibold hover:bg-[#1fa3c4] transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2">
                                <span>🧠</span>
                                Eksplorasi Solusi Sanitasi
                            </button>

                            <button className="px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center gap-2">
                                <span>📌</span>
                                Mind Mapping Process
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}