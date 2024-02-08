function sortedSquares(nums: number[]): number[] {
  let newArray = new Array(nums.length);

  let left = 0;
  let right = nums.length - 1;
  let i = nums.length - 1;

  while (left <= right) {
    const squareLeft = nums[left] ** 2;
    const squareRight = nums[right] ** 2;
    if (squareLeft > squareRight) {
      newArray[i] = squareLeft;
      left++;
    } else {
      newArray[i] = squareRight;
      right--;
    }
    i--;
  }

  return newArray;
}
