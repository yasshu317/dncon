import SectionTitle from "@/components/ui/SectionTitle";
import { siteConfig } from "@/config/site.config";

export default function Clients() {
  return (
    <section id="clients" className="py-24 px-5 surface" data-testid="clients-section">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          label="Clients"
          title="Trusted by"
          highlight="Industry Leaders"
          description="Delivering solutions for some of the world's most recognized enterprises."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-16">
          {siteConfig.clients.map((client) => (
            <div
              key={client}
              className="client-tile"
              data-testid={`client-${client.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <span className="text-sm text-slate-600 font-semibold text-center leading-tight">{client}</span>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div
          className="relative rounded-2xl overflow-hidden p-10 text-center"
          style={{
            background: "linear-gradient(135deg, #1a0800 0%, #2d1000 50%, #1a0500 100%)",
            boxShadow: "0 20px 60px rgba(249,115,22,0.20)",
          }}
        >
          {/* Glow circle */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          <h3 className="text-2xl font-black text-white mb-3 relative" style={{ fontFamily: "'Raleway', sans-serif" }}>
            Ready to work together?
          </h3>
          <p className="text-white/60 text-sm mb-7 relative">
            Let&apos;s discuss how we can transform your IT operations.
          </p>
          <a href="/contact" className="btn-primary inline-flex relative">
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
}
