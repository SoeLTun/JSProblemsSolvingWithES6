// 

function PalindromeV1(str) {
    // one of the easy ways to check using javascript 
    if (str === str.split().reverse().join()) return true
    else return false;
}

function PalindromeV2(str) {
    // this is a recursive method to check 
    let strArray = Array.from(str);
    if (strArray.length <= 1) return true;
    else if (strArray.shift() === strArray.pop())
        return PalindromeV2(strArray.join(''));
    else
        return false;

}

function RemoveDuplicateFromArray(arr) {
    let uniqueArray = [];
    arr.filter(val => !uniqueArray.includes(val) ? uniqueArray.push(val) : 'Do Nothing');
    return uniqueArray;
}

function MergeAndSortArray(array1, array2) {
    // sorting the array with callback function 
    //  return array1.concat(array2).sort(Asc);
    // return array.concat(carray2).sort((a,b) => b -a) return desc  order
    return array.concat(array2).sort((a, b) => a - b); // return asc order 
}


function Asc(a, b) {
    return a - b;
}

function Desc(a, b) {
    return b - a;
}

function FindAMissingNumberInArray(array) {
    let n = array.length + 1;
    let expectedSum = n * (n + 1) / 2;
    let sum = array.reduce((acc, cur) => acc + cur, 0);
    return expectedSum - sum;
}