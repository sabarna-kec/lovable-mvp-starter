import { historicalData } from "@/data/mockData";

const HistoricalTable = () => (
  <div className="glass-card p-6">
    <h2 className="text-lg font-semibold text-foreground mb-4">Historical Data</h2>
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border">
            {["Date", "Open", "High", "Low", "Close", "Volume", "Chg%"].map((h) => (
              <th key={h} className="text-left py-2 px-3 text-xs text-muted-foreground font-medium uppercase tracking-wider">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {historicalData.map((row) => (
            <tr key={row.date} className="border-b border-border/50 hover:bg-secondary/50 transition-colors">
              <td className="py-2 px-3 font-mono text-muted-foreground">{row.date}</td>
              <td className="py-2 px-3 font-mono">₹{row.open.toLocaleString()}</td>
              <td className="py-2 px-3 font-mono">₹{row.high.toLocaleString()}</td>
              <td className="py-2 px-3 font-mono">₹{row.low.toLocaleString()}</td>
              <td className="py-2 px-3 font-mono">₹{row.close.toLocaleString()}</td>
              <td className="py-2 px-3 font-mono text-muted-foreground">{row.volume}</td>
              <td className={`py-2 px-3 font-mono font-medium ${row.change >= 0 ? "text-positive" : "text-negative"}`}>
                {row.change >= 0 ? "+" : ""}{row.change.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default HistoricalTable;
