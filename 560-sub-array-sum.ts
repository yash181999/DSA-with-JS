function subarraySum
(nums: number[], k: number): number {

  const prefixSums = new Map()
  let count = 0;
  prefixSums.set(0, 1)
  let currSum = 0;
  
  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i]
    const diff = currSum - k;
    count += prefixSums.get(diff) ?? 0;
    const value = prefixSums.get(currSum) ? 
    prefixSums.get(currSum) + 1 : 1
    prefixSums.set(currSum, value)

  }

  return count;
};