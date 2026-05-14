export default function Footer() {
  return (
    <footer className="bg-[#0077b6] py-4 text-white">
      <div className="max-w-7xl mx-auto px-12 flex flex-col md:flex-row justify-between items-center gap-8 w-full">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="text-white font-black text-2xl flex items-center gap-2">
            {/* Water drop icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
            </svg>
            <span>AirKita</span>
          </div>
          <p className="text-sm opacity-90">
            © 2026 AirKita. by Muhammad Vlas
          </p>
        </div>

        {/* <div className="flex gap-8 text-base font-semibold">
          <a
            href="#"
            className="text-white/90 hover:text-white transition-opacity underline decoration-2 underline-offset-4"
          >
            Kebijakan Privasi
          </a>
          <a
            href="#"
            className="text-white/90 hover:text-white transition-opacity"
          >
            Kontak Kami
          </a>
          <a
            href="#"
            className="text-white/90 hover:text-white transition-opacity"
          >
            Mulai Eksplorasi
          </a>
        </div> */}
      </div>
    </footer>
  );
}