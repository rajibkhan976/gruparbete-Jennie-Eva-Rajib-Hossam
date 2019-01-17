function dragonmove() {

  switch (Math.floor(Math.random() * 4) + 1) {
    case 1:
      {
        dragonmoveup();
        break;
      }
    case 2:
      {
        dragonmovedown();
        break;
      }
  }
}

function dragonmoveup() {
  myDrgon.speedY = -myDrgon.height;
  if (myDrgon.y < myDrgon.height) {
    myDrgon.speedY = myDrgon.height;

  } else myDrgon.speedY = -myDrgon.height;
}

function dragonmovedown() {
  myDrgon.speedY = myDrgon.height;
  if (myDrgon.y > myGameArea.canvas.height - myDrgon.height) {
    myDrgon.speedY = -myDrgon.height;

  } else myDrgon.speedY = myDrgon.height;
}
