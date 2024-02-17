function spiralOrder(matrix: number[][]): number[] {
  const res: number[] = [];
  let rs = 0;
  let re = matrix.length - 1;
  let cs = 0;
  let ce = matrix[0].length - 1;
  while (rs <= re && cs <= ce) {
    for (let i = cs; i <= ce; i++) {
      res.push(matrix[rs][i]);
    }
    rs++;

    for (let i = rs; i <= re; i++) {
      res.push(matrix[i][ce]);
    }
    ce--;

    if (rs <= re) {
      for (let i = ce; i >= cs; i--) {
        res.push(matrix[re][i]);
      }
    }

    re--;

    if (cs <= ce) {
      for (let i = re; i >= rs; i--) {
        res.push(matrix[i][cs]);
      }
    }

    cs++;
  }

  return res;
}
