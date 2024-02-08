function maxProfitOne(prices: number[]): number {
  const n = prices.length;
  let min = prices[0];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    let profit = prices[i] - min;
    maxProfit = Math.max(maxProfit, profit);
  }

  return maxProfit;
}
