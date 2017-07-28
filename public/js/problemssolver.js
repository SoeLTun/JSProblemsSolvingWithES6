// 

function PalindromeV1(str) {
    // one of the easy ways to check 
    if (str === str.split().reverse().join()) return true
    else return false;
}

function PalindromeV2(str) {
    let strArray = Array.from(str);
    if (strArray.length < 1) return true;
    else if (strArray.shift() === strArray.pop())
        return PalindromeV2(strArray.join(''));
    else
        return false;

}