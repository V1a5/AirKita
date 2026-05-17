export default function FourWOneH() {
    return (
        <section className="bg-white py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-8">
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-10">
                    <div className="w-8 h-8 bg-[#0077b6] rounded-md flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <h2 className="font-headline text-2xl font-bold text-[#1f2937]">
                        Kerangka Kerja 4W1H
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* WHO */}
                    <div className="bg-white border border-[#cce7f5] rounded-xl p-6 shadow-sm hover:border-[#0077b6] transition-colors">
                        <span className="text-[#0077b6] text-xs font-bold tracking-wider uppercase mb-3 block">
                            WHO
                        </span>
                        <h3 className="font-headline font-bold text-[#1f2937] mb-2">
                            Target Audiens
                        </h3>
                        <p className="text-sm text-[#1a4a6b] leading-relaxed">
                            Mahasiswa aktif yang dihubungi melalui grup WhatsApp kampus.
                        </p>
                    </div>

                    {/* WHY */}
                    <div className="bg-white border border-[#cce7f5] rounded-xl p-6 shadow-sm hover:border-[#0077b6] transition-colors">
                        <span className="text-[#0077b6] text-xs font-bold tracking-wider uppercase mb-3 block">
                            WHY
                        </span>
                        <h3 className="font-headline font-bold text-[#1f2937] mb-2">
                            Akar Masalah
                        </h3>
                        <p className="text-sm text-[#1a4a6b] leading-relaxed">
                            Untuk mengumpulkan data primer langsung dari pengguna fasilitas sanitasi sehari-hari 
                            guna mengidentifikasi kesenjangan nyata antara kondisi sanitasi yang ada dengan 
                            standar SDG 6 Target 6.2 khususnya aspek yang belum terlihat dari data makro BPS/pemerintah.
                        </p>
                    </div>

                    {/* WHAT */}
                    <div className="bg-white border border-[#cce7f5] rounded-xl p-6 shadow-sm hover:border-[#0077b6] transition-colors">
                        <span className="text-[#0077b6] text-xs font-bold tracking-wider uppercase mb-3 block">
                            WHAT
                        </span>
                        <h3 className="font-headline font-bold text-[#1f2937] mb-2">
                            Masalah Inti
                        </h3>
                        <p className="text-sm text-[#1a4a6b] leading-relaxed">
                            Kondisi akses sanitasi responden mencakup 3 dimensi: kepemilikan & jenis fasilitas toilet pribadi, 
                            kualitas infrastruktur sanitasi publik (drainase & toilet kampus), 
                            dan praktik hygiene personal termasuk kebutuhan spesifik gender (menstrual hygiene).
                        </p>
                    </div>

                    {/* HOW - Blue */}
                    <div className="bg-[#0077b6] rounded-xl p-6 text-white">
                        <span className="text-white/80 text-xs font-bold tracking-wider uppercase mb-3 block">
                            HOW
                        </span>
                        <h3 className="font-headline font-bold text-white mb-2">
                            Metodologi & Dampak
                        </h3>
                        <p className="text-sm text-white/90 leading-relaxed">
                            Survei Google Form dengan 9 pertanyaan terstruktur (3 bagian) disebarkan melalui grup WhatsApp mahasiswa. Menggunakan format Multiple Choice untuk data faktual (Q1–Q5, Q8) 
                            dan Skala Likert 1–5 untuk mengukur persepsi (Q6, Q7, Q9). Responden mengisi secara anonim sehingga jawaban lebih jujur dan objektif. Total terkumpul 23 responden dalam periode 18–22 April 2026.
                        </p>
                    </div>

                    {/* WHERE - Image */}
                    <div className="md:col-span-2 relative rounded-xl overflow-hidden min-h-[200px]">
                        <img
                            src="/gambar/lokasi.jpg"
                            alt="DKI Jakarta"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0"></div>
                        <div className="absolute bottom-0 left-0 p-6">
                            <span className="text-white/80 text-xs font-bold tracking-wider uppercase mb-2 block">
                                WHERE
                            </span>
                            <h3 className="font-headline font-bold text-white text-lg">
                                Disebarkan secara digital melalui grup WhatsApp mahasiswa sehingga responden mencerminkan kondisi 
                                sanitasi di lingkungan kampus, kost/kontrakan sekitar kampus, dan tempat tinggal pribadi mahasiswa aktif.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}