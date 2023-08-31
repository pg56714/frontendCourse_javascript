// 程式碼寫在這裡

// 葉面讀取並解析完成後就會觸發 DOMContentLoaded 事件
document.addEventListener("DOMContentLoaded", function () {
  const plusBtn = document.querySelector("#plus");
  const minusBtn = document.querySelector("#minus");
  const counter = document.querySelector("#counter");

  plusBtn.addEventListener("click", function () {
    let v = parseInt(counter.value);
    // v = v + 1;
    counter.value = v + 1;
    // console.log(counter.value);
    // console.log("+1");
  });

  minusBtn.addEventListener("click", function () {
    let v = parseInt(counter.value);
    if (v > 0) {
      // v = v - 1;
      counter.value = v - 1;
    }
  });
});
