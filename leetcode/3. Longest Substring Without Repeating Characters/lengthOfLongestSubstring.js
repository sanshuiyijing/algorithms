/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    let str = '';
    let len = 0;
    let curLen = 0;
    for(let i = 0; i < s.length; i++) {
        const index = str.indexOf(s[i]);
        str += s[i];
        if (index === -1) {
            curLen++;
        } else {
            str = str.substr(index+1);
            curLen = str.length;
        }
        if (curLen > len) {
            len = curLen;
        }
    }
    return len;
};

module.exports = lengthOfLongestSubstring;
