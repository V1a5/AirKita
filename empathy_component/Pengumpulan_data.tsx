"use client";

import { useState } from "react";
import Image from "next/image";

export default function RancanganPengumpulanData() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const sections = [
        {
            title: "Bagian 1",
            subtitle: "Akses Sanitasi Dasar & Lingkungan",
            description:
                "Bagian ini bertujuan untuk mengetahui fasilitas dasar yang dimiliki responden.",
            items: [
                {
                    no: 1,
                    question:
                        "Apakah tempat tinggal Anda saat ini memiliki fasilitas toilet pribadi?",
                    image: "/gambar/data_gform/data1.jpg",
                    options: ["Ya", "Tidak (menggunakan toilet umum/bersama)"],
                    type: "YES/NO",
                },
                {
                    no: 2,
                    question:
                        "Jenis fasilitas sanitasi apa yang paling sering Anda gunakan sehari-hari?",
                    image: "/gambar/data_gform/data2.jpg",
                    options: [
                        "Toilet leher angsa dengan tangki septik (septic tank)",
                        "Jamban cemplung / tanpa tangki septik",
                        "Toilet umum berbayar / fasilitas komunal",
                        "Lainnya",
                    ],
                    type: "MULTIPLE CHOICE",
                },
                {
                    no: 3,
                    question:
                        "Ke manakah aliran pembuangan akhir dari toilet/fasilitas sanitasi Anda?",
                    image: "/gambar/data_gform/data3.jpg",
                    options: [
                        "Tangki septik (septic tank) yang disedot secara berkala",
                        "Langsung ke selokan / sungai / sistem drainase",
                        "Tidak tahu / tidak yakin",
                    ],
                    type: "MULTIPLE CHOICE",
                },
            ],
        },

        {
            title: "Bagian 2",
            subtitle: "Sanitasi Fasilitas Publik & Lingkungan Kampus",
            description:
                "Pertanyaan ini mengevaluasi infrastruktur sanitasi di luar rumah.",
            items: [
                {
                    no: 4,
                    question:
                        "Apakah sistem drainase di lingkungan publik yang sering Anda kunjungi berfungsi dengan baik?",
                    image: "/gambar/data_gform/data4.jpg",
                    options: [
                        "Ya, berfungsi dengan baik",
                        "Tidak, sering bermasalah",
                    ],
                    type: "YES/NO",
                },
                {
                    no: 5,
                    question:
                        "Seberapa sering Anda menemui masalah genangan air akibat drainase yang buruk?",
                    image: "/gambar/data_gform/data5.jpg",
                    options: [
                        "Sangat Sering",
                        "Kadang-kadang",
                        "Jarang",
                        "Tidak Pernah",
                    ],
                    type: "MULTIPLE CHOICE",
                },
                {
                    no: 6,
                    question:
                        '“Fasilitas toilet publik di lingkungan kegiatan saya terawat dengan baik dan layak digunakan.”',
                    image: "/gambar/data_gform/data6.jpg",
                    options: [
                        "1 - Sangat Tidak Setuju",
                        "2 - Tidak Setuju",
                        "3 - Netral",
                        "4 - Setuju",
                        "5 - Sangat Setuju",
                    ],
                    type: "LIKERT",
                },
            ],
        },

        {
            title: "Bagian 3",
            subtitle: "Praktik Kebersihan (Hygiene) & Kebutuhan Khusus",
            description:
                "Berfokus pada praktik kebersihan dan akses sanitasi yang layak.",
            items: [
                {
                    no: 7,
                    question:
                        "Fasilitas cuci tangan lengkap dengan air bersih dan sabun selalu tersedia di sekitar saya.",
                    image: "/gambar/data_gform/data7.jpg",
                    options: [
                        "1 - Sangat Tidak Setuju",
                        "2 - Tidak Setuju",
                        "3 - Netral",
                        "4 - Setuju",
                        "5 - Sangat Setuju",
                    ],
                    type: "LIKERT",
                },
                {
                    no: 8,
                    question:
                        "Apakah fasilitas sanitasi publik menyediakan tempat sampah khusus/layak untuk pembuangan pembalut?",
                    image: "/gambar/data_gform/data8.jpg",
                    options: ["Ya", "Tidak", "Tidak memperhatikan"],
                    type: "MULTIPLE CHOICE",
                },
                {
                    no: 9,
                    question:
                        "Saya selalu memiliki akses ke air bersih yang cukup setelah menggunakan toilet.",
                    image: "/gambar/data_gform/data9.jpg",
                    options: [
                        "1 - Sangat Tidak Setuju",
                        "2 - Tidak Setuju",
                        "3 - Netral",
                        "4 - Setuju",
                        "5 - Sangat Setuju",
                    ],
                    type: "LIKERT",
                },
            ],
        },
    ];

    return (
        <section className="min-h-screen bg-gray-100 py-10 px-6 flex justify-center">
            <div className="w-full max-w-7xl">
                {/* Header */}
                <div className="mb-8">
                    <p className="text-sm font-semibold text-orange-500 uppercase tracking-wide">
                        Instrumen Survei — 9 Pertanyaan
                    </p>

                    <h1 className="text-3xl font-bold text-gray-800 mt-2">
                        Rancangan Pengumpulan Data
                    </h1>
                </div>

                {/* Sections */}
                <div className="space-y-8">
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            className="bg-gray-200 rounded-2xl p-6 shadow-sm"
                        >
                            {/* Title */}
                            <div className="mb-6">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                                        {section.title}
                                    </span>

                                    <h2 className="text-xl font-semibold text-gray-800">
                                        {section.subtitle}
                                    </h2>
                                </div>

                                <p className="text-gray-600 text-sm">
                                    {section.description}
                                </p>
                            </div>

                            {/* Questions */}
                            <div className="grid grid-cols-1 gap-5">
                                {section.items.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm"
                                    >
                                        {/* Header */}
                                        <div className="flex justify-between items-start gap-4 mb-4">
                                            <div>
                                                <p className="text-sm text-gray-500 mb-2">
                                                    Pertanyaan {item.no}
                                                </p>

                                                <h3 className="font-semibold text-gray-800 leading-relaxed">
                                                    {item.question}
                                                </h3>
                                            </div>

                                            <span className="text-[10px] font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded-md whitespace-nowrap">
                                                {item.type}
                                            </span>
                                        </div>

                                        {/* Options */}
                                        <div className="space-y-2 mb-5">
                                            {item.options.map((option, optionIndex) => (
                                                <label
                                                    key={optionIndex}
                                                    className="flex items-center gap-3 text-sm text-gray-700"
                                                >
                                                    <input
                                                        type="radio"
                                                        disabled
                                                        className="w-4 h-4"
                                                    />

                                                    {option}
                                                </label>
                                            ))}
                                        </div>

                                        {/* Button */}
                                        <button
                                            onClick={() => setSelectedImage(item.image)}
                                            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm rounded-lg transition"
                                        >
                                            Lihat Bukti Gambar
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                                <span className="text-orange-500 text-lg">📊</span>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-gray-800">
                                    Tanggapan terhadap Bukti yang Dikumpulkan
                                </h3>

                                <p className="text-sm text-gray-500">
                                    Analisis hasil survei sanitasi SDG 6 Target 6.2
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                            <p>
                                Berdasarkan hasil survei terhadap <b>23 responden</b>,
                                sebagian besar responden sudah memiliki akses sanitasi
                                dasar yang cukup baik. Sebanyak <b>100%</b> responden
                                memiliki toilet pribadi dan <b>78,3%</b> menggunakan
                                toilet dengan tangki septik.
                            </p>

                            <p>
                                Namun, masih ditemukan beberapa permasalahan penting,
                                seperti <b>30,4%</b> responden belum mengelola limbah
                                sanitasi dengan benar dan <b>52,2%</b> responden masih
                                sering menemui genangan air akibat drainase yang buruk.
                            </p>

                            <p>
                                Selain itu, fasilitas hygiene publik juga belum optimal.
                                Ketersediaan fasilitas cuci tangan memperoleh skor
                                terendah yaitu <b>3,30/5</b>, sedangkan <b>60,9%</b>
                                responden menyatakan fasilitas sanitasi publik belum
                                menyediakan tempat sampah khusus pembalut.
                            </p>

                            <p>
                                Secara keseluruhan, tingkat akses dan perilaku sanitasi
                                memperoleh skor rata-rata <b>3,72/5 (74,5%)</b>. Hasil
                                ini menjadi dasar pengembangan solusi digital berbasis
                                <b> Next.js</b> untuk monitoring sanitasi, dokumentasi
                                fasilitas lingkungan, dan pelaporan kondisi sanitasi
                                publik secara lebih terstruktur.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Modal */}
                {selectedImage && (
                    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-6">
                        <div className="bg-white rounded-xl p-4 max-w-4xl w-full relative">
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-1 right-1 bg-red-500 hover:bg-red-600 text-white w-7 h-7 rounded-full"
                            >
                                ✕
                            </button>

                            {/* Image */}
                            <div className="relative w-full h-[500px] rounded-xl overflow-hidden">
                                <Image
                                    src={selectedImage}
                                    alt="Bukti Data"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}