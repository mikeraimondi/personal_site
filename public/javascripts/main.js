$(function () {
  var currentPageId = "#" + $(".nav-active").attr("id");
  $("ul.side-nav li").removeClass("active");
  $("ul.side-nav li" + currentPageId + "_nav").addClass("active");
});
