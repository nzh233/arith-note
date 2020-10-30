/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const dp = Array(s.length + 1).fill(0);
    dp[0] = 1; // 这里比较关键
    dp[1] = s[0] === "0" ? 0 : 1;
    for (let i = 2; i < s.length + 1; i++) {
        const one = +s.substr(i-1, 1);
        const two = +s.substr(i-2, 2);

        if (two >= 10 && two <= 26) {
            dp[i] = dp[i-2];
        }
        if (one !== 0) {
            dp[i] += dp[i-1];
        } 
    }

    return dp[dp.length - 1];
};