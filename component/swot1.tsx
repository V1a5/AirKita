"use client";

export default function Swot1() {
    return (
        <section className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 flex flex-col items-center py-16 px-6">

            {/* Title */}
            <div className="text-center max-w-2xl">
                <h1 className="text-3xl font-bold text-gray-800">
                    Analisis SWOT untuk Target SDG 6.2
                </h1>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                    Pada tahun 2030, mencapai akses terhadap sanitasi dan kebersihan yang memadai dan merata bagi semua, dan menghentikan praktik buang air besar di tempat terbuka, memberikan perhatian khusus pada kebutuhan kaum perempuan, serta kelompok masyarakat rentan.
                </p>
            </div>

            {/* Grid SWOT */}
            <div className="relative mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl perspective-[1000px]">

                {/* Strength */}
                <div className="bg-green-100/80 backdrop-blur p-6 rounded-xl shadow-lg 
                hover:shadow-2xl transition-all duration-300 
                hover:-translate-y-2 hover:scale-[1.02] 
                hover:rotate-[0.5deg] border border-green-200">

                    <h2 className="font-semibold text-green-800 mb-3">
                        Kekuatan (Strengths)
                    </h2>

                    <ul className="text-sm text-green-700 list-disc pl-5 space-y-2">
                        <li className="text-justify leading-relaxed">
                            Peningkatan Akses Sanitasi Layak: Hingga tahun 2024, persentase rumah tangga yang memiliki akses sanitasi layak mencapai 85,37%, menunjukkan komitmen kuat pemerintah dalam penyediaan infrastruktur dasar.
                        </li>
                    </ul>

                    <a href="https://www.bps.go.id/id/statistics-table/2/ODM0IzI=/persentase-rumah-tangga-yang-memiliki-akses-terhadap-sanitasi-layak-menurut-provinsi-dan-klasifikasi-desa.html"
                        className="block mt-4 text-xs text-gray-500 hover:text-green-700 transition"
                        target="_blank"
                        rel="noopener noreferrer">
                        BPS, 2025
                    </a>
                </div>

                {/* Weakness */}
                <div className="bg-red-100/80 backdrop-blur p-6 rounded-xl shadow-lg 
                hover:shadow-2xl transition-all duration-300 
                hover:-translate-y-2 hover:scale-[1.02] 
                hover:-rotate-[0.5deg] border border-red-200">

                    <h2 className="font-semibold text-red-800 mb-3">
                        Kelemahan (Weaknesses)
                    </h2>

                    <ul className="text-sm text-red-700 list-disc pl-5 space-y-2">
                        <li className="text-justify leading-relaxed">
                            Keterbatasan Anggaran Daerah: Pasca desentralisasi, banyak pemerintah daerah masih memberikan prioritas rendah pada anggaran sanitasi dibandingkan infrastruktur jalan.
                        </li>
                    </ul>

                    <a href="https://karyakreatif.co.id/sanitasi-di-indonesia/"
                        className="block mt-4 text-xs text-gray-500 hover:text-red-700 transition"
                        target="_blank"
                        rel="noopener noreferrer">
                        Karya Kreatif, 2025
                    </a>
                </div>

                {/* Opportunities */}
                <div className="bg-blue-100/80 backdrop-blur p-6 rounded-xl shadow-lg 
                hover:shadow-2xl transition-all duration-300 
                hover:-translate-y-2 hover:scale-[1.02] 
                hover:rotate-[0.5deg] border border-blue-200">

                    <h2 className="font-semibold text-blue-800 mb-3">
                        Peluang (Opportunities)
                    </h2>

                    <ul className="text-sm text-blue-700 list-disc pl-5 space-y-2">
                        <li className="text-justify leading-relaxed">
                            Intervensi Kesehatan Terpadu: Penyediaan air bersih dan sanitasi layak memiliki potensi besar untuk mempercepat penurunan angka stunting di Indonesia.
                        </li>
                    </ul>

                    <a href="https://lestari.kompas.com/read/2023/07/15/080000286/air-bersih-dan-sanitasi-layak-bantu-turunkan-angka-stunting"
                        className="block mt-4 text-xs text-gray-500 hover:text-blue-700 transition"
                        target="_blank"
                        rel="noopener noreferrer">
                        Kompas, 2023
                    </a>
                </div>

                {/* Threats */}
                <div className="bg-yellow-100/80 backdrop-blur p-6 rounded-xl shadow-lg 
                hover:shadow-2xl transition-all duration-300 
                hover:-translate-y-2 hover:scale-[1.02] 
                hover:-rotate-[0.5deg] border border-yellow-200">

                    <h2 className="font-semibold text-yellow-800 mb-3">
                        Ancaman (Threats)
                    </h2>

                    <ul className="text-sm text-yellow-700 list-disc pl-5 space-y-2">
                        <li className="text-justify leading-relaxed">
                            Urbanisasi dan perubahan iklim memicu krisis air bersih serta risiko penyakit hingga 35%, yang diperparah oleh kebijakan publik yang belum sinkron dalam melindungi cadangan air tanah.
                        </li>
                    </ul>

                    <a href="https://agridigi.fkp.unesa.ac.id/post/krisis-air-bersih-di-indonesia-2025-antara-urbanisasi-iklim-dan-kebijakan-publik"
                        className="block mt-4 text-xs text-gray-500 hover:text-yellow-700 transition"
                        target="_blank"
                        rel="noopener noreferrer">
                        AgriDigi, 2024
                    </a>
                </div>

                {/* Floating Center Badge */}
                <div className="hidden md:flex absolute inset-0 items-center justify-center pointer-events-none">
                    <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-full px-6 py-6 text-center border border-gray-200">
                        <p className="text-xs text-gray-500">SDG 6</p>
                        <p className="font-semibold text-sm text-gray-800">
                            Target 6.2
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}