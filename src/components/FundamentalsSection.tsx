import { financials } from "@/data/mockData";
import { DollarSign, BarChart3, TrendingUp, Shield } from "lucide-react";

const categories = [
  { key: "profitability" as const, label: "Profitability", icon: DollarSign, color: "text-positive" },
  { key: "valuation" as const, label: "Valuation", icon: BarChart3, color: "text-accent" },
  { key: "growth" as const, label: "Growth", icon: TrendingUp, color: "text-ai" },
  { key: "health" as const, label: "Financial Health", icon: Shield, color: "text-chart-warning" },
];

const FundamentalsSection = () => (
  <div>
    <h2 className="text-base font-semibold text-foreground mb-4">Fundamental Analysis</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {categories.map(cat => (
        <div key={cat.key} className="surface-card p-4">
          <div className="flex items-center gap-2 mb-3">
            <cat.icon className={`h-4 w-4 ${cat.color}`} />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{cat.label}</span>
          </div>
          <div className="space-y-2.5">
            {financials[cat.key].map(f => (
              <div key={f.label} className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{f.label}</span>
                <span className="text-xs font-semibold font-mono text-foreground">{f.value}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default FundamentalsSection;
