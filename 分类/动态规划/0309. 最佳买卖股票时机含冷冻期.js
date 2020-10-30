// site: https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/

/**
 * @param {number[]} prices
 * @return {number}
 */
// 关键是三个状态转移方程
var maxProfit = function(prices) {
    if (prices.length < 2) return 0;

    const dp = [];
    for (const _ in prices) {
        dp.push(new Array(3).fill(0));
    }
    dp[0][0] = -prices[0];
    for (let i = 1; i < prices.length; i ++) {
        // 目前持有股票
        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][2] - prices[i]);
        // 目前是冷冻期
        dp[i][1] = dp[i-1][0] + prices[i];
        // 目前不持有股票，不是冷冻期
        dp[i][2] = Math.max(dp[i-1][1], dp[i-1][2]);
    }
    return Math.max(dp[dp.length - 1][1], dp[dp.length - 1][2]);
};
