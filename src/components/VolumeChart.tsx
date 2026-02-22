import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { volumeData } from "@/data/mockData";

const VolumeChart = () => {
  const data = volumeData.map(d => ({
    date: d.date,
    volume: d.volume / 100000,
    spike: d.spike,
  }));

  return (
    <div className="surface-card p-5">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Volume</span>
        <span className="text-[10px] text-warning bg-chart-warning/10 px-2 py-0.5 rounded border border-chart-warning/20">⚠ Spikes Detected</span>
      </div>
      <ResponsiveContainer width="100%" height={120}>
        <BarChart data={data}>
          <XAxis dataKey="date" stroke="hsl(215 15% 50%)" fontSize={9} tickLine={false} />
          <YAxis stroke="hsl(215 15% 50%)" fontSize={9} tickLine={false} tickFormatter={v => `${v}L`} />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(222 20% 9%)",
              border: "1px solid hsl(222 14% 16%)",
              borderRadius: "6px",
              color: "hsl(210 20% 92%)",
              fontSize: "10px",
            }}
            formatter={(value: number) => [`${value.toFixed(1)}L`, "Volume"]}
          />
          <Bar dataKey="volume" radius={[2, 2, 0, 0]}>
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.spike ? "hsl(38 90% 55%)" : "hsl(199 80% 55%)"} opacity={0.7} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VolumeChart;
