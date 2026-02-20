import { useState } from "react";
import { strategyData } from "@/data/newsData";
import { Sparkles, Target, ShieldAlert, Clock, ChevronDown, ChevronUp } from "lucide-react";

const recColors: Record<string, string> = {
  BUY: "text-positive bg-chart-positive/10 border-chart-positive/30",
  HOLD: "text-warning bg-chart-warning/10 border-chart-warning/30",
  SELL: "text-negative bg-chart-negative/10 border-chart-negative/30",
};

const StrategyGeneration = () => {
  const [generated, setGenerated] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setGenerated(true);
    }, 1500);
  };

  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">Strategy Generation</h2>
        </div>
        <button
          onClick={handleGenerate}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium transition-all hover:opacity-90 disabled:opacity-50 glow-green"
        >
          {loading ? (
            <>
              <div className="h-4 w-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              <Sparkles className="h-4 w-4" />
              Generate Strategy
            </>
          )}
        </button>
      </div>

      {!generated && !loading && (
        <div className="text-center py-12 text-muted-foreground">
          <Sparkles className="h-10 w-10 mx-auto mb-3 opacity-30" />
          <p className="text-sm">Click "Generate Strategy" to get AI-powered investment analysis</p>
          <p className="text-xs mt-1 opacity-70">Based on price action, volume, financials & news sentiment</p>
        </div>
      )}

      {generated && (
        <div className="space-y-5 animate-fade-in">
          {/* Recommendation Badge */}
          <div className="flex flex-wrap items-center gap-4">
            <span className={`px-4 py-2 rounded-lg border text-lg font-bold font-mono ${recColors[strategyData.recommendation]}`}>
              {strategyData.recommendation}
            </span>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1.5">
                <Target className="h-4 w-4 text-accent" />
                <span className="text-muted-foreground">Target:</span>
                <span className="font-mono font-semibold text-foreground">₹{strategyData.targetPrice.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldAlert className="h-4 w-4 text-destructive" />
                <span className="text-muted-foreground">Stop Loss:</span>
                <span className="font-mono font-semibold text-foreground">₹{strategyData.stopLoss.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">{strategyData.timeHorizon}</span>
              </div>
            </div>
          </div>

          {/* Confidence Bar */}
          <div>
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-muted-foreground">Confidence</span>
              <span className="font-mono text-foreground">{strategyData.confidence}%</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-primary transition-all duration-1000"
                style={{ width: `${strategyData.confidence}%` }}
              />
            </div>
          </div>

          {/* Reasoning */}
          <div>
            <h3 className="text-sm font-medium text-foreground mb-2">Key Reasoning</h3>
            <ul className="space-y-2">
              {strategyData.reasoning.map((r, i) => (
                <li key={i} className="flex gap-2 text-xs text-secondary-foreground">
                  <span className="text-primary mt-0.5">▸</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Plan */}
          <div>
            <h3 className="text-sm font-medium text-foreground mb-2">Action Plan</h3>
            <div className="grid gap-2">
              {strategyData.actions.map((a, i) => (
                <div key={i} className="flex items-center justify-between bg-secondary/50 rounded-md p-3">
                  <div>
                    <span className="text-xs font-medium text-foreground">{a.action}</span>
                    <span className="text-xs text-muted-foreground ml-2">— {a.rationale}</span>
                  </div>
                  <span className="font-mono text-sm font-semibold text-foreground">{a.range}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-xs text-muted-foreground italic">
            ⚠️ This is a simulated analysis for educational purposes only. Not financial advice.
          </p>
        </div>
      )}
    </div>
  );
};

export default StrategyGeneration;
