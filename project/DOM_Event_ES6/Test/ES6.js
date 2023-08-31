let name = "悟空";
let age = 18;

// 用 + 號串接
// console.log("我叫" + name + "，今年" + age + "歲。");

// 把變數帶進去
// console.log(`我叫${name}，今年${age}歲。`);

// 一般函式
// function addNumber(a, b) {
//   return a + b;
// }

// 匿名函式
// const addNumber = function (a, b) {
//   return a + b;
// };

// 箭頭函式  不是一般的function簡寫，不一樣的點在於this的指向，沒有用到this的話，就可以用箭頭函式
// const addNumber = (a, b) => {
//   return a + b;
// };

const addNumber = (a, b) => a + b;

// console.log(addNumber(1, 2));

// 物件簡寫
let name1 = "kk";
let age1 = 18;

let cat = {
  // key的名稱，跟變數名稱一樣的話，可以省略
  name1,
  age1,
};

// console.log(cat);

// ------------------------------

// const cat1 = {
//   // key的名稱，跟變數名稱一樣的話，可以省略
//   name3: "kk",
//   age3: 18,
// };

// // let name2 = cat1.name;
// // let age2 = cat1.age;
// // 解構
// const { name3: username, age3 } = cat1;

// console.log(username, age3);

function printUser({ name, age }) {
  //   const name = userData.name;
  //   const age = userData.age;
  //   const { name, age } = userData;

  console.log(name);
  console.log(age);
}

const user = {
  name: "kk",
  age: 18,
};

// printUser(user);

// ------------------------------

// 點點點寫法(陣列展開)
const H1 = ["A", "B", "C"];
const H2 = ["D", "E", "F"];
// const HAll = H1.concat(H2);
const HAll = [...H1, ...H2];

// console.log(HAll);

// 剩下的我全都要收
const heroes = ["A", "B", "C", "D"];
let [h1, ...h2] = heroes;
// console.log(h1, h2);

function sayHello(u1, ...u2) {
  console.log(u1, u2);
}

sayHello("A", "B", "C", "D");
