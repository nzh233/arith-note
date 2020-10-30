// site: https://leetcode-cn.com/problems/house-robber/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums === null || nums.length == 0) return 0;
    const dp = Array(nums.length).fill(0);
    dp[0] = nums[0];
    if (nums.length > 1) {
        dp[1] = nums[1];
        if (nums.length > 2) {
            dp[2] = nums[0] + nums[2];
            for (let i = 3; i < dp.length; i++) {
                dp[i] = Math.max(dp[i-2], dp[i-3]) + nums[i]; // 抢第i家之前，抢第i-2家或抢第i-3家
            }
        }
    }
    return Math.max(...dp);
};

// 另一思路，比较抢了i-1家与抢i-2家和i家的大小
// dp[i] = Math.max(dp[i - 2] + nums[i - 2], dp[i - 1]);
// 空间优化后
var rob = function(nums) {
    let a = 0;
    let b = 0;

    for (let i = 0; i < nums.length; i++) {
    const temp = b;
    b = Math.max(a + nums[i], b);
    a = temp;
    }

    return b;
}