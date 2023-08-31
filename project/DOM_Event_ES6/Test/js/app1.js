// 葉面讀取並解析完成後就會觸發 DOMContentLoaded 事件
document.addEventListener("DOMContentLoaded", function () {
  //   const btn = document.querySelector("#btn");
  // 差別在於onclick新的會把舊的覆蓋，addEventListener不會，會兩個都印出
  //   btn.onclick = function () {
  //     console.log("1");
  //   };
  //   btn.onclick = function () {
  //     console.log("2");
  //   };
  //   btn.addEventListener("click", function () {
  //     console.log("1");
  //   });
  //   btn.addEventListener("click", function () {
  //     console.log("2");
  //   });

  // 把預設行為停下來
  const link = document.querySelector("#link");
  link.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("link");
  });
});
