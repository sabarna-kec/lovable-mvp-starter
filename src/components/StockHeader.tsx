import { companyData, sparklineData } from "@/data/mockData";
import { TrendingDown, Star, Building2, Briefcase } from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const sparkData = sparklineData.map((v, i) => ({ i, v }));

const StockHeader = () => {
  const { price, week52High, week52Low } = companyData;
  const rangePercent = ((price - week52Low) / (week52High - week52Low)) * 100;

  return (
    <div className="surface-elevated p-5 sticky top-0 z-40">
      <div className="flex flex-col lg:flex-row lg:items-center gap-5">
        {/* Left: Identity */}
        <div className="flex-shrink-0">
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-xl font-bold text-foreground">{companyData.name}</h1>
            <button className="text-muted-foreground hover:text-chart-warning transition-colors" title="Add to Watchlist">
              <Star className="h-4 w-4" />
            </button>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="font-mono">{companyData.exchange}: {companyData.symbol.replace('.NS', '')}</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-medium rounded bg-accent/10 text-accent border border-accent/20">
              <Building2 className="h-3 w-3" />
              {companyData.sector}
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-medium rounded bg-secondary text-secondary-foreground border border-border">
              <Briefcase className="h-3 w-3" />
              {companyData.industry}
            </span>
          </div>
        </div>

        {/* Center: Price */}
        <div className="flex items-center gap-4 lg:mx-auto">
          <div className="text-center">
            <span className="text-3xl lg:text-4xl font-bold text-foreground font-mono tracking-tight">
              ₹{price.toLocaleString()}
            </span>
            <div className="flex items-center justify-center gap-2 mt-1">
              <span className="flex items-center gap-1 text-sm font-semibold text-negative">
                <TrendingDown className="h-3.5 w-3.5" />
                {companyData.change}%
              </span>
              <span className="text-sm text-negative font-mono">
                (₹{companyData.changeAbs.toFixed(2)})
              </span>
            </div>
          </div>
          <div className="w-20 h-10">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sparkData}>
                <Line type="monotone" dataKey="v" stroke="hsl(0, 72%, 55%)" strokeWidth={1.5} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right: Key Metrics */}
        <div className="flex flex-wrap items-center gap-2 lg:gap-3">
          {[
            { label: "MCap", value: companyData.marketCap },
            { label: "P/E", value: companyData.peRatio },
            { label: "ROE", value: companyData.roe },
            { label: "Div Yield", value: companyData.dividendYield },
          ].map(m => (
            <div key={m.label} className="px-3 py-1.5 rounded bg-secondary/80 border border-border">
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider block">{m.label}</span>
              <span className="text-xs font-semibold font-mono text-foreground">{m.value}</span>
            </div>
          ))}
          {/* 52W Range */}
          <div className="px-3 py-1.5 rounded bg-secondary/80 border border-border min-w-[140px]">
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider block mb-1">52W Range</span>
            <div className="relative h-1.5 bg-muted rounded-full">
              <div
                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary border border-primary-foreground"
                style={{ left: `${Math.min(Math.max(rangePercent, 0), 100)}%` }}
              />
            </div>
            <div className="flex justify-between text-[9px] font-mono text-muted-foreground mt-0.5">
              <span>₹{week52Low.toLocaleString()}</span>
              <span>₹{week52High.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockHeader;
