export default function Matrix() {
    const parameters = [
        {
            name: "Apa yang mereka sediakan?",
            jsdp: "Pembangunan dan pengelolaan sistem sanitasi, termasuk jaringan pembuangan limbah, pengolahan air limbah, dan manajemen limbah padat.",
            parumdaPaljya: "Layanan pengelolaan air limbah domestik, seperti sedot tinja, tangki septik biofilter, pengolahan air limbah, air daur ulang, dan sistem perpipaan limbah.",
            IPAL_SANFAB: "Pengumpulan, pengolahan, dan pembuangan limbah air yang telah terkontaminasi, seperti limbah domestik dan sanitasi darurat.",
        },
        {
            name: "Siapa target audiens mereka? - misalnya kelompok usia / budaya / pemerintah / sekolah / kelompok masyarakat",
            jsdp: "Target audiens utama Jakarta Sewerage Development Project (JSDP) adalah seluruh masyarakat Jakarta, terutama penduduk di wilayah yang akan dilayani oleh sistem perpipaan air limbah, seperti Zona 1 dan Zona 6.",
            parumdaPaljya: "Target audiens Perumda Paljaya adalah rumah tangga di kawasan Jakarta, gedung & perkantoran, serta industri kecil-menengah.",
            IPAL_SANFAB: "IPAL SANFAB dapat menargetkan rumah tangga, komunitas atau permukiman dan fasilitas kesehatan.",
        },
        {
            name: "User Engagement",
            jsdp: "JSDP (Jakarta Sewerage Development Project) bersifat gratis bagi warga Jakarta.Tidak ada biaya langsung yang dikenakan kepada masyarakat untuk mengakses sistem pengelolaan air limbah terpusat ini setelah selesai dibangun.Biaya pembangunan dan operasional ditanggung oleh APBN dan APBD.",
            parumdaPaljya: "Mayoritas berbayar dan disesuaikan dengan luas bangunan. Misalnya untuk perpipaan,  biayanya berkisar antara Rp600.000 hingga Rp1.200.000 tergantung luas bangunan.",
            IPAL_SANFAB: "Sistem SANFAB pada umumnya memiliki biaya pengadaan dan pemasangan.",
        },
        {
            name: "Kesenjangan apa yang Anda lihat dalam layanan atau produk mereka? – siapa yang ketinggalan dengan layanan ini?",
            jsdp: "Wilayah pinggiran kota, permukiman informal, dan masyarakat miskin urban masih kurang terjangkau; saat ini cakupan sistem sanitasi di Jakarta hanya sekitar 12%.",
            parumdaPaljya: "Belum menjangkau seluruh wilayah Jakarta, banyak warga yang belum terhubung ke sistem perpipaan, dan kesadaran masyarakat yang masih rendah dalam hal sanitasi yang baik.",
            IPAL_SANFAB: "Tidak dapat mengolah jumlah beban limbah yang lebih besar dari desain sistem dan perawatan lumpur masih belum maksimal. Layanan ini tentunya juga masih berbayar hingga tidak mudah terakses seluruh masyarakat",
        },
        {
            name: "Wawasan lainnya",
            jsdp: "Proyek ini menggunakan metode jacking pipe untuk meminimalkan gangguan lalu lintas, dan ditargetkan selesai pada 2050 untuk mencapai 100% cakupan sanitasi.",
            parumdaPaljya: "Meskipun Perumda PAL Jaya telah menyediakan berbagai layanan komprehensif mulai dari pengolahan air limbah, teknologi septic tank, hingga daur ulang air, pendekatan yang digunakan masih cenderung berorientasi pada layanan teknis dan belum sepenuhnya terintegrasi secara digital maupun berfokus pada pengalaman pengguna.",
            IPAL_SANFAB: "Secara teknis, IPAL SANFAB sudah sangat baik untuk penggunaan di rumah tangga dan komunal, namun secara skala besar masih terdapat kendala dalam desain yang kurang memadai dan biaya yang tidak selalu terjangkau bagi masyarakat yang membutuhkan.",
        },
    ];

    return (
        <section className="bg-white py-16 lg:py-20">
            <div className="max-w-6xl mx-auto px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl font-bold text-[#1f2937] mb-3">
                        Matriks Perbandingan Solusi
                    </h2>
                    <p className="text-[#6b7280] text-sm">
                        Analisis mendalam terhadap alternatif pengelolaan air saat ini.
                    </p>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        {/* Table Header */}
                        <thead>
                            <tr>
                                <th className="text-left text-xs font-bold text-[#6b7280] uppercase tracking-wider p-4 bg-gray-50 border-b border-gray-200 w-1/5">
                                    Solusi yang sudah ada: nama perusahaan atau provider
                                </th>
                                <th className="text-left text-xs font-bold text-white uppercase tracking-wider p-4 bg-[#0077b6] border-b border-[#0077b6] w-1/4">
                                    JSDP (Jakarta Sewerage Development Project)
                                </th>
                                <th className="text-left text-xs font-bold text-[#6b7280] uppercase tracking-wider p-4 bg-gray-50 border-b border-gray-200 w-1/4">
                                    Perumda Paljaya
                                </th>
                                <th className="text-left text-xs font-bold text-[#6b7280] uppercase tracking-wider p-4 bg-gray-50 border-b border-gray-200 w-1/4">
                                    IPAL SANFAB
                                </th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody>
                            {parameters.map((param, index) => (
                                <tr
                                    key={param.name}
                                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50/50"}
                                >
                                    <td className="p-4 border-b border-gray-100">
                                        <span className="font-semibold text-[#1f2937] text-sm">
                                            {param.name}
                                        </span>
                                    </td>
                                    <td className="p-4 border-b border-gray-100 bg-[#e0f4fb]">
                                        <span className="text-sm text-[#1a4a6b] leading-relaxed">
                                            {param.jsdp}
                                        </span>
                                    </td>
                                    <td className="p-4 border-b border-gray-100">
                                        <span className="text-sm text-[#6b7280] leading-relaxed">
                                            {param.parumdaPaljya}
                                        </span>
                                    </td>
                                    <td className="p-4 border-b border-gray-100">
                                        <span className="text-sm text-[#6b7280] leading-relaxed">
                                            {param.IPAL_SANFAB}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}