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
                dp[i] = Math.max(dp[i-2], dp[i-3]) + nums[i];
            }
        }
    }
    return Math.max(...dp);
};
