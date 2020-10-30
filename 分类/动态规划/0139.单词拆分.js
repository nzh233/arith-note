// site: https://leetcode-cn.com/problems/word-break/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const wordSet = new Set(wordDict);
    const dp = Array(s.length + 1).fill(false);
    dp[0] = true; // 起点，空串认为匹配
    let maxLength = 0, minLength = Number.POSITIVE_INFINITY;
    for (const word of wordSet) {
        if (word.length > maxLength) {
            maxLength = word.length;
        }
        if (word.length < minLength) {
            minLength = word.length;
        }
    }
    // 依次遍历每个为true的dp
    for (let i = 0; i < s.length + 1; i++) {
        if (dp[i] === true) {
            for (let j = i + minLength; j <= i + maxLength; j++) {
                if (wordSet.has(s.slice(i, j))) {
                    dp[j] = true; // 符合字典内单词的子串下标标记为true
                }
            }
        }
    }
    return dp[dp.length - 1];
};