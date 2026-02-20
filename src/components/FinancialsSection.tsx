import { financials } from "@/data/mockData";

const FinancialsSection = () => (
  <div className="glass-card p-6">
    <h2 className="text-lg font-semibold text-foreground mb-4">Key Financials</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {financials.map((f) => (
        <div key={f.label} className="bg-secondary/50 rounded-md p-3">
          <span className="text-xs text-muted-foreground">{f.label}</span>
          <p className="text-sm font-semibold text-foreground mt-1 font-mono">{f.value}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FinancialsSection;
