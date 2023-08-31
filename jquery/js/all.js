// jquery主要是操制html、css，來設計出動畫效果

$(document).ready(function () {
  //$("h1").hide();
  $(".button").click(function () {
    //toggle開關效果
    $("h1,p").toggle();
  });

  // 滑動效果
  $(".button1").click(function () {
    $(".text").slideToggle(2000);

    //開啟
    //$('.text').slideDown(2000);

    //關閉
    //$('.text').slideUp(2000);
  });

  // 淡入淡出
  $(".button2").click(function () {
    $(".text").fadeToggle();
    // fadeIn 預設隱藏的東西給打開
    // fadeOut 預設開啟的東西給關閉
  });

  // 上面那些效能不好，所以用toggleClass自訂效果
  $(".button3").click(function () {
    $(".text").toggleClass("active");
    // $('.text').addClass('active');
    // $('.text').removeClass('active');
  });

  // 鍵式寫法
  /*
  $(".start").click(function () {
    $(".box1").slideUp(3000).slideDown(1000).slideUp(1000).slideDown(1000);
  });
  */
  // stop中斷動畫，在做轉換
  $(".start").click(function () {
    $(".box1").stop().slideToggle(1000);
  });

  // 取消默認行為
  $(".close").click(function (event) {
    /* Act on the event */
    // 用連結時做動畫時，需要取消默認行為
    event.preventDefault();
    $(".box2").slideUp();
  });

  // 動態載入CSS設定
  $(".box3").css("width", "500px");

  // 下拉式收合選單
  $(".dropdown").click(function (event) {
    /* Act on the event */
    event.preventDefault();
    $(".dropdown").toggleClass("active");
    $(".dropdown-open").slideToggle();
  });

  // delay延遲
  $(".open").click(function () {
    $(".box4").delay(0).fadeIn();
    $(".box5").delay(1000).slideDown();
    $(".box6").delay(2000).show(0);
  });

  // 字體放大縮小
  $(".font-b").click(function (event) {
    event.preventDefault();
    $(".content p").css("font-size", "20px");
  });

  $(".font-m").click(function (event) {
    event.preventDefault();
    $(".content p").css("font-size", "16px");
  });

  $(".font-s").click(function (event) {
    event.preventDefault();
    $(".content p").css("font-size", "13px");
  });

  // close效果
  $(".ad-close").click(function (event) {
    event.preventDefault();
    $(".ad").fadeOut();
  });

  // 左右選單切換
  $(".header1").click(function () {
    $("body").toggleClass("open");
  });

  // 用this操作本身元素
  /*
  $(".menu1 li").click(function () {
    // $(this).addClass('active');
    $(this).toggleClass("active");
  });
  */

  // siblings()找到同層元素，ex：點擊第一個，第二個就會消失
  $(".menu1 li").click(function () {
    // $(this).addClass('active');
    $(this).addClass("active").siblings().removeClass("active");
  });

  // parent()找到父元素
  $(".addCart").click(function () {
    $(this).parent().toggleClass("active");
  });

  // find()找到子元素
  $(".cart li").click(function () {
    $(this).find("h3").toggleClass("active");
  });

  // 摺疊選單
  $(".question h3").click(function () {
    // 讓點擊到的 h3 亮起來，其他h3移除active樣式
    $(this).toggleClass("active");

    // 讓點擊到的 h3找到父元素 .question ，再找裡面的 P 判斷收闔
    $(this).parent().find("p").slideToggle();

    // 自己以外的 p 隱藏起來
    $(this).parent().siblings().find("p").slideUp();
    // 自己以外的 h3 移除u樣式
    $(this).parent().siblings().find("h3").removeClass("active");
  });

  // 二階層式選單
  $(".cart > li > a").click(function (event) {
    event.preventDefault();
    $(this).parent().siblings().find("ul").slideUp();
    $(this).parent().find("ul").slideToggle();
  });

  // 動態加入html標籤
  //$("body").html("<h1>test</h1>");

  // 動態加入text
  //$("body h1").text("test");

  // click與on的差別
  // 用jquery生成的元素，click無法使用，要用on，除非放click前面
  //$(".box1").html("<h1>test</h1>");
  /*
  $("h1").click(function () {
    alert("click");
  });
  */

  // on是監聽事件，即時性的
  $(".wrap").on("click", "h1", function () {
    alert("click");
  });
  $(".box1").html("<h1>test</h1>");

  // 動態加入html標籤屬性attr
  //$("img").attr("width", "50");

  // 移除標籤
  $(".remove").click(function () {
    /* Act on the event */
    $(this).parent().parent().remove();
  });

  // top動效果
  $(".top a").click(function (event) {
    event.preventDefault();
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  // 搜尋a連結裡面的字有doc的，加上樣式
  $("a[href$='.doc']").addClass("fa fa-file-word-o");
  $("a[href$='.jpg']").addClass("fa fa-file-photo-o");
  $("a[href$='.zip']").addClass("fa fa-file-zip-o");
});
