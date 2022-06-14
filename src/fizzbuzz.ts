/**
 * 1から100まで
 * 3の倍数でなく、5の倍数でないときは整数をそのまま出力する
 * 3の倍数であり、5の倍数でないときは整数の代わりにFizzを出力する
 * 3の倍数でなく、5の倍数であるときは整数の代わりにBuzzを出力する
 * 3の倍数であり、5の倍数であるときは整数の代わりにFizzBuzzを出力する
 */

const fizzbuzz = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 !== 0 && i % 5 !== 0) {
      console.log(i);
    }
    if (i % 3 === 0 && i % 5 !== 0) {
      console.log("Fizz");
    }
    if (i % 3 !== 0 && i % 5 === 0) {
      console.log("Buzz");
    }
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    }
  }
}

// fizzbuzz();

const fizzbuzz2 = () => {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

// fizzbuzz2();

const fizzbuzz3 = () => {
  let result = "";

  for (let i = 1; i <= 100; i++) {
    if (i !== 1) {
      result += " ";
    }
    if (i % 3 === 0 && i % 5 === 0) {
      result += "FizzBuzz";
    } else if (i % 3 === 0) {
      result += "Fizz";
    } else if (i % 5 === 0) {
      result += "Buzz";
    } else {
      result += String(i);
    }
  }

  console.log(result);
}

// fizzbuzz3();

function getFizzBuzzString(num: number): number | "FizzBuzz" | "Fizz" | "Buzz" {
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return num;
  } 
}

const fizzbuzz4 = () => {
  for (let i = 1; i <= 100; i++) {
    const message = getFizzBuzzString(i);
    console.log(message);
  }
}

// fizzbuzz4();

function sequence(startNum: number, endNum: number): number[] {
  const numArray: number[] = [];
  
  for (let i = startNum; i <= endNum; i++) {
    numArray.push(i);
  }

  return numArray;
}

const fizzbuzz5 = () => {
  for (const i of sequence(1, 100)) {
    const message = getFizzBuzzString(i);
    console.log(message);
  }
}

fizzbuzz5();