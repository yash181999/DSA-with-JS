//Optmised Approach
function twoSumOptimised(nums: number[], target: number): number[] {
  const track = {};

  for (let i = 0; i < nums.length; i++) {
    const element = target - nums[i];

    if (track[element] !== undefined) {
      return [track[element], i];
    }

    track[nums[i]] = i;
  }

  return [];
}

//BRUTE FORCE
function twoSum(nums: number[], target: number): number[] {
    for(let i=0; i<nums.length; i++) {
        for(let j = i+1; j<nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }

    return []
};


