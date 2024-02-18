var firstMissingPositive = function (nums) {
  let smallestPositiveInteger = 1;

  let set = new Set(nums);

  let x = 0;
  while (set.has(smallestPositiveInteger) && x <= nums.length - 1) {
    if (nums[x] > 0) {
      smallestPositiveInteger = smallestPositiveInteger + 1;
    }
    x = x + 1;
  }
  return smallestPositiveInteger;
};

// this has o(n) time complexity and o(n) space complexity,
// for improvement try to re arrange the input array in ascending order and work on it
