export default function MindMap() {
  return (
    <section className="py-12 bg-[#EBF5FB]">
      {/* Header */}
      <div className="w-full px-8 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#0077b6] rounded-md flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <h2 className="font-headline text-2xl font-bold text-[#1f2937]">
            Mind Map
          </h2>
        </div>
      </div>

      <div className="flex justify-center px-4">
        <div className="w-full max-w-5xl">
          <div className="bg-white rounded-2xl border border-[#cce7f5] overflow-hidden shadow-sm">
            <img
              src="/gambar/sanitasiair.jpg"
              alt="Mind Map I"
              className="w-full h-auto object-contain"
            />
          </div>

          <p className="text-center text-sm text-[#1a4a6b] mt-4 italic">
            Mind Map Ideation
          </p>
        </div>
      </div>
    </section>
  );
}