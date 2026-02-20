interface MetricCardProps {
  label: string;
  value: string;
}

const MetricCard = ({ label, value }: MetricCardProps) => (
  <div className="glass-card p-4">
    <span className="text-xs text-muted-foreground uppercase tracking-wider">{label}</span>
    <p className="text-lg font-semibold text-foreground mt-1 font-mono">{value}</p>
  </div>
);

export default MetricCard;
