import SectionTitle from "@/components/ui/SectionTitle";
import { CheckCircle2, Package } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { assetPath } from "@/lib/assetPath";

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

        {siteConfig.products.map((product) => (
          <div key={product.id} id={product.id} className="card mb-8 overflow-hidden" data-testid={`product-card-${product.id}`}>
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Screenshot */}
              <div className="relative bg-slate-100 flex items-center justify-center p-4 lg:p-6 border-b lg:border-b-0 lg:border-r border-orange-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={assetPath("/images/product-columbus.jpg")}
                  alt={`${product.name} screenshot`}
                  className="w-full rounded-lg shadow-md object-cover"
                />
              </div>

              {/* Details */}
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center shrink-0">
                    <Package className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800">{product.name}</h3>
                    <p className="text-sm text-orange-600">{product.tagline}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">{product.description}</p>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Key Modules</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-slate-500">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
