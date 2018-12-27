document.getElementById("demo").innerHTML = "Hello World!";
//---------------------------------------------------------
//insertBefore
var para = document.createElement("p");
var node = document.createTextNode("This is new.insertBefore");
para.appendChild(node);

var element = document.getElementById("div1");
var child = document.getElementById("p1");
element.insertBefore(para, child);

//---------------------------------------------------------
//insertefter
var para = document.createElement("p");
var node = document.createTextNode("This is new.insertafter");
para.appendChild(node);
var element = document.getElementById("div1");
element.appendChild(para);
//---------------------------------------------------------
document.getElementById("myBtn").addEventListener("click", function() {
  console.log("hejsan")
});