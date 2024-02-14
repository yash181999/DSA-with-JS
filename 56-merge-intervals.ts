function merge(intervals: number[][]): number[][] {
  const nums = intervals.sort((a, b) => a[0] - b[0]);
  const merged = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    const lastIndex = merged.length - 1;
    const lastElement = merged[lastIndex][1];
    if (nums[i][0] <= lastElement) {
      merged[lastIndex][1] =
        nums[i][1] >= lastElement ? nums[i][1] : lastElement;
    } else {
      merged.push(nums[i]);
    }
  }

  return merged;
}
