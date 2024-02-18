// SOLUTION 1
var productExceptSelf = function (nums) {
  let preArr = [];
  let postArr = [];
  let result = [];
  // create pre array
  for (let i = 0; i < nums.length; i++) {
    preArr[i] = i > 0 ? preArr[i - 1] * nums[i - 1] : 1;
  }
  // create post array
  for (let i = nums.length - 1; i >= 0; i--) {
    postArr[i] = i != nums.length - 1 ? nums[i + 1] * postArr[i + 1] : 1;
  }
  for (let i = 0; i < nums.length; i++) {
    result[i] = preArr[i] * postArr[i];
  }
  return result;
};

// solution 2 => uses only one array
var productExceptSelf = function (nums) {
  let result = [];
  let post = 1;
  // create pre array
  for (let i = 0; i < nums.length; i++) {
    result[i] = i > 0 ? result[i - 1] * nums[i - 1] : 1;
  }
  // manipulate preArray for result
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = result[i] * post;
    post = post * nums[i];
  }
  return result;
};
