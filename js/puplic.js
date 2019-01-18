function count_life(life, id, imgsrc) {
  var x = document.getElementById(id);
  var i = 1;
  var test = life + 1;
  console.log("test1=" + test);
  /*if (test == life) {
    console.log("test2=" + test);
    x.innerHTML = " ";
  }*/
  x.innerHTML = " ";
  while (i < life + 1) {
    var img = document.createElement("IMG");
    img.setAttribute("src", imgsrc);
    img.setAttribute("width", "30");
    img.setAttribute("height", "30");
    x.appendChild(img);
    i++;
  }


  console.log("i=" + i);
}

//count_life(Hero.life, "heroLife", Hero.imgLife);
//count_life(drgon.life, "dragonLife", drgon.imgLife);
function show_div(divId, className) {
  var con = document.getElementById(divId);
  con.classList.add(className);
}
