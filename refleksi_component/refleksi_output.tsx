import { reflections } from "./refleksi_data.js";

export default function Reflection() {
  return (
    <section className="py-24 bg-[#EBF5FB]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}

        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-3">
            Refleksi Pembelajaran
          </h2>

          <p className="mt-6 text-slate-600 leading-8 max-w-3xl mx-auto">
            Tahap refleksi dilakukan untuk mengevaluasi proses pembelajaran,
            pengalaman selama menerapkan Design Thinking, serta pemahaman
            mengenai penerapan Sustainable Development Goals (SDGs)
            dalam pengembangan solusi UniFlow.
          </p>

        </div>

        <div className="space-y-8">

          {reflections.map((item) => (

            <div
              key={item.number}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >

              <div className="border-l-[6px] border-[#0077b6] p-8">

                <div className="flex items-center gap-5 mb-6">

                  <div className="w-14 h-14 rounded-full bg-[#0077b6] text-white flex items-center justify-center font-bold text-lg">
                    {item.number}
                  </div>

                  <h3 className="text-2xl font-semibold text-slate-900 leading-snug">
                    {item.question}
                  </h3>

                </div>

                <div className="text-slate-600 leading-8 whitespace-pre-line text-justify">
                  {item.answer}
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}