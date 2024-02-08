function plusOne(digits: number[]): number[] {
  let ans = [...digits];
  const n = digits.length;
  for (let i = n - 1; i >= 0; i--) {
    if (ans[i] < 9) {
      ans[i] = ans[i] + 1;
      return ans;
    }

    ans[i] = 0;
  }

  ans = [1, ...ans];
  return ans;
}
