export default function Footer() {
  return (
    <footer className="bg-[#ea6c00] py-4 text-white">
      <div className="max-w-7xl mx-auto px-12 flex flex-col md:flex-row justify-between items-center gap-8 w-full">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="text-white font-black text-2xl flex items-center gap-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-7 w-7" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
            </svg>
            <span>PendidikanKita</span>
          </div>
          <p className="text-sm opacity-90">
            © 2026 PendidikanKita. by Muhammad Vlas.
          </p>
        </div>
        
        <div className="flex gap-8 text-base font-semibold">
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
        </div>
      </div>
    </footer>
  );
}