// 引数と関数の戻り値の方をnumberと決めうちしたバージョンのmap関数
// function map(arr: number[], callback: (data: number) => number): number[] {
//   const dataArray: number[] = [];

//   for (const item of arr) {
//     dataArray.push(callback(item));
//   }

//   return dataArray;
// }

function map<T, U>(array: T[], callback: (value: T) => U): U[] {
  const result: U[] = [];

  for (const elm of array) {
    result.push(callback(elm));
  }

  return result;
}

// const data = [1, 1, 2, 3, 5, 8, 13];

// const result = map(data, (x) => x * 10);

const data = [1, -3, -2, 8, 0, -1];

const result: boolean[] = map(data, (x) => x >= 0);

console.log(result);
