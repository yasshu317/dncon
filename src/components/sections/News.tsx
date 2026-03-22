import SectionTitle from "@/components/ui/SectionTitle";
import { Calendar, Newspaper, CalendarDays } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export default function News() {
  return (
    <section id="news" className="py-24 px-5" data-testid="news-section">
      <div className="max-w-7xl mx-auto">
        <SectionTitle label="News & Events" title="Latest" highlight="Updates" />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* News feed */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-7 h-7 rounded-lg bg-orange-100 border border-orange-200 flex items-center justify-center">
                <Newspaper className="w-3.5 h-3.5 text-orange-600" />
              </div>
              <span className="text-sm font-bold text-slate-800">Company News</span>
            </div>

            {siteConfig.news.map((item) => (
              <div key={item.id} className="card p-7 group" data-testid={`news-item-${item.id}`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="badge py-0.5 px-2.5">{item.type}</span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Calendar className="w-3 h-3" />
                    {new Date(item.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-800 mb-2 group-hover:text-orange-600 transition-colors">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{item.summary}</p>
              </div>
            ))}
          </div>

          {/* Seminars */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-7 h-7 rounded-lg bg-orange-100 border border-orange-200 flex items-center justify-center">
                <CalendarDays className="w-3.5 h-3.5 text-orange-600" />
              </div>
              <span className="text-sm font-bold text-slate-800">Upcoming Seminars</span>
            </div>
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(160deg, #1c0c00 0%, #2d1500 100%)",
                boxShadow: "0 16px 48px rgba(249,115,22,0.18)",
              }}
            >
              <div className="p-6">
                <p className="text-orange-200/70 text-xs mb-5 font-medium">Free seminars at our premises on IT topics:</p>
                <div className="space-y-3">
                  {siteConfig.events.map((event, i) => (
                    <div key={i} className="flex items-start gap-3 pb-3 border-b border-white/5 last:border-0 last:pb-0">
                      <span className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-black shrink-0 mt-0.5"
                        style={{ background: "linear-gradient(135deg,#f97316,#f59e0b)", color: "white" }}>
                        {i + 1}
                      </span>
                      <span className="text-xs text-white/70 leading-relaxed">{event}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
