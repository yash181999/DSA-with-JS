function majorityElement(nums: number[]): number {
  let result = nums[0];
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) result = nums[i];

    if (nums[i] === result) count++;
    else count--;
  }

  return result;
}
