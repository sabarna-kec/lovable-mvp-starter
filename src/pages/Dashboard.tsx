import StockHeader from "@/components/StockHeader";
import MarketOverview from "@/components/MarketOverview";
import StrategySection from "@/components/StrategySection";
import FundamentalsSection from "@/components/FundamentalsSection";
import NewsAnalysis from "@/components/NewsAnalysis";
import HistoricalTable from "@/components/HistoricalTable";

const Dashboard = () => (
  <div className="min-h-screen">
    {/* Zone 1: Stock Header (Sticky) */}
    <StockHeader />

    {/* Main Content */}
    <div className="max-w-[1400px] mx-auto px-4 py-6 space-y-8">
      {/* Zone 2: Market Overview */}
      <MarketOverview />

      {/* Zone 3: Strategy & Signals */}
      <StrategySection />

      {/* Zone 4: Fundamentals */}
      <FundamentalsSection />

      {/* Zone 5: News & Sentiment */}
      <NewsAnalysis />

      {/* Zone 6: Historical Data (Collapsible) */}
      <HistoricalTable />

      {/* Disclaimer */}
      <div className="surface-card p-4">
        <p className="text-[10px] text-muted-foreground text-center">
          ⚠️ StockIT provides simulated data for educational purposes only. This is not financial advice. Always consult a qualified financial advisor before making investment decisions.
        </p>
      </div>
    </div>
  </div>
);

export default Dashboard;
