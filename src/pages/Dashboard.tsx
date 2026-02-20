import { companyData } from "@/data/mockData";
import MetricCard from "@/components/MetricCard";
import PriceChart from "@/components/PriceChart";
import VolumeChart from "@/components/VolumeChart";
import HistoricalTable from "@/components/HistoricalTable";
import FinancialsSection from "@/components/FinancialsSection";
import AnalysisSummary from "@/components/AnalysisSummary";
import NewsAnalysis from "@/components/NewsAnalysis";
import StrategyGeneration from "@/components/StrategyGeneration";
import { TrendingDown } from "lucide-react";

const Dashboard = () => {
  const metrics = [
    { label: "Market Cap", value: companyData.marketCap },
    { label: "Current Price", value: `₹${companyData.price.toLocaleString()}` },
    { label: "Revenue", value: companyData.revenue },
    { label: "Net Profit", value: companyData.netProfit },
    { label: "EBITDA Margin", value: companyData.ebitdaMargin },
  ];

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      {/* Company Header */}
      <div className="glass-card p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">{companyData.name}</h1>
            <span className="text-sm text-muted-foreground">{companyData.exchange}: {companyData.symbol}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-foreground font-mono">₹{companyData.price.toLocaleString()}</span>
            <span className="flex items-center gap-1 text-negative text-sm font-medium">
              <TrendingDown className="h-4 w-4" />
              {companyData.change}%
            </span>
          </div>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {metrics.map((m) => (
          <MetricCard key={m.label} label={m.label} value={m.value} />
        ))}
      </div>

      {/* About */}
      <div className="glass-card p-6">
        <h2 className="text-lg font-semibold text-foreground mb-3">About</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">{companyData.about}</p>
      </div>

      {/* Strategy Generation */}
      <StrategyGeneration />

      {/* Charts */}
      <PriceChart />
      <VolumeChart />

      {/* News Analysis */}
      <NewsAnalysis />

      {/* Analysis */}
      <AnalysisSummary />
      <FinancialsSection />
      <HistoricalTable />
    </div>
  );
};

export default Dashboard;
