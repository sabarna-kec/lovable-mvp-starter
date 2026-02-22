import { useState } from "react";
import { newsData } from "@/data/newsData";
import { TrendingUp, TrendingDown, Minus, Newspaper, ChevronDown, ChevronUp } from "lucide-react";

const sentimentConfig = {
  positive: { icon: TrendingUp, className: "text-positive", label: "Positive", bg: "bg-chart-positive/10 border-chart-positive/20" },
  negative: { icon: TrendingDown, className: "text-negative", label: "Negative", bg: "bg-chart-negative/10 border-chart-negative/20" },
  neutral: { icon: Minus, className: "text-muted-foreground", label: "Neutral", bg: "bg-secondary border-border" },
};

const impactConfig = {
  high: "bg-chart-negative/10 text-negative border border-chart-negative/20",
  medium: "bg-chart-warning/10 text-warning border border-chart-warning/20",
  low: "bg-secondary text-muted-foreground border border-border",
};

const filterTabs = ["all", "earnings", "orders", "sector", "regulation"] as const;

const NewsAnalysis = () => {
  const [filter, setFilter] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const positiveCount = newsData.filter(n => n.sentiment === "positive").length;
  const negativeCount = newsData.filter(n => n.sentiment === "negative").length;
  const neutralCount = newsData.filter(n => n.sentiment === "neutral").length;
  const total = newsData.length;

  const filtered = filter === "all" ? newsData : newsData.filter(n => n.category === filter);

  return (
    <div>
      <h2 className="text-base font-semibold text-foreground mb-4">News & Sentiment</h2>
      <div className="surface-card p-5">
        {/* Sentiment Distribution */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-xs mb-2">
            <span className="text-muted-foreground">Sentiment Distribution</span>
            <div className="flex items-center gap-3">
              <span className="text-positive text-[10px]">● {positiveCount} Positive</span>
              <span className="text-muted-foreground text-[10px]">● {neutralCount} Neutral</span>
              <span className="text-negative text-[10px]">● {negativeCount} Negative</span>
            </div>
          </div>
          <div className="flex h-2 rounded-full overflow-hidden">
            <div className="bg-chart-positive transition-all" style={{ width: `${(positiveCount / total) * 100}%` }} />
            <div className="bg-chart-warning transition-all" style={{ width: `${(neutralCount / total) * 100}%` }} />
            <div className="bg-chart-negative transition-all" style={{ width: `${(negativeCount / total) * 100}%` }} />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-1 mb-4">
          {filterTabs.map(tab => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-3 py-1 rounded text-[10px] font-medium capitalize transition-colors ${
                filter === tab ? "bg-primary/10 text-primary border border-primary/20" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* News Cards */}
        <div className="space-y-2">
          {filtered.map(news => {
            const config = sentimentConfig[news.sentiment];
            const Icon = config.icon;
            const expanded = expandedId === news.id;
            return (
              <div key={news.id} className="p-3 rounded-md bg-secondary/30 hover:bg-secondary/50 transition-colors">
                <div className="flex items-start gap-3">
                  <Icon className={`h-4 w-4 mt-0.5 flex-shrink-0 ${config.className}`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${config.bg}`}>
                        {config.label}
                      </span>
                      <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${impactConfig[news.impact]}`}>
                        {news.impact.charAt(0).toUpperCase() + news.impact.slice(1)} Impact
                      </span>
                    </div>
                    <h3 className="text-sm font-medium text-foreground leading-tight">{news.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{news.summary}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                        <span className="font-medium">{news.source}</span>
                        <span>•</span>
                        <span>{news.date}</span>
                      </div>
                      <button
                        onClick={() => setExpandedId(expanded ? null : news.id)}
                        className="flex items-center gap-1 text-[10px] text-accent hover:text-accent/80 transition-colors"
                      >
                        Why this matters
                        {expanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                      </button>
                    </div>
                    {expanded && (
                      <div className="mt-2 p-2 rounded bg-accent/5 border border-accent/10 text-xs text-secondary-foreground animate-fade-in">
                        {news.whyItMatters}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewsAnalysis;
