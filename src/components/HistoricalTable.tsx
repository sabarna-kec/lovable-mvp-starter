import { useState } from "react";
import { historicalData } from "@/data/mockData";
import { ChevronDown, ChevronUp, Download } from "lucide-react";

const HistoricalTable = () => {
  const [open, setOpen] = useState(false);

  const handleCSV = () => {
    const header = "Date,Open,High,Low,Close,Volume,Change%\n";
    const rows = historicalData.map(r => `${r.date},${r.open},${r.high},${r.low},${r.close},${r.volume},${r.change}`).join("\n");
    const blob = new Blob([header + rows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "TCS_historical.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="surface-card">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 hover:bg-secondary/30 transition-colors"
      >
        <h2 className="text-base font-semibold text-foreground">Historical Price Data</h2>
        <div className="flex items-center gap-2">
          {open && (
            <button
              onClick={(e) => { e.stopPropagation(); handleCSV(); }}
              className="flex items-center gap-1 px-2 py-1 rounded text-[10px] font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
            >
              <Download className="h-3 w-3" />
              CSV
            </button>
          )}
          {open ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
        </div>
      </button>
      {open && (
        <div className="px-5 pb-5 animate-fade-in">
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border">
                  {["Date", "Open", "High", "Low", "Close", "Volume", "Chg%"].map(h => (
                    <th key={h} className="text-left py-2 px-3 text-[10px] text-muted-foreground font-medium uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {historicalData.map(row => {
                  const isAbnormalVol = row.volume.includes("106") || row.volume.includes("111") || row.volume.includes("108");
                  return (
                    <tr key={row.date} className={`border-b border-border/30 hover:bg-secondary/30 transition-colors ${isAbnormalVol ? "bg-chart-warning/5" : ""}`}>
                      <td className="py-2 px-3 font-mono text-muted-foreground">{row.date}</td>
                      <td className="py-2 px-3 font-mono">₹{row.open.toLocaleString()}</td>
                      <td className="py-2 px-3 font-mono">₹{row.high.toLocaleString()}</td>
                      <td className="py-2 px-3 font-mono">₹{row.low.toLocaleString()}</td>
                      <td className="py-2 px-3 font-mono">₹{row.close.toLocaleString()}</td>
                      <td className={`py-2 px-3 font-mono ${isAbnormalVol ? "text-warning font-medium" : "text-muted-foreground"}`}>{row.volume}</td>
                      <td className={`py-2 px-3 font-mono font-medium ${row.change >= 0 ? "text-positive" : "text-negative"}`}>
                        {row.change >= 0 ? "+" : ""}{row.change.toFixed(2)}%
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default HistoricalTable;
