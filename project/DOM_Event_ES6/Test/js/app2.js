// 動態新增DOM元素
// const hello = document.querySelector("#hello");

// // createElement不會出現在畫面上，而是存在記憶體中
// const h = document.createElement("h1");
// h.textContent = "Hello World";

// const d = document.createElement("div");
// d.textContent = "i am div";

// // 加入這行才會出現在畫面上
// hello.appendChild(h);
// h.appendChild(d);

// ----------------------------------------------

// 刪除DOM元素
// const btn = document.querySelector("#removeBtn");

// btn.addEventListener("click", function () {
//   const lastOne = document.querySelector("li:last-child");

//   if (lastOne) {
//     lastOne.remove();
//     // const ul = document.querySelector("ul");
//     // ul.removeChild(lastOne);
//   }
//   //   console.log(lastOne);
// });

// ----------------------------------------------

// 取得上一層DOM元素
// const lastOne = document.querySelector("li:last-child");
// // console.log(lastOne.parentElement);
// console.log(lastOne.parentNode);

// 簡單介紹Node與Element的差異
// Element本身是一個特別版的Node
// Node有的功能，Element都有，但Element有的功能，Node不一定有
// 用Element的話，簡單功能也比較多

// 取得下一層DOM元素
// const p = document.querySelector("ul");
// console.log(p.childNodes);
// console.log(p.children);

// 取得兄弟姊妹層DOM元素
// const lastOne = document.querySelector("li:nth-child(2)");

// // Element
// console.log(lastOne.previousElementSibling);
// console.log(lastOne.nextElementSibling);

// // Node
// console.log(lastOne.previousSibling);
// console.log(lastOne.nextSibling);

// ----------------------------------------------

// 在指定位置安插DOM元素
const ul = document.querySelector("ul");
// 方法一
// const li = document.createElement("li");
// li.textContent = "X";

// 方法二
const li = "<li>Z</li>";

// beforebegin: 在開始標籤前、afterbegin: 在開始標籤後、beforeend: 在結束標籤前、afterend: 在結束標籤後
// ul.insertAdjacentElement("afterbegin", li);
ul.insertAdjacentHTML("afterbegin", li);
