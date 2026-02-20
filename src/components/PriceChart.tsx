import { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
  BarChart, Bar, Cell, ComposedChart, ReferenceArea,
} from "recharts";
import { priceHistory } from "@/data/mockData";

const periods = ["1Y", "6M", "3M", "1M"] as const;
type ChartType = "line" | "candle";

interface CandleProps {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  open: number;
  close: number;
  high: number;
  low: number;
  yAxis?: { scale: (v: number) => number };
}

const CandlestickBar = (props: any) => {
  const { x, y, width, open, close, high, low } = props;
  if (x == null || y == null) return null;

  const isUp = close >= open;
  const color = isUp ? "hsl(142, 60%, 50%)" : "hsl(0, 72%, 55%)";
  const bodyTop = Math.min(props.openY, props.closeY);
  const bodyHeight = Math.abs(props.openY - props.closeY) || 1;

  return (
    <g>
      {/* Wick */}
      <line
        x1={x + width / 2}
        x2={x + width / 2}
        y1={props.highY}
        y2={props.lowY}
        stroke={color}
        strokeWidth={1}
      />
      {/* Body */}
      <rect
        x={x + 2}
        y={bodyTop}
        width={Math.max(width - 4, 4)}
        height={bodyHeight}
        fill={color}
        rx={1}
      />
    </g>
  );
};

const PriceChart = () => {
  const [period, setPeriod] = useState<string>("1Y");
  const [chartType, setChartType] = useState<ChartType>("line");

  const sliceMap: Record<string, number> = { "1Y": 12, "6M": 6, "3M": 3, "1M": 1 };
  const data = priceHistory.slice(-sliceMap[period]).map(d => ({
    date: d.date.slice(5),
    price: d.close,
    open: d.open,
    high: d.high,
    low: d.low,
    close: d.close,
    isUp: d.close >= d.open,
    // For candlestick body
    bodyLow: Math.min(d.open, d.close),
    bodyHigh: Math.max(d.open, d.close),
  }));

  const allValues = data.flatMap(d => [d.high, d.low]);
  const minY = Math.min(...allValues) - 50;
  const maxY = Math.max(...allValues) + 50;

  const tooltipStyle = {
    backgroundColor: "hsl(220 18% 10%)",
    border: "1px solid hsl(220 14% 18%)",
    borderRadius: "8px",
    color: "hsl(210 20% 92%)",
    fontSize: "12px",
  };

  return (
    <div className="glass-card p-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-semibold text-foreground">Chart Analysis</h2>
          <div className="flex gap-1 bg-secondary rounded-md p-0.5">
            {(["line", "candle"] as ChartType[]).map((t) => (
              <button
                key={t}
                onClick={() => setChartType(t)}
                className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                  chartType === t
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t === "line" ? "Line" : "Candlestick"}
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-1">
          {periods.map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                period === p
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        {chartType === "line" ? (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 14% 18%)" />
            <XAxis dataKey="date" stroke="hsl(215 15% 55%)" fontSize={11} tickLine={false} />
            <YAxis stroke="hsl(215 15% 55%)" fontSize={11} tickLine={false} domain={["auto", "auto"]} />
            <Tooltip contentStyle={tooltipStyle} formatter={(value: number) => [`₹${value.toLocaleString()}`, "Price"]} />
            <Line type="monotone" dataKey="price" stroke="hsl(142 60% 50%)" strokeWidth={2} dot={false} activeDot={{ r: 4, fill: "hsl(142 60% 50%)" }} />
          </LineChart>
        ) : (
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 14% 18%)" />
            <XAxis dataKey="date" stroke="hsl(215 15% 55%)" fontSize={11} tickLine={false} />
            <YAxis stroke="hsl(215 15% 55%)" fontSize={11} tickLine={false} domain={[minY, maxY]} />
            <Tooltip
              contentStyle={tooltipStyle}
              content={({ active, payload }) => {
                if (!active || !payload?.length) return null;
                const d = payload[0].payload;
                return (
                  <div style={tooltipStyle} className="p-2">
                    <p className="text-xs text-muted-foreground mb-1">{d.date}</p>
                    <p className="text-xs">Open: <span className="font-mono font-semibold">₹{d.open.toLocaleString()}</span></p>
                    <p className="text-xs">High: <span className="font-mono font-semibold">₹{d.high.toLocaleString()}</span></p>
                    <p className="text-xs">Low: <span className="font-mono font-semibold">₹{d.low.toLocaleString()}</span></p>
                    <p className="text-xs">Close: <span className={`font-mono font-semibold ${d.isUp ? "text-positive" : "text-negative"}`}>₹{d.close.toLocaleString()}</span></p>
                  </div>
                );
              }}
            />
            {/* Wicks as error-bar-like lines */}
            <Bar dataKey="high" fill="transparent" />
            {data.map((entry, i) => {
              const color = entry.isUp ? "hsl(142, 60%, 50%)" : "hsl(0, 72%, 55%)";
              return (
                <ReferenceArea
                  key={`candle-${i}`}
                  x1={entry.date}
                  x2={entry.date}
                  y1={entry.bodyLow}
                  y2={entry.bodyHigh}
                  fill={color}
                  fillOpacity={0.9}
                  stroke={color}
                  strokeWidth={1}
                />
              );
            })}
            {/* Wick lines rendered via reference areas (thin) */}
            {data.map((entry, i) => (
              <ReferenceArea
                key={`wick-${i}`}
                x1={entry.date}
                x2={entry.date}
                y1={entry.low}
                y2={entry.high}
                fill="transparent"
                stroke={entry.isUp ? "hsl(142, 60%, 50%)" : "hsl(0, 72%, 55%)"}
                strokeWidth={1}
              />
            ))}
          </ComposedChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default PriceChart;
