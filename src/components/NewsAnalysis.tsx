import { newsData } from "@/data/newsData";
import { TrendingUp, TrendingDown, Minus, Newspaper } from "lucide-react";

const sentimentConfig = {
  positive: { icon: TrendingUp, className: "text-positive", label: "Positive" },
  negative: { icon: TrendingDown, className: "text-negative", label: "Negative" },
  neutral: { icon: Minus, className: "text-muted-foreground", label: "Neutral" },
};

const NewsAnalysis = () => {
  const positiveCount = newsData.filter(n => n.sentiment === "positive").length;
  const negativeCount = newsData.filter(n => n.sentiment === "negative").length;
  const neutralCount = newsData.filter(n => n.sentiment === "neutral").length;

  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Newspaper className="h-5 w-5 text-accent" />
          <h2 className="text-lg font-semibold text-foreground">News Analysis</h2>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <span className="text-positive">● {positiveCount} Positive</span>
          <span className="text-negative">● {negativeCount} Negative</span>
          <span className="text-muted-foreground">● {neutralCount} Neutral</span>
        </div>
      </div>

      {/* Sentiment Bar */}
      <div className="flex h-2 rounded-full overflow-hidden mb-6">
        <div className="bg-chart-positive" style={{ width: `${(positiveCount / newsData.length) * 100}%` }} />
        <div className="bg-chart-warning" style={{ width: `${(neutralCount / newsData.length) * 100}%` }} />
        <div className="bg-chart-negative" style={{ width: `${(negativeCount / newsData.length) * 100}%` }} />
      </div>

      <div className="space-y-3">
        {newsData.map((news) => {
          const config = sentimentConfig[news.sentiment];
          const Icon = config.icon;
          return (
            <div key={news.id} className="flex gap-3 p-3 rounded-md bg-secondary/50 hover:bg-secondary transition-colors">
              <div className="mt-0.5">
                <Icon className={`h-4 w-4 ${config.className}`} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-foreground leading-tight">{news.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{news.summary}</p>
                <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                  <span>{news.source}</span>
                  <span>•</span>
                  <span>{news.date}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsAnalysis;
