export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 border-t-[8px] border-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-display font-bold text-2xl tracking-widest text-background">
                FARIANTE
              </span>
              <div className="w-2 h-2 bg-primary"></div>
            </div>
            <p className="text-muted-foreground max-w-sm font-mono text-sm leading-relaxed mb-6">
              Engineering protective coatings for critical industrial and infrastructure projects. Manufactured to global ISO standards.
            </p>
            <div className="flex gap-4">
              <span className="px-2 py-1 bg-white/10 text-xs font-mono">ISO 9001</span>
              <span className="px-2 py-1 bg-white/10 text-xs font-mono">ISO 12944</span>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-bold uppercase tracking-wider mb-6 text-sm text-primary">Divisions</h4>
            <ul className="space-y-3 text-sm font-mono text-muted-foreground">
              <li><a href="#" className="hover:text-background transition-colors">INDUSTRIAL</a></li>
              <li><a href="#" className="hover:text-background transition-colors">MARINE</a></li>
              <li><a href="#" className="hover:text-background transition-colors">THERMO</a></li>
              <li><a href="#" className="hover:text-background transition-colors">PROTECT</a></li>
              <li><a href="#" className="hover:text-background transition-colors">VANDAL</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold uppercase tracking-wider mb-6 text-sm text-primary">Contact</h4>
            <ul className="space-y-3 text-sm font-mono text-muted-foreground">
              <li>Tech Support: +1 (800) 555-0199</li>
              <li>Sales: sales@fariante.inc</li>
              <li>Global HQ: Industrial Park 4, Sector B</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-mono text-muted-foreground">
            © {new Date().getFullYear()} FARIANTE Coatings Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs font-mono text-muted-foreground">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
