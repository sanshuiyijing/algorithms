const lengthOfLongestSubstring = require('../lengthOfLongestSubstring.js');
test('lengthOfLongestSubstring', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
    expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
});
