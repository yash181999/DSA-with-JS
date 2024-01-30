const getPartitionIndex = (arr, low, high) => {
  let i = low;
  let j = high;
  const pivot = arr[low];

  while (i <= j) {
    while (i <= j && arr[i] <= pivot) {
      i++;
    }

    while (i <= j && arr[j] > pivot) {
      j--;
    }

    if (i <= j) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  const temp = arr[low];
  arr[low] = arr[j];
  arr[j] = temp;

  return j;
};

const quickSort = (arr, low, high) => {
  if (low < high) {
    const partitionIndex = getPartitionIndex(arr, low, high);

    quickSort(arr, low, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, high);
  }
  return arr;
};

const sort = (arr) => {
  return quickSort(arr, 0, arr.length - 1);
};

const arr = [4, 6, 2, 5, 7, 9, 1, 3];

console.log(sort(arr));
