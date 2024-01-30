const findMax = (arr) => {
  if (arr.length === 0) return "Cannot find max element";

  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  return max;
};

const arr = [];

console.log(findMax(arr));
