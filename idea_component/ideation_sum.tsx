export default function IdeationSummary() {
  return (
    <section className="py-14 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="mb-10">
          <p className="uppercase tracking-widest text-xs font-semibold text-sky-600">
            Ringkasan Ideasi
          </p>

          <h2 className="text-4xl font-bold text-slate-900 mt-2">
            Dari Masalah ke Solusi
          </h2>

          <p className="text-slate-600 text-justify mt-3 max-w-3xl leading-8">
            Melalui proses Design Thinking UniFlow, kami memetakan akar
            permasalahan, dampak yang ditimbulkan, stakeholder yang terlibat,
            serta berbagai alternatif solusi sebelum menentukan solusi utama.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">

          {/* Root Causes */}
          <div className="rounded-2xl border border-red-200 p-6 bg-white shadow-sm">

            <h3 className="font-semibold text-red-600 mb-5">
              🔴 Root Causes
            </h3>

            <ul className="space-y-4 text-sm text-slate-600">
              <li>Belum tersedia sistem pelaporan sanitasi yang terpusat.</li>
              <li>Koordinasi antar pengguna dan pengelola kurang efektif.</li>
              <li>Perawatan fasilitas sanitasi belum dilakukan secara berkala.</li>
              <li>Kurangnya transparansi status perbaikan fasilitas.</li>
              <li>Respon terhadap laporan masih memerlukan waktu lama.</li>
            </ul>

          </div>

          {/* Impacts */}

          <div className="rounded-2xl border border-orange-200 p-6 bg-white shadow-sm">

            <h3 className="font-semibold text-orange-500 mb-5">
              🟠 Impacts
            </h3>

            <ul className="space-y-4 text-sm text-slate-600">
              <li>Kerusakan fasilitas menjadi lebih lama diperbaiki.</li>
              <li>Meningkatkan risiko kesehatan pengguna.</li>
              <li>Lingkungan belajar menjadi kurang nyaman.</li>
              <li>Produktivitas civitas akademika menurun.</li>
              <li>Menurunnya kualitas layanan sanitasi kampus.</li>
            </ul>

          </div>

          {/* Stakeholders */}

          <div className="rounded-2xl border border-sky-200 p-6 bg-white shadow-sm">

            <h3 className="font-semibold text-sky-600 mb-5">
              👥 Stakeholders
            </h3>

            <div className="flex flex-wrap gap-3">

              {[
                "Mahasiswa",
                "Dosen",
                "Sarpras",
                "Cleaning Service",
                "Teknisi",
                "Vendor"
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-sky-100 text-sky-700 text-sm font-medium"
                >
                  {item}
                </span>
              ))}

            </div>

            <div className="mt-8">
              <img
                src="/gambar/stakeholder.png"
                alt=""
                className="rounded-xl"
              />
            </div>

          </div>

        </div>

        {/* bawah */}

        <div className="grid lg:grid-cols-3 gap-6 mt-8">

          {/* Alternative */}

          <div className="lg:col-span-2 rounded-2xl border p-6 shadow-sm">

            <h3 className="font-semibold text-slate-800 mb-6">
              💡 Alternative Solutions
            </h3>

            <div className="flex flex-wrap gap-3">

              {[
                "Website",
                "Mobile App",
                "QR Code",
                "Dashboard",
                "Push Notification",
                "IoT Sensor",
                "Vendor Directory",
                "Preventive Maintenance",
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm"
                >
                  {item}
                </span>
              ))}

            </div>

          </div>

          {/* Selected */}

          <div className="rounded-2xl bg-[#0077b6] text-white p-7">

            <h3 className="font-bold text-xl mb-4">
              Selected Solution
            </h3>
 
            <p className="leading-7 text-justify text-blue-100">
              UniFlow dipilih sebagai solusi utama karena berbasis web,
              mudah digunakan, tidak memerlukan instalasi aplikasi,
              mendukung pelaporan real-time, dan membantu Sarpras
              melakukan tindak lanjut lebih cepat.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">

              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-3xl font-bold">&lt;60s</p>
                <p className="text-sm text-blue-100">
                  membuat laporan
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-3xl font-bold">1-24h</p>
                <p className="text-sm text-blue-100">
                  estimasi respon
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}