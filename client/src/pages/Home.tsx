import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useCoatingSystems } from "@/hooks/use-coating-systems";
import { useCreateConsultation } from "@/hooks/use-consultations";
import { 
  ArrowRight, ShieldCheck, Factory, Ship, Flame, 
  Droplets, Zap, Download, Calculator, CheckCircle2, ChevronRight
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground industrial-grid">
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <IndustriesSection />
        <SystemSelectionTool />
        <CalculatorSection />
        <CatalogSection />
        <ConsultationSection />
      </main>

      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center border-b border-border overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* macro metal texture */}
        <img 
          src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=1920&q=80" 
          alt="Macro metal texture" 
          className="w-full h-full object-cover grayscale opacity-20 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary border border-border mb-6">
              <span className="w-2 h-2 bg-primary rounded-none animate-pulse"></span>
              <span className="text-xs font-mono font-bold tracking-wider uppercase">High-Performance Engineering</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6 uppercase">
              Absolute <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/60">Protection</span><br/>
              Under <span className="text-primary">Pressure.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground font-mono mb-10 max-w-2xl leading-relaxed">
              Industrial-grade anti-corrosion and protective coatings formulated for severe environments. 
              Engineered to meet and exceed global ISO 12944 standards.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#consultation" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors border border-primary hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-[2px] active:translate-x-[2px] active:shadow-none"
              >
                Request Specification
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#systems" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-background text-foreground font-display font-bold uppercase tracking-widest hover:bg-secondary transition-colors border border-border hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] active:translate-y-[2px] active:translate-x-[2px] active:shadow-none"
              >
                View Systems
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="py-24 border-b border-border bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold uppercase mb-6 flex items-center gap-4">
              <span className="text-primary text-5xl leading-none">/</span>
              Manufacturing Excellence
            </h2>
            <p className="text-muted-foreground font-mono text-base leading-relaxed mb-6">
              FARIANTE operates at the intersection of chemistry and heavy engineering. Our production facilities are ISO 9001 certified, ensuring batch-to-batch consistency for critical infrastructure projects worldwide.
            </p>
            <ul className="space-y-4 font-mono text-sm">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>ISO 12944 compliance for C2 to CX environments</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Advanced testing: ASTM B117 Salt Spray verified</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Global export capability & technical logistics</span>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-secondary border border-border relative z-10 p-2">
               {/* industrial facility */}
               <img 
                src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=800&q=80" 
                alt="Manufacturing facility" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Geometric accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-industrial-grid border border-border -z-10 opacity-50"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  const series = [
    { name: "INDUSTRIAL", icon: Factory, desc: "Heavy-duty anti-corrosion for structures & plants." },
    { name: "MARINE", icon: Ship, desc: "High build epoxies & antifoulants for vessels & offshore." },
    { name: "THERMO", icon: Flame, desc: "Heat-resistant formulations up to 600°C." },
    { name: "PROTECT", icon: ShieldCheck, desc: "Chemical resistance for tanks & secondary containment." },
    { name: "VANDAL", icon: Zap, desc: "Polyurethane anti-graffiti clear coats." },
  ];

  return (
    <section id="systems" className="py-24 border-b border-border bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold uppercase mb-4">Product Series</h2>
            <p className="text-muted-foreground font-mono max-w-xl">Purpose-built coating technologies categorized by operational demand.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-0 border border-border bg-border">
          {series.map((item, idx) => (
            <div key={idx} className="bg-white p-8 group hover:bg-foreground hover:text-background transition-colors duration-300">
              <item.icon className="w-10 h-10 text-primary mb-6 group-hover:text-primary transition-colors" strokeWidth={1.5} />
              <h3 className="font-display font-bold text-xl mb-3 uppercase tracking-wide">{item.name}</h3>
              <p className="font-mono text-sm text-muted-foreground group-hover:text-background/70 leading-relaxed">
                {item.desc}
              </p>
              <div className="mt-8 w-8 h-[2px] bg-border group-hover:bg-primary transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  return (
    <section id="industries" className="py-24 border-b border-border bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-display font-bold uppercase mb-16 text-center">
          Sectors Served
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {['Oil & Gas', 'Bridges & Infrastructure', 'Power Generation', 'Chemical Processing'].map((ind, i) => (
            <div key={i} className="bg-foreground p-10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
              <div className="relative z-10">
                <span className="font-mono text-white/30 text-4xl font-bold mb-4 block">0{i+1}</span>
                <h3 className="font-display font-bold text-xl uppercase tracking-wider">{ind}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SystemSelectionTool() {
  const [env, setEnv] = useState<string>("");
  const { data: systems, isLoading } = useCoatingSystems(env ? { environment: env } : undefined);

  return (
    <section className="py-24 border-b border-border bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold uppercase mb-4">System Selector</h2>
            <p className="text-muted-foreground font-mono">Filter engineering systems by atmospheric corrosivity category (ISO 12944).</p>
          </div>

          <div className="bg-secondary p-6 border border-border mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="font-mono text-sm font-bold uppercase tracking-wider">Select Environment:</div>
            <div className="flex flex-wrap gap-2">
              {["", "C3", "C4", "C5", "CX"].map((c) => (
                <button
                  key={c}
                  onClick={() => setEnv(c)}
                  className={`px-4 py-2 font-mono text-sm font-bold border transition-colors ${
                    env === c 
                      ? "bg-primary text-primary-foreground border-primary" 
                      : "bg-white text-foreground border-border hover:border-foreground"
                  }`}
                >
                  {c || "ALL"}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {isLoading ? (
              <div className="py-12 text-center font-mono animate-pulse">Loading systems...</div>
            ) : systems?.length === 0 ? (
              <div className="py-12 text-center font-mono text-muted-foreground border border-dashed border-border">No systems match criteria.</div>
            ) : (
              systems?.map((sys) => (
                <div key={sys.id} className="border border-border bg-white p-6 hover:shadow-lg transition-shadow group flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-1 bg-foreground text-background text-xs font-mono font-bold">{sys.series}</span>
                      <span className="px-2 py-1 bg-secondary text-foreground text-xs font-mono font-bold border border-border">ENV: {sys.environment}</span>
                    </div>
                    <h3 className="font-display font-bold text-2xl uppercase tracking-wide mb-2">{sys.name}</h3>
                    <p className="font-mono text-sm text-muted-foreground max-w-2xl">{sys.description}</p>
                  </div>
                  <div className="text-left md:text-right shrink-0">
                    <div className="text-xs font-mono text-muted-foreground mb-1">Durability</div>
                    <div className="font-mono font-bold uppercase tracking-widest text-primary">{sys.durability}</div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function CalculatorSection() {
  const [area, setArea] = useState<number | "">("");
  const [dft, setDft] = useState<number | "">("");
  const [vs, setVs] = useState<number | "">("");

  // Formula: Liters = (Area * DFT) / (10 * VS)
  const calculateLiters = () => {
    if (area && dft && vs) {
      return ((Number(area) * Number(dft)) / (10 * Number(vs))).toFixed(2);
    }
    return "0.00";
  };

  return (
    <section id="calculator" className="py-24 border-b border-border bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="w-12 h-12 bg-primary flex items-center justify-center mb-6">
              <Calculator className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold uppercase mb-6">Consumption<br/>Calculator</h2>
            <p className="text-muted-foreground font-mono mb-8">
              Theoretical consumption calculation based on solid volume. Note: This does not account for practical loss factors (roughness, application method, waste).
            </p>
            <div className="font-mono text-sm bg-white p-6 border border-border border-l-4 border-l-primary">
              Formula:<br/>
              <span className="text-lg font-bold mt-2 block">Liters = (Area × DFT) / (10 × VS%)</span>
            </div>
          </div>

          <div className="bg-white border border-border p-8 md:p-12 shadow-xl shadow-black/5">
            <div className="space-y-6">
              <div>
                <label className="block font-mono text-sm font-bold uppercase mb-2">Total Area (m²)</label>
                <input 
                  type="number" 
                  value={area} onChange={e => setArea(Number(e.target.value))}
                  className="w-full bg-secondary border border-border px-4 py-3 font-mono focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="e.g. 1500"
                />
              </div>
              <div>
                <label className="block font-mono text-sm font-bold uppercase mb-2">Dry Film Thickness - DFT (μm)</label>
                <input 
                  type="number" 
                  value={dft} onChange={e => setDft(Number(e.target.value))}
                  className="w-full bg-secondary border border-border px-4 py-3 font-mono focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="e.g. 80"
                />
              </div>
              <div>
                <label className="block font-mono text-sm font-bold uppercase mb-2">Volume Solids - VS (%)</label>
                <input 
                  type="number" 
                  value={vs} onChange={e => setVs(Number(e.target.value))}
                  className="w-full bg-secondary border border-border px-4 py-3 font-mono focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="e.g. 65"
                />
              </div>
              
              <div className="pt-6 border-t border-border mt-8">
                <div className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-2">Theoretical Requirement</div>
                <div className="text-5xl font-display font-bold text-primary flex items-baseline gap-2">
                  {calculateLiters()} <span className="text-xl text-foreground">Liters</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CatalogSection() {
  const docs = [
    { title: "General Technical Catalog 2025", size: "12.4 MB" },
    { title: "Marine ISO Systems Guide", size: "8.1 MB" },
    { title: "Surface Preparation Standards", size: "4.2 MB" },
  ];

  return (
    <section id="catalog" className="py-24 border-b border-border bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-display font-bold uppercase mb-12 text-center">Technical Documentation</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-4">
          {docs.map((doc, i) => (
            <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 border border-border hover:border-primary transition-colors group bg-secondary/30">
              <div className="flex items-center gap-4 mb-4 sm:mb-0">
                <div className="w-10 h-10 bg-white border border-border flex items-center justify-center shrink-0">
                  <Download className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg uppercase tracking-wide">{doc.title}</h4>
                  <p className="font-mono text-xs text-muted-foreground">PDF Document • {doc.size}</p>
                </div>
              </div>
              <button className="font-mono text-sm font-bold text-primary uppercase tracking-widest hover:text-foreground flex items-center gap-2">
                Download <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConsultationSection() {
  const { mutate: createConsultation, isPending } = useCreateConsultation();
  const [formData, setFormData] = useState({
    name: "", company: "", email: "", phone: "", message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createConsultation(formData, {
      onSuccess: () => setFormData({ name: "", company: "", email: "", phone: "", message: "" })
    });
  };

  return (
    <section id="consultation" className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold uppercase mb-6 text-white">
              Engineering<br/>Consultation
            </h2>
            <p className="text-muted-foreground font-mono mb-8 max-w-md">
              Submit your project parameters. Our NACE/FROSIO certified inspectors will specify the optimal coating system.
            </p>
            
            <div className="space-y-6 font-mono text-sm text-muted-foreground">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-white/10 flex items-center justify-center shrink-0">1</div>
                <p className="mt-1">Provide environmental and substrate details.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-white/10 flex items-center justify-center shrink-0">2</div>
                <p className="mt-1">Receive theoretical calculations and system specs.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-white/10 flex items-center justify-center shrink-0">3</div>
                <p className="mt-1">Logistics & commercial coordination.</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-background text-foreground p-8 md:p-10 border-t-8 border-primary">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block font-mono text-xs font-bold uppercase mb-2 text-muted-foreground">Contact Name *</label>
                <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-secondary border border-border px-4 py-3 font-mono text-sm focus:outline-none focus:border-primary" />
              </div>
              <div>
                <label className="block font-mono text-xs font-bold uppercase mb-2 text-muted-foreground">Company *</label>
                <input required type="text" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} className="w-full bg-secondary border border-border px-4 py-3 font-mono text-sm focus:outline-none focus:border-primary" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block font-mono text-xs font-bold uppercase mb-2 text-muted-foreground">Email Address *</label>
                <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-secondary border border-border px-4 py-3 font-mono text-sm focus:outline-none focus:border-primary" />
              </div>
              <div>
                <label className="block font-mono text-xs font-bold uppercase mb-2 text-muted-foreground">Phone Number</label>
                <input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-secondary border border-border px-4 py-3 font-mono text-sm focus:outline-none focus:border-primary" />
              </div>
            </div>

            <div className="mb-8">
              <label className="block font-mono text-xs font-bold uppercase mb-2 text-muted-foreground">Project Details / Requirements *</label>
              <textarea required rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full bg-secondary border border-border px-4 py-3 font-mono text-sm focus:outline-none focus:border-primary resize-none"></textarea>
            </div>

            <button 
              type="submit" 
              disabled={isPending}
              className="w-full py-4 bg-primary text-primary-foreground font-display font-bold uppercase tracking-widest hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPending ? "Submitting..." : "Submit Request"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
