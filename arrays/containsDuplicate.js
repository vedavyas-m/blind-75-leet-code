var containsDuplicate = function (nums) {
  let hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (hashMap.has(nums[i])) {
      return true;
    }
    hashMap.set(nums[i], i);
  }
  return false;
};
