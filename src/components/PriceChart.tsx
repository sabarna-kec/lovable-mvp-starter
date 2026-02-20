import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import { priceHistory } from "@/data/mockData";

const periods = ["1Y", "6M", "3M", "1M"] as const;

const PriceChart = () => {
  const [period, setPeriod] = useState<string>("1Y");

  const sliceMap: Record<string, number> = { "1Y": 12, "6M": 6, "3M": 3, "1M": 1 };
  const data = priceHistory.slice(-sliceMap[period]).map(d => ({
    date: d.date.slice(5),
    price: d.close,
    open: d.open,
    high: d.high,
    low: d.low,
  }));

  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-foreground">Price Chart</h2>
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
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 14% 18%)" />
          <XAxis dataKey="date" stroke="hsl(215 15% 55%)" fontSize={11} tickLine={false} />
          <YAxis stroke="hsl(215 15% 55%)" fontSize={11} tickLine={false} domain={["auto", "auto"]} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(220 18% 10%)",
              border: "1px solid hsl(220 14% 18%)",
              borderRadius: "8px",
              color: "hsl(210 20% 92%)",
              fontSize: "12px",
            }}
            formatter={(value: number) => [`₹${value.toLocaleString()}`, "Price"]}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="hsl(142 60% 50%)"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 4, fill: "hsl(142 60% 50%)" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceChart;
