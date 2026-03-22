import SectionTitle from "@/components/ui/SectionTitle";
import { CheckCircle2, Package } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export default function Products() {
  return (
    <section id="products" className="py-24 px-5" data-testid="products-section">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          label="Products"
          title="Our"
          highlight="Products"
          description="Purpose-built software products designed to solve real business challenges."
        />
        <div className="grid md:grid-cols-2 gap-6">
          {siteConfig.products.map((product) => (
            <div key={product.id} id={product.id} className="card p-8" data-testid={`product-card-${product.id}`}>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                  <Package className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{product.name}</h3>
                  <p className="text-sm text-blue-400">{product.tagline}</p>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">{product.description}</p>
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Key Modules</p>
                <ul className="grid grid-cols-2 gap-2">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
