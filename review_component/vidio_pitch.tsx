export default function VideoPitch() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="mb-10">
          <p className="uppercase tracking-widest text-xs font-semibold text-[#0077b6]">
            Video Pitch
          </p>

          <h2 className="text-4xl font-bold text-[#1f2937] mt-2">
            Presentasi UniFlow
          </h2>

          <p className="mt-4 text-[#1a4a6b] max-w-3xl leading-8">
            Video pitch ini menjelaskan latar belakang permasalahan,
            proses pengembangan, dan fitur utama
          </p>
        </div>

        {/* Video */}
        <div className="bg-white rounded-3xl border border-[#cce7f5] shadow-sm overflow-hidden">

          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Yd_FwK8KZ9c"
              title="Video Pitch UniFlow"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

        </div>

      </div>
    </section>
  );
}