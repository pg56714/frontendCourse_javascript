// 物件 = 一個東西
// 物件 = 屬性 + 行為

// 物件
let buibui = {
  name: "阿肥",
  age: 6,
  attack: function () {
    console.log("喵喵喵!");
  },
};
// 新增屬性
buibui.color = "橘";

// 刪除屬性
delete buibui.age;

console.log(buibui);

console.log(buibui.name);
// console.log(buibui["name"]);
// console.log(buibui.age);
buibui.attack();
