import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { volumeData } from "@/data/mockData";

const VolumeChart = () => {
  const data = volumeData.map(d => ({
    date: d.date,
    volume: d.volume / 100000,
    spike: d.spike,
  }));

  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-foreground">Volume Analysis</h2>
        <span className="text-xs text-warning bg-secondary px-2 py-1 rounded">⚠ Volume Spikes Detected</span>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <XAxis dataKey="date" stroke="hsl(215 15% 55%)" fontSize={10} tickLine={false} />
          <YAxis stroke="hsl(215 15% 55%)" fontSize={10} tickLine={false} tickFormatter={(v) => `${v}L`} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(220 18% 10%)",
              border: "1px solid hsl(220 14% 18%)",
              borderRadius: "8px",
              color: "hsl(210 20% 92%)",
              fontSize: "12px",
            }}
            formatter={(value: number) => [`${value.toFixed(1)}L`, "Volume"]}
          />
          <Bar dataKey="volume" radius={[3, 3, 0, 0]}>
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.spike ? "hsl(38 90% 55%)" : "hsl(199 80% 55%)"} opacity={0.8} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VolumeChart;
