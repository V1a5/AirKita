export default function PrototypeGallery() {
  const screens = [
    {
      title: "Halaman Beranda",
      image: "/gambar/home_uniflow.jpg",
      desc: "Menampilkan informasi mengenai UniFlow dan akses cepat menuju fitur pelaporan sanitasi."
    },
    {
      title: "Form Pelaporan",
      image: "/gambar/laporan_uniflow.jpg",
      desc: "Pengguna dapat mengisi lokasi, kategori kerusakan, deskripsi, dan mengunggah foto."
    },
    {
      title: "Dashboard Monitoring",
      image: "/gambar/mitra_uniflow.jpg",
      desc: "Menampilkan daftar laporan serta status penanganan oleh pihak Sarpras."
    }
  ];

  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="mb-10">
          <p className="uppercase text-xs tracking-widest text-sky-600 font-semibold">
            Prototype
          </p>

          <h2 className="text-4xl font-bold text-slate-900 mt-2">
            Visualisasi Solusi
          </h2>

          <p className="mt-4 text-slate-600 max-w-3xl leading-8">
            Prototipe ini memvisualisasikan konsep web UniFlow dan bagaimana pengguna berinteraksi dengannya
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {screens.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl border shadow-sm overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">

                <h3 className="font-semibold text-xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-justify text-slate-600 leading-7">
                  {item.desc}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}