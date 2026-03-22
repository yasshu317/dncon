"use client";

import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import { MapPin, Phone, PrinterIcon, Mail, Send, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export default function Contact() {
  const { company } = siteConfig;
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, process.env.NODE_ENV === "test" ? 0 : 1000));
    setStatus("sent");
  };

  return (
    <section id="contact" className="py-24 px-5 surface" data-testid="contact-section">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          label="Contact"
          title="Get in"
          highlight="Touch"
          description="Ready to transform your IT operations? Our team is here to help."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Details */}
          <div className="card p-8 space-y-5">
            <Row icon={<MapPin className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />} label="Address" value={company.contact.address} />
            <Row icon={<Phone className="w-4 h-4 text-orange-600 shrink-0" />} label="Phone" value={company.contact.phone} href={`tel:${company.contact.phone}`} />
            {company.contact.fax && (
              <Row icon={<PrinterIcon className="w-4 h-4 text-orange-600 shrink-0" />} label="Fax" value={company.contact.fax} />
            )}
            {Object.entries(company.contact.emails).map(([label, email]) => (
              <Row key={label} icon={<Mail className="w-4 h-4 text-orange-600 shrink-0" />} label={label} value={email} href={`mailto:${email}`} />
            ))}
          </div>

          {/* Form */}
          <div className="card p-8" data-testid="contact-form">
            {status === "sent" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mb-4" />
                <h3 className="text-lg font-bold text-slate-800 mb-2">Message Sent!</h3>
                <p className="text-slate-400 text-sm">We&apos;ll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <p className="text-sm font-semibold text-slate-800 mb-6">Send a Message</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field id="name" label="Your Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
                  <Field id="email" label="Email Address" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} required />
                </div>
                <Field id="subject" label="Subject" value={form.subject} onChange={(v) => setForm({ ...form, subject: v })} required />
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-slate-400 mb-1.5">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-white/70 border border-orange-100 rounded-lg px-3.5 py-2.5 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-orange-400/60 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary w-full justify-center"
                  data-testid="contact-submit"
                >
                  {status === "sending" ? (
                    <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="w-4 h-4" /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  return (
    <div className="flex items-start gap-3">
      {icon}
      <div>
        <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-0.5">{label}</p>
        {href
          ? <a href={href} className="text-sm text-slate-500 hover:text-orange-600 transition-colors">{value}</a>
          : <p className="text-sm text-slate-500">{value}</p>
        }
      </div>
    </div>
  );
}

function Field({ id, label, type = "text", value, onChange, required }: {
  id: string; label: string; type?: string; value: string; onChange: (v: string) => void; required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-medium text-slate-400 mb-1.5">{label}</label>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white/70 border border-orange-100 rounded-lg px-3.5 py-2.5 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-orange-400/60 transition-colors"
        placeholder={label}
        data-testid={`input-${id}`}
      />
    </div>
  );
}
