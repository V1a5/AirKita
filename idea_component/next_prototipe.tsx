import Link from "next/link";

export default function NextPrototype() {
  return (
    <section className="py-16 bg-[#f8fbfd]">
      <div className="max-w-7xl mx-auto px-4">

        <div className="rounded-3xl bg-white border p-10 flex flex-col lg:flex-row items-center justify-between">

          <div>

            <p className="uppercase text-xs tracking-widest text-sky-600 font-semibold">
              Tahap Selanjutnya
            </p>

            <h2 className="text-4xl font-bold text-slate-900 mt-2">
              Lihat Bagaimana Ini Bekerja
            </h2>

            <p className="text-slate-600 mt-4 max-w-2xl leading-8">
              Setelah proses ideation selesai, solusi terbaik diwujudkan
              menjadi prototype agar dapat divalidasi dan diuji bersama
              pengguna.
            </p>

          </div>

          <Link
            href="/prototipe"
            className="mt-8 lg:mt-0 px-8 py-4 rounded-xl bg-[#0077b6] text-white font-semibold hover:bg-[#005f91] transition"
          >
            Lihat Prototype →
          </Link>

        </div>

      </div>
    </section>
  );
}