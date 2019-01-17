// control with hero movment from keyboard
function Keyboard(event) {
  var char = event.which || event.keyCode;
  //  document.getElementById("demo").innerHTML = "The Unicode CHARACTER code is: " + char;
  switch (char) {
    case 97:
    case 37:
      moveleft();
      bool = false;
      break;

    case 32:
    case 38:
      myHero.logic = false;
      bool = true;
      moveup();
      break;

    case 100:
    case 39:
      moveright();
      bool = true;
      break;

    case 40:
      movedown();
      bool = true;
      break;
  }
}

// control with hero movment in a random way
function moveHero() {
  switch (Math.floor(Math.random() * 5) + 1) {
    case 1:
      moveup();
      break;

    case 2:
      movedown();
      break;

    case 3:
      moveleft();
      break;

    case 4:
      moveright();
      break;

  }
}



function moveup() {
  myHero.speedY = -myHero.height;
}

function movedown() {
  myHero.speedY = myHero.height;
}

function moveleft() {
  myHero.speedX = -myHero.width;
  myHero.direction = true;
}

function moveright() {
  myHero.speedX = myHero.width;
  myHero.direction = false;
}

function clearmove() {
  myHero.speedX = 0;
  myHero.speedY = 0;
}

//------------------------------------------------
/*document.getElementById("myBtn").addEventListener("click", function() {
  moveleft();
  alert();
});*/