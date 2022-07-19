function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    // 1. Array range is given as n+1, e.g if n is 5, the range is 6, meaning 1,2,3,4,5,6. But the array misses one of the numbers. find the missing one.
    // 1. loop through all numbers in the range given , store in array, compare two arrays, print missing elemnt
    Array.prototype.difference = function(e) {
        return this.filter(function(i) {return e.indexOf(i) < 0;});
    };
    let range = A.length+1
    let rightArray = []

    for(let i = 1; i<=range; i++)
    {
        rightArray.push(i)
    }

    let missingElement = parseInt(rightArray.filter(x => A.indexOf(x) === -1))

    return missingElement
}