export const newsData = [
  {
    id: 1,
    title: "TCS wins $2B deal with European bank for digital transformation",
    source: "Economic Times",
    date: "2026-02-17",
    sentiment: "positive" as const,
    summary: "TCS secured a major contract to modernize banking infrastructure across 15 countries.",
  },
  {
    id: 2,
    title: "IT sector faces headwinds amid global slowdown concerns",
    source: "Mint",
    date: "2026-02-15",
    sentiment: "negative" as const,
    summary: "Analysts warn of potential revenue pressure for Indian IT companies in Q4 FY26.",
  },
  {
    id: 3,
    title: "TCS announces quarterly dividend of ₹10 per share",
    source: "Business Standard",
    date: "2026-02-13",
    sentiment: "positive" as const,
    summary: "Board approves interim dividend, reaffirming shareholder return commitment.",
  },
  {
    id: 4,
    title: "TCS attrition rate stabilizes at 12.5% in Q3",
    source: "LiveMint",
    date: "2026-02-10",
    sentiment: "neutral" as const,
    summary: "Employee retention improving compared to industry peers, management remains cautious.",
  },
  {
    id: 5,
    title: "AI adoption to drive 8-10% revenue uplift for TCS by FY28",
    source: "Reuters",
    date: "2026-02-08",
    sentiment: "positive" as const,
    summary: "Company's AI and GenAI services portfolio expanding rapidly with enterprise demand.",
  },
];

export const strategyData = {
  recommendation: "HOLD",
  confidence: 62,
  riskLevel: "Medium",
  targetPrice: 3100,
  stopLoss: 2500,
  timeHorizon: "3-6 months",
  reasoning: [
    "Bearish short-term trend with -27% decline over the past year suggests price weakness.",
    "Strong fundamentals: 26% EBITDA margin, low debt-to-equity (0.05), high ROE (45.2%).",
    "Volume spikes indicate institutional activity — potential accumulation zone.",
    "Neutral news sentiment — no major catalysts in either direction.",
    "Current P/E of 28.4 is reasonable for IT sector leader with stable earnings.",
  ],
  actions: [
    { action: "Accumulate", range: "₹2,500 - ₹2,700", rationale: "Near current support levels" },
    { action: "Target 1", range: "₹3,000 - ₹3,100", rationale: "Previous resistance zone" },
    { action: "Stop Loss", range: "Below ₹2,450", rationale: "Break below key support" },
  ],
};
