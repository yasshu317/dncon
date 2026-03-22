import SectionTitle from "@/components/ui/SectionTitle";
import { Calendar, Newspaper, CalendarDays } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export default function News() {
  return (
    <section id="news" className="py-24 px-5" data-testid="news-section">
      <div className="max-w-7xl mx-auto">
        <SectionTitle label="News & Events" title="Latest" highlight="Updates" />

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-2 mb-2">
              <Newspaper className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-semibold text-white">News</span>
            </div>
            {siteConfig.news.map((item) => (
              <div key={item.id} className="card p-7" data-testid={`news-item-${item.id}`}>
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  {new Date(item.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                  <span className="badge py-0.5 px-2">{item.type}</span>
                </div>
                <h4 className="text-base font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{item.summary}</p>
              </div>
            ))}
          </div>

          <div>
            <div className="flex items-center gap-2 mb-5">
              <CalendarDays className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-semibold text-white">Upcoming Seminars</span>
            </div>
            <div className="card p-6">
              <p className="text-xs text-slate-400 mb-5">Free seminars at our premises on IT topics:</p>
              <div className="space-y-3">
                {siteConfig.events.map((event, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs text-slate-400 pb-3 border-b border-white/[0.04] last:border-0 last:pb-0">
                    <span className="w-5 h-5 rounded-full bg-orange-50/60 border border-orange-100 text-slate-400 flex items-center justify-center text-[10px] font-bold shrink-0">
                      {i + 1}
                    </span>
                    {event}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
