import { Download, FileText } from "lucide-react";

export default function ReflectionDocument() {
  return (
    <section className="py-20 bg-[#EBF5FB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 max-w-3xl">

          <div className="flex items-center gap-4 mb-5">

            <div className="w-12 h-12 rounded-xl bg-[#0077b6] flex items-center justify-center shadow-md">
              <FileText
                size={24}
                className="text-white"
              />
            </div>

            <div>

              <h2 className="text-4xl font-bold text-slate-900">
                Lembar Kerja
              </h2>

            </div>

          </div>

          <p className="text-slate-600 leading-8">
            Dokumen lembar kerja yang berisi jawaban lengkap atas seluruh
            pertanyaan refleksi selama proses pengembangan UniFlow dapat
            diunduh melalui tombol di bawah ini.
          </p>

        </div>

        {/* Download Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 p-8">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

            {/* Informasi Dokumen */}
            <div className="flex items-center gap-5">

              <div className="w-16 h-16 rounded-2xl bg-[#EBF5FB] flex items-center justify-center">

                <FileText
                  size={34}
                  className="text-[#0077b6]"
                />

              </div>

              <div>

                <h3 className="text-2xl font-bold text-slate-900">
                  Lembar Kerja Refleksi
                </h3>

                <p className="text-slate-600 mt-2 leading-7 max-w-xl">
                  Dokumen ini memuat jawaban lengkap seluruh pertanyaan
                  refleksi yang telah dikerjakan selama proses perancangan
                  dan pengembangan UniFlow.
                </p>

              </div>

            </div>

            {/* Tombol Download */}
            <a
              href="/dokumen/Muhammad Vlas_Lembar Kerja.pdf"
              download
              className="inline-flex items-center gap-3 bg-[#0077b6] hover:bg-[#005f91] text-white font-semibold px-7 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Download size={20} />
              Unduh PDF
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}