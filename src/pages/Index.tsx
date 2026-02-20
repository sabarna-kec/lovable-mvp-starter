import { Link } from "react-router-dom";
import { BarChart3, TrendingUp, Shield, Zap, ArrowRight } from "lucide-react";

const features = [
  { icon: TrendingUp, title: "Real-time Charts", desc: "Line & candlestick charts with OHLCV data and multiple timeframes." },
  { icon: Shield, title: "Financial Analysis", desc: "Key financial metrics, revenue, profit margins and fundamentals at a glance." },
  { icon: Zap, title: "Volume Intelligence", desc: "Spot volume spikes and institutional activity with visual volume analysis." },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero gradient-glow relative overflow-hidden">
        <div className="container mx-auto px-4 py-24 md:py-36 text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <BarChart3 className="h-12 w-12 text-primary animate-pulse-glow" />
            <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight">
              Stock<span className="text-primary">IT</span>
            </h1>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Financial analysis simplified. Track stocks, analyze charts, and make smarter investment decisions — all in one place.
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3 text-base font-semibold text-primary-foreground transition-all hover:opacity-90 glow-green"
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        {/* Decorative grid */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="glass-card p-6 hover:border-primary/30 transition-all"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <f.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © 2026 StockIT. Financial Analysis Simplified.
        </div>
      </footer>
    </div>
  );
};

export default Index;
