//let i = 1

/*
for(i=1; i<=5; i++){
    console.log(i)
}
*/

/*
while(i<=5){
    if(i%2 == 1){
        console.log(i)
    }
    //console.log(i)
    i++
}
*/
/*
for(i=1; i<=5; i++){
    if(i%2 == 1){
        continue
    }
    console.log(i)
}
*/

// 練習題

/*
for (let i = 5; i > 0; i = i - 2) {
  //console.log("你好" + i);
  console.log(`你好${i}`);
}
*/

//九九乘法表
/*
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    //console.log(i + "*" + j + "=" + i * j);
    console.log(`${i}*${j}=${i * j}`);
  }
}
*/

//印出形狀，可使用repeat
//"a".repeat(3) //aaa
/*
for (let i = 1; i <= 5; i++) {
  console.log("*".repeat(i));
}
*/

for (let i = 1; i <= 5; i++) {
  console.log(" ".repeat(5 - i) + "*".repeat(i * 2 - 1));
}
console.log(" ".repeat(4) + "|");
