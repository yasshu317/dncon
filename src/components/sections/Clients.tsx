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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mb-14">
          {siteConfig.clients.map((client) => (
            <div
              key={client}
              className="card px-4 py-4 flex items-center justify-center text-center"
              data-testid={`client-${client.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <span className="text-sm text-slate-400 font-medium">{client}</span>
            </div>
          ))}
        </div>

        <div className="card p-10 text-center max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-2">Ready to work together?</h3>
          <p className="text-slate-400 text-sm mb-6">
            Let's discuss how we can transform your IT operations.
          </p>
          <a href="/contact" className="btn-primary inline-flex mx-auto">
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
}
