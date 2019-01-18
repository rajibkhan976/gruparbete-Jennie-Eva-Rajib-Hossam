$(document).ready(function(){
  function slidebar_open() {
    document.getElementById("mySidebar").style.display = "block";
  }

  function slidebar_close() {
    document.getElementById("mySidebar").style.display = "none";
  }
  $('#snakeGame').click(function () {
    var level1 = "html/level-1.html";
    $(location).attr('href', level1);
  });
  $('#memoryGame').click(function () {
    var level2 = "html/level-2.html";
    $(location).attr('href', level2);
  });
  $('#iqGame').click(function () {
    var level3 = "html/level-3_html.html";
    $(location).attr('href', level3);
  });
  $('#dragonGame').click(function () {
    var level4 = "html/level-4.html";
    $(location).attr('href', level4);
  });
});
