export const companies = [
  { symbol: "TCS.NS", name: "Tata Consultancy Services Limited", exchange: "NSE" },
  { symbol: "INFY.NS", name: "Infosys Limited", exchange: "NSE" },
  { symbol: "RELIANCE.NS", name: "Reliance Industries Limited", exchange: "NSE" },
  { symbol: "HDFCBANK.NS", name: "HDFC Bank Limited", exchange: "NSE" },
  { symbol: "WIPRO.NS", name: "Wipro Limited", exchange: "NSE" },
];

export const companyData = {
  name: "Tata Consultancy Services Limited",
  symbol: "TCS.NS",
  exchange: "NSE",
  price: 2694.9,
  change: -27.42,
  marketCap: "₹9,75,000 Cr",
  revenue: "₹2,60,802 Cr",
  netProfit: "₹47,716 Cr",
  ebitdaMargin: "26.15%",
  peRatio: "28.4",
  about: "Tata Consultancy Services Limited provides information technology (IT) and IT enabled services in the Americas, Europe, India, and internationally. The company provides TCS ADD, a suite of AI powered life sciences platforms; TCS BaNCS, a financial services platform; TCS BFSI Platforms, a cloud-native, as-a-service digital ecosystem for insurers and financial firms.",
  summary: {
    performance: -27.42,
    trend: "Bearish",
    volumeSpike: true,
    sentiment: "Neutral",
  },
};

export const priceHistory = [
  { date: "2025-03-01", open: 3710, high: 3750, low: 3690, close: 3720, volume: 1800000 },
  { date: "2025-04-01", open: 3720, high: 3780, low: 3700, close: 3760, volume: 2100000 },
  { date: "2025-05-01", open: 3760, high: 3800, low: 3650, close: 3680, volume: 2500000 },
  { date: "2025-06-01", open: 3680, high: 3700, low: 3580, close: 3620, volume: 1900000 },
  { date: "2025-07-01", open: 3620, high: 3650, low: 3500, close: 3540, volume: 2200000 },
  { date: "2025-08-01", open: 3540, high: 3600, low: 3480, close: 3560, volume: 2000000 },
  { date: "2025-09-01", open: 3560, high: 3590, low: 3400, close: 3420, volume: 2800000 },
  { date: "2025-10-01", open: 3420, high: 3480, low: 3350, close: 3380, volume: 3100000 },
  { date: "2025-11-01", open: 3380, high: 3400, low: 3200, close: 3250, volume: 3500000 },
  { date: "2025-12-01", open: 3250, high: 3300, low: 3100, close: 3150, volume: 2900000 },
  { date: "2026-01-01", open: 3150, high: 3200, low: 2950, close: 2980, volume: 3200000 },
  { date: "2026-02-01", open: 2980, high: 3000, low: 2650, close: 2694.9, volume: 4200000 },
];

export const volumeData = [
  { date: "28/01", volume: 2750000, spike: false },
  { date: "29/01", volume: 2460000, spike: false },
  { date: "30/01", volume: 3020000, spike: false },
  { date: "02/02", volume: 2640000, spike: false },
  { date: "03/02", volume: 4370000, spike: true },
  { date: "04/02", volume: 10850000, spike: true },
  { date: "05/02", volume: 3520000, spike: false },
  { date: "06/02", volume: 4690000, spike: true },
  { date: "09/02", volume: 2380000, spike: false },
  { date: "10/02", volume: 3550000, spike: false },
  { date: "11/02", volume: 3360000, spike: false },
  { date: "12/02", volume: 10610000, spike: true },
  { date: "13/02", volume: 11170000, spike: true },
  { date: "16/02", volume: 2920000, spike: false },
  { date: "17/02", volume: 4210000, spike: false },
];

export const historicalData = [
  { date: "2026-02-17", open: 2716, high: 2760, low: 2695.2, close: 2717.4, volume: "42.1L", change: 0.40 },
  { date: "2026-02-16", open: 2700, high: 2719.8, low: 2671, close: 2706.6, volume: "29.2L", change: 0.53 },
  { date: "2026-02-13", open: 2585, high: 2694.9, low: 2580.1, close: 2694.9, volume: "111.7L", change: 4.33 },
  { date: "2026-02-12", open: 2560, high: 2600, low: 2536, close: 2583, volume: "106.1L", change: 1.98 },
  { date: "2026-02-11", open: 2540, high: 2555, low: 2520, close: 2533, volume: "33.6L", change: -0.28 },
  { date: "2026-02-10", open: 2560, high: 2570, low: 2530, close: 2540, volume: "35.5L", change: -0.78 },
  { date: "2026-02-09", open: 2580, high: 2590, low: 2555, close: 2560, volume: "23.8L", change: -0.58 },
  { date: "2026-02-06", open: 2600, high: 2620, low: 2565, close: 2575, volume: "46.9L", change: -1.15 },
  { date: "2026-02-05", open: 2640, high: 2650, low: 2600, close: 2605, volume: "35.2L", change: -1.51 },
  { date: "2026-02-04", open: 2750, high: 2760, low: 2630, close: 2645, volume: "108.5L", change: -3.82 },
  { date: "2026-02-03", open: 2780, high: 2790, low: 2740, close: 2750, volume: "43.7L", change: -1.07 },
];

export const financials = [
  { label: "EBITDA Margin", value: "26.15%" },
  { label: "Net Profit", value: "₹47,716 Cr" },
  { label: "Revenue", value: "₹2,60,802 Cr" },
  { label: "P/E Ratio", value: "28.4" },
  { label: "Debt to Equity", value: "0.05" },
  { label: "ROE", value: "45.2%" },
  { label: "Dividend Yield", value: "1.8%" },
  { label: "Book Value", value: "₹182.5" },
];
