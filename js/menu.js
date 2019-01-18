
<<<<<<< HEAD
function slidebar_close() {
  document.getElementById("mySidebar").style.display = "none";
}

// login
function dosubmit() {
  document.loginForm.action = "index.html?" + document.loginForm.username.value;
  window.event.returnValue = true;
}

var string = window.location.href;
var getit = new Array();
getit = string.split("?");
var userName = unescape(getit[1]);

console.log("userName:" + userName);

if (typeof(Storage) !== "undefined") {
  // Store
  localStorage.setItem("userName", userName);
  // Retrieve
  document.getElementById("userNameprint").innerHTML = "<h2>Hallo " + localStorage.getItem("userName") + "</h2>";
} else {
  document.getElementById("userNameprint").innerHTML = "Sorry, your browser does not support Web Storage...";
}
=======
  function slidebar_open() {
    document.getElementById("mySidebar").style.display = "block";
  }

  function slidebar_close() {
    document.getElementById("mySidebar").style.display = "none";
  }
>>>>>>> 88a02b66b09efac49c51fe974d7218333394a415
