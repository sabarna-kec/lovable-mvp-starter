import { companyData } from "@/data/mockData";
import { TrendingDown, Activity, BarChart2, ShieldAlert } from "lucide-react";

const { summary } = companyData;

const TrendInsights = () => (
  <div className="space-y-3 h-full flex flex-col">
    {/* Trend */}
    <div className="surface-card p-4 flex-1">
      <div className="flex items-center gap-2 mb-3">
        <TrendingDown className="h-4 w-4 text-negative" />
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Trend Summary</span>
      </div>
      <div className="flex items-baseline gap-2 mb-2">
        <span className="text-lg font-bold text-negative">{summary.trend}</span>
        <TrendingDown className="h-3.5 w-3.5 text-negative" />
      </div>
      <div className="mb-1">
        <div className="flex items-center justify-between text-[10px] text-muted-foreground mb-1">
          <span>Strength</span>
          <span className="font-mono">{summary.trendStrength}%</span>
        </div>
        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
          <div className="h-full rounded-full bg-chart-negative transition-all" style={{ width: `${summary.trendStrength}%` }} />
        </div>
      </div>
      <span className="text-[10px] text-muted-foreground">Timeframe: Short-Term</span>
    </div>

    {/* Volume */}
    <div className="surface-card p-4 flex-1">
      <div className="flex items-center gap-2 mb-3">
        <BarChart2 className="h-4 w-4 text-chart-warning" />
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Volume Behavior</span>
      </div>
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Status</span>
          <span className="font-medium text-warning">Spike Detected</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Institutional</span>
          <span className="font-medium text-foreground">{summary.institutionalActivity}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Delivery %</span>
          <span className="font-mono font-medium text-foreground">{summary.deliveryPercent}%</span>
        </div>
      </div>
    </div>

    {/* Risk */}
    <div className="surface-card p-4 flex-1">
      <div className="flex items-center gap-2 mb-3">
        <ShieldAlert className="h-4 w-4 text-destructive" />
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Risk Metrics</span>
      </div>
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Volatility</span>
          <span className="font-medium text-warning">{summary.volatility}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Beta</span>
          <span className="font-mono font-medium text-foreground">{companyData.beta}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">ATR</span>
          <span className="font-mono font-medium text-foreground">₹{summary.atr}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Risk Level</span>
          <span className="px-1.5 py-0.5 text-[10px] font-medium rounded bg-chart-warning/10 text-warning border border-chart-warning/20">
            {summary.riskLevel}
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default TrendInsights;
