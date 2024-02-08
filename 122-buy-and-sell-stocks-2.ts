function maxProfitTwo(prices: number[]): number {
  const n = prices.length;
  let profit = 0;

  for (let i = 1; i < n; i++) {
    const currentDay = prices[i];
    const previousDay = prices[i - 1];

    if (currentDay > previousDay) {
      profit += currentDay - previousDay;
    }
  }

  return profit;
}
