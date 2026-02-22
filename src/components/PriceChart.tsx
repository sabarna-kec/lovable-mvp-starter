import { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
  ComposedChart, ReferenceArea, Bar,
} from "recharts";
import { priceHistory } from "@/data/mockData";

const periods = ["1Y", "6M", "3M", "1M"] as const;
type ChartType = "line" | "candle";

const tooltipStyle = {
  backgroundColor: "hsl(222 20% 9%)",
  border: "1px solid hsl(222 14% 16%)",
  borderRadius: "6px",
  color: "hsl(210 20% 92%)",
  fontSize: "11px",
};

const PriceChart = () => {
  const [period, setPeriod] = useState<string>("1Y");
  const [chartType, setChartType] = useState<ChartType>("candle");

  const sliceMap: Record<string, number> = { "1Y": 12, "6M": 6, "3M": 3, "1M": 1 };
  const data = priceHistory.slice(-sliceMap[period]).map(d => ({
    date: d.date.slice(5),
    price: d.close,
    open: d.open,
    high: d.high,
    low: d.low,
    close: d.close,
    isUp: d.close >= d.open,
    bodyLow: Math.min(d.open, d.close),
    bodyHigh: Math.max(d.open, d.close),
  }));

  const allValues = data.flatMap(d => [d.high, d.low]);
  const minY = Math.min(...allValues) - 50;
  const maxY = Math.max(...allValues) + 50;

  return (
    <div className="surface-card p-5">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5 bg-muted rounded p-0.5">
            {(["candle", "line"] as ChartType[]).map(t => (
              <button
                key={t}
                onClick={() => setChartType(t)}
                className={`px-2.5 py-1 rounded text-[10px] font-medium transition-colors ${
                  chartType === t ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t === "line" ? "Line" : "Candlestick"}
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-0.5 bg-muted rounded p-0.5">
          {periods.map(p => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-2.5 py-1 rounded text-[10px] font-medium transition-colors ${
                period === p ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        {chartType === "line" ? (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(222 14% 16%)" />
            <XAxis dataKey="date" stroke="hsl(215 15% 50%)" fontSize={10} tickLine={false} />
            <YAxis stroke="hsl(215 15% 50%)" fontSize={10} tickLine={false} domain={["auto", "auto"]} />
            <Tooltip contentStyle={tooltipStyle} formatter={(value: number) => [`₹${value.toLocaleString()}`, "Price"]} />
            <Line type="monotone" dataKey="price" stroke="hsl(142 60% 50%)" strokeWidth={2} dot={false} activeDot={{ r: 3, fill: "hsl(142 60% 50%)" }} />
          </LineChart>
        ) : (
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(222 14% 16%)" />
            <XAxis dataKey="date" stroke="hsl(215 15% 50%)" fontSize={10} tickLine={false} />
            <YAxis stroke="hsl(215 15% 50%)" fontSize={10} tickLine={false} domain={[minY, maxY]} />
            <Tooltip
              contentStyle={tooltipStyle}
              content={({ active, payload }) => {
                if (!active || !payload?.length) return null;
                const d = payload[0].payload;
                return (
                  <div style={tooltipStyle} className="p-2">
                    <p className="text-[10px] text-muted-foreground mb-1">{d.date}</p>
                    <p className="text-[10px]">O: <span className="font-mono font-semibold">₹{d.open.toLocaleString()}</span></p>
                    <p className="text-[10px]">H: <span className="font-mono font-semibold">₹{d.high.toLocaleString()}</span></p>
                    <p className="text-[10px]">L: <span className="font-mono font-semibold">₹{d.low.toLocaleString()}</span></p>
                    <p className="text-[10px]">C: <span className={`font-mono font-semibold ${d.isUp ? "text-positive" : "text-negative"}`}>₹{d.close.toLocaleString()}</span></p>
                  </div>
                );
              }}
            />
            <Bar dataKey="high" fill="transparent" />
            {data.map((entry, i) => {
              const color = entry.isUp ? "hsl(142, 60%, 50%)" : "hsl(0, 72%, 55%)";
              return (
                <ReferenceArea key={`candle-${i}`} x1={entry.date} x2={entry.date} y1={entry.bodyLow} y2={entry.bodyHigh} fill={color} fillOpacity={0.9} stroke={color} strokeWidth={1} />
              );
            })}
            {data.map((entry, i) => (
              <ReferenceArea key={`wick-${i}`} x1={entry.date} x2={entry.date} y1={entry.low} y2={entry.high} fill="transparent" stroke={entry.isUp ? "hsl(142, 60%, 50%)" : "hsl(0, 72%, 55%)"} strokeWidth={1} />
            ))}
          </ComposedChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default PriceChart;
