// 不分前後順序
test();

// 一般函式宣告
function test() {
  console.log("Hello World");
}

test();

// 匿名函式
// 需要先寫在前面
const test1 = function () {
  console.log("Hello World1");
};

test1();

// 箭頭函式
const test2 = () => {
  console.log("Hello World2");
};

test2();

// ------------------------------------------------------------

// ()裡面叫引數
test3("123");

// ()裡面叫參數
function test3(type) {
  console.log("Hello World3");
  if (type == "123") {
    console.log("123");
  } else {
    console.log("456");
  }
}

function sayHelloTo(user1, user2, user3 = "hi") {
  console.log("Hello " + user1);
  console.log("Hello " + user2);
  console.log("Hello " + user3);
}

sayHelloTo("John", "Mary", "Tom");
console.log("------------");
sayHelloTo("John", "Mary"); // 少一個會undefined，所以可以加入預設值
console.log("------------");
sayHelloTo("John", "Mary", "Tom", "Bob"); // 多一個會忽略
console.log("------------");

// ------------------------------------------------------------

// 回傳值
// return後面的程式碼不會執行
function isAdult(age) {
  /*
  if (age >= 18) {
    //console.log("成年");
    return true;
  } else {
    //console.log("未成年");
    return false;
  }
  */

  // 精簡化
  return age >= 18;
}

isAdult(16);
console.log(isAdult(16));

// 所有的函數都有回傳值

// ------------------------------------------------------------
// 練習

// 1. 計算BMI
// BMI = 體重(公斤) / 身高(公尺)的平方

function bmiCalculator(height, weight) {
  let h = height / 100;
  let bmi = weight / (h * h);
  // Math.round() 四捨五入到整數(數字)
  let result = Math.round(bmi * 100) / 100;

  // 字串
  // let result = bmi.toFixed(2);
  return result;
}

console.log(bmiCalculator(170, 60));

// 2. 閏年判斷

function isLeapYear(year) {
  /*
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    // console.log("是閏年");
    return true;
  } else {
    // console.log("平年");
    return false;
  }
  */
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(isLeapYear(2020));
