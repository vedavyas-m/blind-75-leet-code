// https://leetcode.com/problems/two-sum/description/

// optimal method
// steps
// 1) declare a variable to hold key value pair of previously iterated numbers(hash-map/ hash-table),
// where number is key and its index is value
// 2) iterate over nums array
// 3) for each iteration check if there is any number in the hashTable
// 4) if there is no such number, add current number and its index to the hashtable
// 5) if there is such number return the index of that number and index of the current number
var twoSum = function (nums, target) {
  const hashTable = {};
  for (let i = 0; i < nums.length; i++) {
    let currentVal = nums[i];
    let requiredValue = target - currentVal;
    if (hashTable[requiredValue] >= 0) {
      return [i, hashTable[requiredValue]];
    } else {
      hashTable[currentVal] = i;
    }
  }
};
// brute force method
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length - 1; i++) {
//     for (let j = 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };
