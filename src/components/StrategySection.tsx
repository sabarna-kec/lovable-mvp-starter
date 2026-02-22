import { useState } from "react";
import { strategyData } from "@/data/newsData";
import { Sparkles, Target, ShieldAlert, Clock, Crosshair, Scale } from "lucide-react";

const recColors: Record<string, string> = {
  BUY: "text-positive bg-chart-positive/10 border-chart-positive/30",
  HOLD: "text-warning bg-chart-warning/10 border-chart-warning/30",
  SELL: "text-negative bg-chart-negative/10 border-chart-negative/30",
};

type ReasoningTab = "technical" | "fundamental" | "sentiment" | "risks";
const tabs: { key: ReasoningTab; label: string }[] = [
  { key: "technical", label: "Technical" },
  { key: "fundamental", label: "Fundamental" },
  { key: "sentiment", label: "Sentiment" },
  { key: "risks", label: "Risks" },
];

const StrategySection = () => {
  const [generated, setGenerated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<ReasoningTab>("technical");

  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => { setLoading(false); setGenerated(true); }, 1500);
  };

  if (!generated) {
    return (
      <div className="surface-highlight p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-ai" />
            <h2 className="text-base font-semibold text-foreground">Strategy & Signals</h2>
          </div>
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-ai text-white text-sm font-medium transition-all hover:opacity-90 disabled:opacity-50 glow-purple"
          >
            {loading ? (
              <><div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Analyzing...</>
            ) : (
              <><Sparkles className="h-4 w-4" />Generate Strategy</>
            )}
          </button>
        </div>
        <div className="text-center py-10 text-muted-foreground">
          <Sparkles className="h-8 w-8 mx-auto mb-2 opacity-20" />
          <p className="text-sm">Click "Generate Strategy" for AI-powered analysis</p>
        </div>
      </div>
    );
  }

  return (
    <div className="surface-highlight p-6 glow-purple">
      <div className="flex items-center gap-2 mb-5">
        <Sparkles className="h-5 w-5 text-ai" />
        <h2 className="text-base font-semibold text-foreground">Strategy & Signals</h2>
        <span className="ml-auto text-[10px] text-ai font-medium px-2 py-0.5 rounded-full bg-ai/10 border border-ai/20">AI Powered</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 animate-fade-in">
        {/* Card 1: AI Recommendation */}
        <div className="surface-card p-5">
          <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">AI Recommendation</h3>
          <div className="text-center mb-4">
            <span className={`inline-block px-5 py-2 rounded-md border text-xl font-bold font-mono ${recColors[strategyData.recommendation]}`}>
              {strategyData.recommendation}
            </span>
          </div>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-[10px] text-muted-foreground mb-1">
                <span>Confidence</span>
                <span className="font-mono">{strategyData.confidence}%</span>
              </div>
              <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-ai transition-all duration-1000" style={{ width: `${strategyData.confidence}%` }} />
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs">
              <Clock className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="text-muted-foreground">Horizon:</span>
              <span className="font-medium text-foreground">{strategyData.timeHorizon}</span>
            </div>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <div className="text-center p-2 rounded bg-secondary/60">
                <span className="text-[9px] text-muted-foreground block">Technical</span>
                <span className="text-sm font-bold font-mono text-foreground">{strategyData.technicalScore}/100</span>
              </div>
              <div className="text-center p-2 rounded bg-secondary/60">
                <span className="text-[9px] text-muted-foreground block">Fundamental</span>
                <span className="text-sm font-bold font-mono text-foreground">{strategyData.fundamentalScore}/100</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Entry Plan */}
        <div className="surface-card p-5">
          <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">Entry Plan</h3>
          <div className="space-y-3">
            {[
              { icon: Crosshair, label: "Accumulation Zone", value: strategyData.accumulationZone, color: "text-positive" },
              { icon: Target, label: "Breakout Above", value: strategyData.breakoutAbove, color: "text-accent" },
              { icon: ShieldAlert, label: "Stop Loss", value: `Below ${strategyData.stopLoss.toLocaleString()}`, color: "text-negative" },
              { icon: Scale, label: "Risk : Reward", value: strategyData.riskReward, color: "text-foreground" },
            ].map(item => (
              <div key={item.label} className="flex items-center justify-between py-1.5 border-b border-border/50 last:border-0">
                <div className="flex items-center gap-2">
                  <item.icon className={`h-3.5 w-3.5 ${item.color}`} />
                  <span className="text-xs text-muted-foreground">{item.label}</span>
                </div>
                <span className={`text-xs font-semibold font-mono ${item.color}`}>{item.value}</span>
              </div>
            ))}
            <div className="pt-2 border-t border-border/50">
              <span className="text-[10px] text-muted-foreground">Position Size:</span>
              <span className="text-xs font-medium text-foreground ml-2">{strategyData.positionSize}</span>
            </div>
          </div>
        </div>

        {/* Card 3: Reasoning Tabs */}
        <div className="surface-card p-5">
          <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">Reasoning</h3>
          <div className="flex gap-1 mb-3">
            {tabs.map(t => (
              <button
                key={t.key}
                onClick={() => setActiveTab(t.key)}
                className={`px-2 py-1 rounded text-[10px] font-medium transition-colors ${
                  activeTab === t.key ? "bg-ai/20 text-ai" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <ul className="space-y-2">
            {strategyData.reasoning[activeTab].map((r, i) => (
              <li key={i} className="flex gap-2 text-xs text-secondary-foreground animate-slide-in" style={{ animationDelay: `${i * 50}ms` }}>
                <span className="text-ai mt-0.5 flex-shrink-0">▸</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="text-[10px] text-muted-foreground italic mt-4">
        ⚠️ Simulated analysis for educational purposes only. Not financial advice.
      </p>
    </div>
  );
};

export default StrategySection;
