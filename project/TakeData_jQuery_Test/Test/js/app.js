// document.addEventListener("DOMContentLoaded", function () {
//   const hero = document.querySelector("#hero");
//   console.log(hero);
// });

// $(document).ready(function () {
//   const hero = $("#hero");
//   hero.html("hi");
//   console.log(hero);
// });

const api = "https://jsonplaceholder.typicode.com/posts";

$.ajax({
  url: api,
  success: function (response) {
    response.forEach((post) => {
      console.log(post.title);
    });
  },
});
