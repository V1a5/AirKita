export default function Hero() {
    return (
        <section className="bg-[#e0f7fa] py-12 overflow-hidden">
            <div className="max-w-7xl mx-auto px-8">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-xs font-medium tracking-wider uppercase mb-6">
                    <span className="text-gray-500">Beranda</span>
                    <span className="text-gray-400">/</span>
                    <span className="text-[#0077b6] font-semibold">
                        Pengujian dan Peninjauan
                    </span>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    {/* Left */}
                    <div>
                        {/* Title */}
                        <h1 className="font-headline text-5xl lg:text-6xl font-extrabold text-[#1f2937] leading-tight mb-5">
                            Pengujian dan Peninjauan
                        </h1>

                        {/* Description */}
                        <p className="text-[#1a4a6b] text-lg leading-relaxed mb-8 max-w-2xl">
                            Tahap pengujian dan peninjauan dilakukan untuk mengevaluasi solusi yang telah dihasilkan pada tahap prototipe.
                        </p>


                    </div>
                </div>
            </div>
        </section>
    );
}