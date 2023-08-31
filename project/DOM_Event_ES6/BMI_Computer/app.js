// 程式碼寫在這裡
// 提示：BMI = 體重(kg) / 身高(m) 平方

function bmiCalculator(height, weight) {
  var w = parseInt(weight);
  var h = parseInt(height) / 100;
  return (w / (h * h)).toFixed(2);
}

// 葉面讀取並解析完成後就會觸發 DOMContentLoaded 事件
document.addEventListener("DOMContentLoaded", function () {
  /*
  const height = document.querySelector("#bodyHeight");
  const weight = document.querySelector("#bodyWeight");
  const result = document.querySelector("#resultText");
  const btn = document.querySelector("button");

  btn.addEventListener("click", function () {
    // let h = Number(height.value) / 100;
    // let w = Number(weight.value);
    // let bmi = w / (h * h);

    // result.textContent = bmi.toFixed(2);
  });
  */
  const btn = document.querySelector("button");

  btn.addEventListener("click", () => {
    const height = document.querySelector("#bodyHeight").value;
    const weight = document.querySelector("#bodyWeight").value;
    const resultArea = document.querySelector("#resultText");

    if (height != "" && weight != "") {
      resultArea.innerHTML = bmiCalculator(height, weight);
    }
  });
});
