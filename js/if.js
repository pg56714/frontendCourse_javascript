let year = prompt("請輸入年份");

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
  console.log("是閏年");
} else {
  console.log("平年");
}
