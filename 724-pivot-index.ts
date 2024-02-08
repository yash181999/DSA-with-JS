function pivotIndexOptimal(nums: number[]): number {
  //optmial approach
  let n = nums.length;
  //cacalute total sum;
  const totalSum = nums.reduce((item, currentValue) => item + currentValue, 0);
  let leftSum = 0;
  //check
  for (let i = 0; i < n; i++) {
    let rightSum = totalSum - nums[i] - leftSum;
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += nums[i];
  }

  return -1;
}

//Brute Force 
function pivotIndex(nums: number[]): number {
    //brute force approach

    const n = nums.length;
    let leftSum = 0;
    for(let i=0; i<n; i++) {

        let rightSum =0;

        for(let j=i+1; j<n; j++) {
            rightSum += nums[j]
        }

        if(leftSum === rightSum) return i;

        leftSum += nums[i]
    }    

    return -1;

};
