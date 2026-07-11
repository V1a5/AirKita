import { canvas, bottomCards } from "./lean_canvas_data";
import {
  TriangleAlert,
  Lightbulb,
  Gem,
  Trophy,
  Users,
  RefreshCcw,
  BarChart3,
  Megaphone,
  Wallet,
  HandCoins,
} from "lucide-react";

const icons: Record<string, React.ElementType> = {
  Problem: TriangleAlert,
  Solution: Lightbulb,
  "Unique Value Proposition": Gem,
  "Unfair Advantage": Trophy,
  "Customer Segments": Users,
  "Existing Alternatives": RefreshCcw,
  "Key Metrics": BarChart3,
  Channels: Megaphone,
  "Cost Structure": Wallet,
  "Revenue Streams": HandCoins,
};

export default function LeanCanvas() {
  return (
    <section className="py-24 bg-[#EBF5FB]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            Lean Canvas
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-slate-600 leading-8">
            Lean Canvas digunakan untuk merangkum model bisnis UniFlow mulai
            dari permasalahan utama, solusi yang ditawarkan, target pengguna,
            hingga indikator keberhasilan implementasi sistem.
          </p>
        </div>

        {/* Canvas */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-7">

          {canvas.map((item) => {
            const Icon = icons[item.title];

            return (
              <div
                key={item.title}
                className={`
                  relative
                  overflow-hidden
                  rounded-3xl
                  border
                  ${item.color}
                  bg-white
                  shadow-md
                  hover:shadow-xl
                  hover:-translate-y-2
                  transition-all
                  duration-300
                `}
              >
                <div className="h-1 bg-gradient-to-r from-[#0077b6] to-cyan-400" />

                <div className="p-7">

                  <h3 className="text-xl font-bold flex items-center gap-4 mb-6">

                    <div className="w-12 h-12 rounded-xl bg-[#EBF5FB] flex items-center justify-center">

                      {Icon && (
                        <Icon
                          size={24}
                          className="text-[#0077b6]"
                        />
                      )}

                    </div>

                    <span>{item.title}</span>

                  </h3>

                  <ul className="space-y-4">

                    {item.items.map((text) => (
                      <li
                        key={text}
                        className="flex gap-3 text-slate-600 leading-7"
                      >
                        <span className="text-[#0077b6] mt-1">
                          ●
                        </span>

                        <span>{text}</span>

                      </li>
                    ))}

                  </ul>

                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mt-10">

          {bottomCards.map((item) => {
            const BottomIcon = icons[item.title];

            return (
              <div
                key={item.title}
                className="bg-white rounded-3xl border shadow-md hover:shadow-xl transition duration-300 p-8"
              >

                <div className="flex items-center gap-4 mb-6">

                  <div
                    className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center`}
                  >

                    {BottomIcon && (
                      <BottomIcon
                        size={28}
                        className="text-[#0077b6]"
                      />
                    )}

                  </div>

                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                </div>

                <p className="text-slate-600 leading-8">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}