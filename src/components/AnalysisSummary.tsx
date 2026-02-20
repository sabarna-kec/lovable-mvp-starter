import { companyData } from "@/data/mockData";

const AnalysisSummary = () => {
  const { summary } = companyData;

  return (
    <div className="glass-card p-6">
      <h2 className="text-lg font-semibold text-foreground mb-4">Analysis Summary</h2>
      <div className="space-y-3 text-sm text-secondary-foreground">
        <p>
          <span className="font-medium">📊 Performance:</span> The stock has delivered a{" "}
          <span className="text-negative font-semibold">{summary.performance}%</span> return.
          Current trend is <span className="text-negative font-semibold">{summary.trend}</span>.
        </p>
        <p>
          <span className="font-medium">💹 Volume Insight:</span>{" "}
          {summary.volumeSpike
            ? <span className="text-warning">⚠️ Significant volume spikes detected, indicating high institutional or retail interest.</span>
            : "Normal volume levels observed."}
        </p>
        <p>
          <span className="font-medium">📰 Sentiment:</span> News cycle is currently{" "}
          <span className="font-semibold">{summary.sentiment}</span> — suggests a wait-and-watch approach.
        </p>
      </div>
    </div>
  );
};

export default AnalysisSummary;
