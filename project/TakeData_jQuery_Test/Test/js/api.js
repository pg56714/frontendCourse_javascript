// https://jsonplaceholder.typicode.com/

const api = "https://jsonplaceholder.typicode.com/posts";

/*
// XMLHttpRequest
const req = new XMLHttpRequest();
req.addEventListener("load", function () {
  const posts = JSON.parse(req.responseText);
  posts.forEach((post) => {
    console.log(post.title);
  });
});

req.open("GET", api);

// 非同步解析
req.send();
*/

/*
// fetch函數，瀏覽器提供，不是JavaScript語言的一部分
// 非同步解析
fetch(api)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    data.forEach((d) => {
      console.log(d.title);
    });
  });
*/

// async await
// 非同步解析，用一行一行處理
async function getPost() {
  const resp = await fetch(api);
  const posts = await resp.json();

  posts.forEach((post) => {
    console.log(post.title);
  });
}

getPost();

console.log("hello");
