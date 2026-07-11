import Link from "next/link";
import {
  Globe,
  Smartphone,
  ShieldCheck,
  ExternalLink,
  Sparkles,
} from "lucide-react";

export default function LivePrototype() {
  return (
    <section className="py-20 bg-[#EBF5FB] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-3">
            Coba Prototype UniFlow
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-slate-600 leading-8">
            Prototype UniFlow telah tersedia secara online sehingga dapat
            dicoba langsung melalui browser tanpa perlu menginstal aplikasi.
          </p>
        </div>

        {/* Card */}
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#0077b6] via-[#0096c7] to-[#48cae4] p-[1px] shadow-xl">

          <div className="relative rounded-[31px] bg-white px-8 py-12 lg:px-14">

            {/* Background Circle */}
            <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full bg-sky-100 opacity-40"></div>
            <div className="absolute -left-16 -bottom-16 w-52 h-52 rounded-full bg-blue-100 opacity-50"></div>

            <div className="relative grid lg:grid-cols-2 gap-10 items-center">

              {/* Left */}
              <div>

                <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-[#0077b6]">
                  <Sparkles size={16} />
                  Live Prototype
                </span>

                <h3 className="text-4xl font-bold mt-6 text-slate-900">
                  UniFlow
                </h3>

                <p className="mt-5 text-justify text-slate-600 leading-8">
                  Jelajahi prototype UniFlow dan rasakan pengalaman
                  pelaporan fasilitas sanitasi yang cepat, mudah,
                  dan terintegrasi langsung dengan pihak Sarana
                  dan Prasarana.
                </p>

                {/* Features */}

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">

                  <div className="rounded-xl bg-sky-50 p-4">
                    <Globe className="text-[#0077b6] mb-2" />
                    <p className="text-sm font-medium">
                      Berbasis Website
                    </p>
                  </div>

                  <div className="rounded-xl bg-sky-50 p-4">
                    <Smartphone className="text-[#0077b6] mb-2" />
                    <p className="text-sm font-medium">
                      Mobile Friendly
                    </p>
                  </div>

                  <div className="rounded-xl bg-sky-50 p-4">
                    <ShieldCheck className="text-[#0077b6] mb-2" />
                    <p className="text-sm font-medium">
                      Mudah Digunakan
                    </p>
                  </div>

                </div>

              </div>

              {/* Right */}

              <div className="text-center">

                <img
                  src="/gambar/logo_uniflow-removebg-preview.png"
                  alt="UniFlow"
                  className="w-72 mx-auto drop-shadow-xl"
                />

                <Link
                  href="https://gouniflow.vercel.app/"
                  target="_blank"
                  className="inline-flex items-center gap-3 mt-8
                  rounded-xl bg-[#0077b6]
                  hover:bg-[#005f91]
                  text-white
                  px-8 py-4
                  text-lg
                  font-semibold
                  transition-all
                  hover:scale-105"
                >
                  Kunjungi Website
                  <ExternalLink size={20} />
                </Link>

                <p className="text-sm text-slate-500 mt-5">
                  https://gouniflow.vercel.app
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}