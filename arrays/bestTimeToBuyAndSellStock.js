var maxProfit = function (prices) {
  let max_profit = 0;
  let buyingPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > buyingPrice) {
      if (max_profit < prices[i] - buyingPrice) {
        max_profit = prices[i] - buyingPrice;
      }
    } else {
      buyingPrice = prices[i];
    }
  }

  return max_profit;
};
