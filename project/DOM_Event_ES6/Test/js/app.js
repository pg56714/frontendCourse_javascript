// const d1 = document.getElementById("doll1");

// console.log(d1);

// const d2 = document.querySelector("#doll1");

// console.log(d2);

// 抓全部
// 會取得HTMLCollection
// const dolls = document.getElementsByClassName("doll");
// console.log(dolls);

// // 會取得NodeList
// const dolls1 = document.querySelectorAll(".doll");

// console.log(dolls1);

// HTML的ID可以直接當作變數使用，但是不要這樣用
// console.log(doll1);

// let d1 = document.querySelector("#doll1");
// // d1.textContent = "悟空";
// d1.innerHTML = "<h1>悟空</h1>";
// d1.style.color = "red";

const btn = document.querySelector("#btn");

// btn.addEventListener("click", function () {
//   console.log("click");
// });

const clickHandler = function () {
  console.log("click");
};

btn.addEventListener("click", clickHandler);
