export default function Hero() {
    return (
        <section className="bg-[#e0f7fa] py-8">
            <div className="max-w-7xl mx-auto px-8">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-xs font-medium tracking-wider uppercase mb-6">
                    <span className="text-gray-500">Beranda</span>
                    <span className="text-gray-400">/</span>
                    <span className="text-[#0077b6] font-semibold">Empati & Penelitian</span>
                </div>

                {/* Title */}
                <h1 className="font-headline text-5xl lg:text-6xl font-extrabold text-[#1f2937] leading-tight mb-2">
                    Empati &
                </h1>
                <h1 className="font-headline text-5xl lg:text-6xl font-extrabold text-[#0077b6] leading-tight mb-6">
                    Penelitian
                </h1>

                {/* Description */}
                <p className="text-[#1a4a6b] text-lg leading-relaxed max-w-2xl mb-8">
                    Membedah akar permasalahan sanitasi di lingkungan pendidikan
                    Indonesia melalui pendekatan berbasis data dan kacamata empati
                    untuk menciptakan solusi yang berdampak dan berkelanjutan.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3">
                    <button className="px-6 py-3 bg-[#0077b6] text-white rounded-full text-sm font-semibold hover:bg-[#005f8e] transition-colors flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                        </svg>
                        SDG 6.2: Sanitasi & Higienis
                    </button>
                </div>
            </div>
        </section>
    );
}