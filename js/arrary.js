let heroes = ["蝙蝠俠", "神奇女俠", "閃電俠", "水行俠", "綠箭俠"];

// console.log(heroes);
// console.log(heroes.length);
// console.log(heroes[0]);

// 拿最後一個
// console.log(heroes[heroes.length - 1]);

let data = ["孫悟空", 123, 3.14159, false, null, undefined, [1, 2, 3]];

// console.log(data);

// 多維陣列(不要太多層)
// 二維
let data1 = [["1", "2", "3"], ["1", "2"], ["1"]];

// console.log(data1);

// --------------------------------------------

// 新增元素

let heroes1 = ["蝙蝠俠", "神奇女俠", "閃電俠", "水行俠", "綠箭俠"];

// console.log(heroes1);

// 塞到最後面
heroes1.push("蜘蛛人");

// console.log(heroes1);

// 塞到最前面
heroes1.unshift("美國隊長");

// console.log(heroes1);

// 取出元素
let who = heroes1.pop(); // 從最後面取出
// console.log(who);

let who1 = heroes1.shift(); // 從最前面取出
// console.log(who1);

// 修改元素

// 方法一
heroes1[2] = "黑豹";
// console.log(heroes1);

// 方法二
// 抽掉元素
heroes1.splice(0, 1);

// 抽掉元素並且插入
heroes1.splice(0, 0, "蟻人");
// console.log(heroes1);

// 組裝陣列
let a = ["a", "b", "c"];
let b = ["d", "e", "f"];
let all = a.concat(b);

// console.log(all);

// --------------------------------------------

// 查詢這個陣列有沒有這個元素
let heroes2 = ["蝙蝠俠", "神奇女俠", "閃電俠", "水行俠", "綠箭俠"];

// 印出索引值
// console.log(heroes2.indexOf("閃電俠"));

// if (heroes2.indexOf("閃電俠") !== -1) {
//   console.log("有這個元素");
// } else {
//   console.log("沒有這個元素");
// }

// IE不支援，印出true或false
// console.log(heroes2.includes("閃電俠"));

// for (var i = 0; i < heroes2.length; i++) {
//   console.log(heroes2[i]);
// }

// forEach印出每個元素

// function本身是一種值，所以可以當作參數傳遞
// 當forEach再轉圈圈的時候，會把每個元素當作參數傳入function
// heroes2.forEach(function (hero) {
//   console.log(hero);
// });

let heroes3 = ["AA", "B", "CCC", "D"];

// find 尋找符合條件的第一個元素
let user = heroes3.find(function (hero) {
  return hero.length >= 2;
});

// console.log(user);

let heroes4 = ["A", "B", "C"];

// 變成5倍長度

// 對每個元素做處理，自動組裝成新陣列
let result = heroes4.map(function (hero) {
  return hero.repeat(5);
});

// console.log(result);

const superHeroes = heroes2.map(function (hero) {
  return "超級" + hero;
});

// console.log(superHeroes);

// const result = [];

// heroes4.forEach(function (hero) {
//   result.push(hero.repeat(5));
// });

// console.log(result);

// filter對每個元素做些判斷
// 把符合條件的原色收集成一個新的陣列

const newHeroes = heroes2.filter(function (hero) {
  return hero.length == 3;
});

// console.log(newHeroes);

// --------------------------------------------

// reduce 每回合會傳進 累加值 跟 目前這個元素
// 而回傳值就會變成下一回的累加值
let score = [2, 4, 8, 9, 10];

let result1 = score.reduce((acc, cV) => {
  //   console.log(acc, cV);
  return acc + cV;
  // 0 + 2
  // 2 + 4
  // 6 + 8
  // 14 + 9
  // 23 + 10
});
//}, 0);

// console.log(result1);

// let total = 0;

// for (let i = 0; i < score.length; i++) {
//   total += score[i];
// }

// console.log(total);

// --------------------------------------------

// 替換
let a1 = 1;
let b1 = a1;

console.log(a1, b1);
a1 = 2;

console.log(a1, b1);

// 陣列指向同一個地方，其中有一個東西換掉的時候，會影響到另外一個結果
let a2 = ["A", "B", "C"];
let b2 = a2;

console.log(a2, b2);
a2[0] = "X";

console.log(a2, b2);
