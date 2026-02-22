import PriceChart from "./PriceChart";
import VolumeChart from "./VolumeChart";
import TrendInsights from "./TrendInsights";

const MarketOverview = () => (
  <div>
    <h2 className="text-base font-semibold text-foreground mb-4">Market Overview</h2>
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-4">
      {/* Left: Charts */}
      <div className="space-y-4">
        <PriceChart />
        <VolumeChart />
      </div>
      {/* Right: Trend Insights */}
      <TrendInsights />
    </div>
  </div>
);

export default MarketOverview;
