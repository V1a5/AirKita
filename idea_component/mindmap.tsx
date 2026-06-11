export default function MindMap() {
  return (
    <section className="py-12 px-4 min-h-screen flex items-center justify-center" style={{ background: '#EBF5FB' }}>
      <div className="relative w-full max-w-5xl h-[600px]">
        {/* SVG Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
          {/* Center to Newsletter */}
          <line x1="50%" y1="50%" x2="20%" y2="28%" stroke="#1A9ED4" strokeWidth="2" />
          {/* Center to Program */}
          <line x1="50%" y1="50%" x2="80%" y2="28%" stroke="#1A9ED4" strokeWidth="2" />
          {/* Center to Komunitas */}
          <line x1="50%" y1="50%" x2="20%" y2="72%" stroke="#1A9ED4" strokeWidth="2" />
          {/* Center to Pengawasan */}
          <line x1="50%" y1="50%" x2="80%" y2="72%" stroke="#1A9ED4" strokeWidth="2" />
          
          {/* Newsletter to children */}
          <line x1="20%" y1="28%" x2="8%" y2="12%" stroke="#5BC4E8" strokeWidth="1.2" />
          <line x1="20%" y1="28%" x2="20%" y2="8%" stroke="#5BC4E8" strokeWidth="1.2" />
          <line x1="20%" y1="28%" x2="35%" y2="12%" stroke="#5BC4E8" strokeWidth="1.2" />
          <line x1="20%" y1="28%" x2="8%" y2="38%" stroke="#5BC4E8" strokeWidth="1.2" />
          
          {/* Program to children */}
          <line x1="80%" y1="28%" x2="65%" y2="12%" stroke="#5BC4E8" strokeWidth="1.2" />
          <line x1="80%" y1="28%" x2="92%" y2="12%" stroke="#5BC4E8" strokeWidth="1.2" />
          <line x1="80%" y1="28%" x2="80%" y2="8%" stroke="#5BC4E8" strokeWidth="1.2" />
          
          {/* Komunitas to children */}
          <line x1="20%" y1="72%" x2="8%" y2="58%" stroke="#5BC4E8" strokeWidth="1.2" />
          <line x1="20%" y1="72%" x2="8%" y2="82%" stroke="#5BC4E8" strokeWidth="1.2" />
        
          {/* Pengawasan to children */}
          <line x1="80%" y1="72%" x2="65%" y2="88%" stroke="#5BC4E8" strokeWidth="1.2" />
          <line x1="80%" y1="72%" x2="92%" y2="58%" stroke="#5BC4E8" strokeWidth="1.2" />
          <line x1="80%" y1="72%" x2="92%" y2="92%" stroke="#5BC4E8" strokeWidth="1.2" />
        </svg>

        {/* Center Node */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="text-white px-6 py-5 rounded-lg shadow-lg text-center w-64" style={{ background: '#0D5C8C' }}>
            <h3 className="font-bold text-base leading-snug">
              Masalah Sanitasi Air dan BABS di Jakarta Timur
            </h3>
          </div>
        </div>

        {/* === NEWSLETTER (Top Left) === */}
        <div className="absolute left-[20%] top-[28%] transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="text-white px-5 py-2 rounded-lg shadow-md" style={{ background: '#1A9ED4' }}>
            <span className="font-bold text-sm">Newsletter</span>
          </div>
        </div>

        {/* Newsletter - Definisi sanitasi air */}
        <div className="absolute left-[5%] top-[8%] transform -translate-x-1/2 z-10">
          <div className="px-3 py-2 rounded-md shadow-sm text-center w-28" style={{ background: '#5BC4E8', color: '#042C53' }}>
            <span className="text-[10px] font-medium leading-tight block">Definisi sanitasi air</span>
          </div>
        </div>

        {/* Newsletter - Informasi program */}
        <div className="absolute left-[20%] top-[5%] transform -translate-x-1/2 z-10">
          <div className="px-3 py-2 rounded-md shadow-sm text-center w-32" style={{ background: '#B5D4F4', color: '#042C53' }}>
            <span className="text-[10px] font-medium leading-tight block">Informasi mengenai program sanitasi air</span>
          </div>
        </div>

        {/* Newsletter - Berita-berita */}
        <div className="absolute left-[38%] top-[10%] transform -translate-x-1/2 z-10">
          <div className="px-3 py-2 rounded-md shadow-sm text-center w-28" style={{ background: '#5BC4E8', color: '#042C53' }}>
            <span className="text-[10px] font-medium leading-tight block">Berita-berita mengenai limbah</span>
          </div>
        </div>

        {/* Newsletter - Manfaat sanitasi */}
        <div className="absolute left-[5%] top-[32%] transform -translate-x-1/2 z-10">
          <div className="px-3 py-2 rounded-md shadow-sm text-center w-32" style={{ background: '#B5D4F4', color: '#042C53' }}>
            <span className="text-[10px] font-medium leading-tight block">Manfaat sanitasi yang berkualitas untuk kota</span>
          </div>
        </div>

        {/* === PROGRAM (Top Right) === */}
        <div className="absolute left-[80%] top-[28%] transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="text-white px-5 py-2 rounded-lg shadow-md" style={{ background: '#1A9ED4' }}>
            <span className="font-bold text-sm">Program</span>
          </div>
        </div>

        {/* Program - Program sanitasi */}
        <div className="absolute left-[62%] top-[8%] transform -translate-x-1/2 z-10">
          <div className="px-3 py-2 rounded-md shadow-sm text-center w-36" style={{ background: '#B5D4F4', color: '#042C53' }}>
            <span className="text-[10px] font-medium leading-tight block">Program sanitasi berbasis institusi (kampus & sekolah)</span>
          </div>
        </div>

        {/* Program - Subsidi */}
        <div className="absolute left-[95%] top-[8%] transform -translate-x-1/2 z-10">
          <div className="px-3 py-2 rounded-md shadow-sm text-center w-28" style={{ background: '#5BC4E8', color: '#042C53' }}>
            <span className="text-[10px] font-medium leading-tight block">Subsidi pembangunan sanitasi</span>
          </div>
        </div>

        {/* Program - Instalasi toilet */}
        <div className="absolute left-[80%] top-[5%] transform -translate-x-1/2 z-10">
          <div className="px-3 py-2 rounded-md shadow-sm text-center w-32" style={{ background: '#B5D4F4', color: '#042C53' }}>
            <span className="text-[10px] font-medium leading-tight block">Instalasi toilet leher angsa dengan tangki septik</span>
          </div>
        </div>

        {/* === KOMUNITAS (Bottom Left) === */}
        <div className="absolute left-[20%] top-[72%] transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="text-white px-5 py-2 rounded-lg shadow-md" style={{ background: '#1A9ED4' }}>
            <span className="font-bold text-sm">Komunitas</span>
          </div>
        </div>

        {/* Komunitas - Seminar */}
        <div className="absolute left-[9%] top-[52%] transform -translate-x-1/2 z-10">
          <div className="px-3 py-2 rounded-md shadow-sm text-center w-32" style={{ background: '#5BC4E8', color: '#042C53' }}>
            <span className="text-[10px] font-medium leading-tight block">Seminar mengenai kesadaran pentingnya kualitas sanitasi air</span>
          </div>
        </div>

        {/* Komunitas - Membuat konten */}
        <div className="absolute left-[5%] top-[82%] transform -translate-x-1/2 z-10">
          <div className="px-3 py-2 rounded-md shadow-sm text-center w-32" style={{ background: '#B5D4F4', color: '#042C53' }}>
            <span className="text-[10px] font-medium leading-tight block">Membuat konten merujuk pentingnya kualitas sanitasi air</span>
          </div>
        </div>

        {/* === PENGAWASAN (Bottom Right) === */}
        <div className="absolute left-[80%] top-[72%] transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="text-white px-5 py-2 rounded-lg shadow-md text-center" style={{ background: '#1A9ED4' }}>
            <span className="font-bold text-sm block">Pengawasan tingkat kelurahan</span>
          </div>
        </div>

        {/* Pengawasan - Gotong royong */}
        <div className="absolute left-[95%] top-[55%] transform -translate-x-1/2 z-10">
          <div className="px-3 py-2 rounded-md shadow-sm text-center w-36" style={{ background: '#5BC4E8', color: '#042C53' }}>
            <span className="text-[10px] font-medium leading-tight block">Gotong royong sebulan sekali membersihkan aliran air perumahan</span>
          </div>
        </div>

        {/* Pengawasan - Anggaran dana */}
        <div className="absolute left-[65%] top-[88%] transform -translate-x-1/2 z-10">
          <div className="px-3 py-2 rounded-md shadow-sm text-center w-28" style={{ background: '#5BC4E8', color: '#042C53' }}>
            <span className="text-[10px] font-medium leading-tight block">Anggaran dana dari pemerintah</span>
          </div>
        </div>

        {/* Pengawasan - Imbauan */}
        <div className="absolute left-[90%] top-[87%] transform -translate-x-1/2 z-10">
          <div className="px-3 py-2 rounded-md shadow-sm text-center w-32" style={{ background: '#B5D4F4', color: '#042C53' }}>
            <span className="text-[10px] font-medium leading-tight block">Imbauan untuk meratakan instalasi septic tank</span>
          </div>
        </div>
      </div>
    </section>
  );
}