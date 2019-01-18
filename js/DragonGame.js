//Eva
var myBg;
var myHero;
var myDrgon;
var ispaused = true; // to make a pause efter crash
var index = Math.floor(Math.random() * bg.img.length);
var hero = 0; //colect the number of crashes for hero
var dragon = 0; //colect the number of crashes for dragon
var life_hero = Hero.life;
var life_dragon = drgon.life;
var bool = true; //we use this variable to controll clearmovment function
var herocrash = false; //hero hits dragon
var dragoncrash = false; // dragon hits hero
//start the game and build the canvas and components
function startGame() {
  myBg = new component(bg.width, bg.height, bg.img, bg.x, bg.y, "background");
  myHero = new component(Hero.width, Hero.height, Hero.images, 0, 400, false, "hero");
  myDrgon = new component(drgon.width, drgon.height, drgon.images, 800, 400, true, "drgon");
  myGameArea.start();
}
//biuld the canvans
var myGameArea = {
  canvas: document.createElement("canvas"),
  start: function() {
    this.canvas.width = 900;
    this.canvas.height = 500;
    this.context = this.canvas.getContext("2d");
    document.getElementsByClassName('wrapper')[0].appendChild(this.canvas);
    this.frameNo = 0;
    this.interval = setInterval(updateGameArea, 350); //update the game evry 250 ms

    document.body.onkeydown = function() {
      Keyboard(event);
    };
    document.body.onkeyup = function() {
      if (bool) clearmove();

    };

  },
  //clear all the canvas
  clear: function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  // make a pause efter crash
  pause: function() {
    ispaused = false;
    setTimeout(function() {
      ispaused = true;
    }, 500);
  },
  //game over
  stop: function() {
    clearInterval(this.interval);
  }

}

//biuld the componenet:hero-drgon and background.
function component(width, height, imgsarry, x, y, direction, type) {

  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.gravity = 0.1;
  this.gravitySpeed = 0;
  this.bounce = 0.6;
  this.type = type;
  this.direction = direction; // to control with right and left of the component
  this.logic = false; //don't allow component to go top of canvans

  //update the game
  this.update = function() {
    ctx = myGameArea.context;
    this.image = new Image();
    if (this.direction == "background") {

      this.image.src = "../img/" + imgsarry[index];
    }

    if ((!this.direction) && (this.type == "hero")) {
      if (dragoncrash) {
        this.image.src = "../img/" + imgsarry[2];
        dragoncrash = false;
      } else {
        for (var i = 0; i < 2; i++) {
          this.image.src = "../img/" + imgsarry[i];
        }
      }

    } else if ((this.direction) && (this.type == "hero")) {
      if (dragoncrash) {
        this.image.src = "../img/" + imgsarry[5];
        dragoncrash = false;
      } else {
        for (var i = 3; i < 5; i++) {
          this.image.src = "../img/" + imgsarry[i];
        }
      }
    }

    if ((this.direction) && (this.type == "drgon")) {
      if (herocrash) {
        this.image.src = "../img/" + imgsarry[2];
        herocrash = false;
      } else {
        for (var i = 0; i < 2; i++) {
          this.image.src = "../img/" + imgsarry[i];
        }
      }
    } else if ((!this.direction) && (this.type == "drgon")) {
      if (herocrash) {
        this.image.src = "../img/" + imgsarry[2];
        herocrash = false;
      } else {
        for (var i = 3; i < 5; i++) {
          this.image.src = "../img/" + imgsarry[i];
        }
      }
    }

    ctx.drawImage(this.image,
      this.x,
      this.y,
      this.width, this.height);
  }
  //make a new position
  this.newPos = function() {
    this.x += this.speedX;
    this.y += -this.speedY + this.gravitySpeed;

    if (this.logic) {
      this.gravitySpeed += this.gravity;
      // move to ground
      this.hitBottom();
    } else {
      // click up
      this.logic = true;
    }

    //up dragon
    if (this.y <= 0)
      this.y = this.height;

    //down dragn
    if (this.y > myGameArea.canvas.height - this.height) {
      this.y = -this.height;
    }

  }
  //don't allow drgon or hero go under ground
  this.hitBottom = function() {
    var rockbottom = myGameArea.canvas.height - this.height;
    if (this.y > rockbottom) {
      this.y = rockbottom;
      this.gravitySpeed = -(this.gravitySpeed * this.bounce);
    }
  }

  //find the crash
  this.crashWith = function(otherobj) {
    var heroleft = this.x;
    var heroright = this.x + (this.width);
    var herotop = this.y;
    var herobottom = this.y + (this.height);
    // hero
    var dragonleft = otherobj.x;
    var dragonright = otherobj.x + (otherobj.width);
    var dragontop = otherobj.y;
    var dragonbottom = otherobj.y + (otherobj.height);

    /*  console.log(dragonbottom + "(bottom)hero" + herobottom);
      console.log(dragontop + "(top) hero" + herotop);
      console.log(dragonright + "(RIGHT)hero" + heroright);
      console.log(dragonleft + "(LEFT) hero" + heroleft);*/


    if (((herobottom == dragontop) && (myHero.x == myDrgon.x)) || (heroright == dragonright) && (!myHero.direction)) {
      herocrash = true;
      hero++;
      var life_hero = Hero.life - dragon;
      document.getElementById("hero").innerHTML = "Life: " + life_hero + "  - Crashes:" + hero;
      count_life(life_hero, "heroLife", Hero.imgLife);
      myGameArea.pause();
    } else
    if (((dragonbottom == herotop) && (myHero.x == myDrgon.x)) ||
      ((dragonright == heroleft) && (myHero.direction == myDrgon.direction))) {
      dragoncrash = true;
      dragon++;
      var life_dragon = drgon.life - hero;
      document.getElementById("dragon").innerHTML = "Life: " + life_dragon + "  - Crashes: " + dragon;
      count_life(life_dragon, "dragonLife", drgon.imgLife);
      myGameArea.pause();
    }


    if (life_dragon < 1 || life_hero < 1) {
      myGameArea.stop();
      if (dragon > hero) {
        //  document.getElementById("res").innerHTML = "Game over!. Dragon win the game."
        //con1.innerHTML = "Game over!. dragon win the game.";
        show_div("dragonwin", "show");

      } else {
        //document.getElementById("res").innerHTML = "Game over!. hero win the game."
        //con2.innerHTML = "Game over!. hero win the game.";
        show_div("herowin", "show");
      }


    }
  }
}

function updateGameArea() {

  if (ispaused) {
    myGameArea.clear();
    myBg.update();
    dragonmove();
    // go to left then to right for dragon
    if (myDrgon.direction == false && myDrgon.x < myGameArea.canvas.width - myDrgon.width) {
      myDrgon.x = myDrgon.x + myDrgon.width;
    } else {
      myDrgon.direction = true;
    }

    if (myDrgon.direction == true && myDrgon.x > 0) {
      myDrgon.x = myDrgon.x - myDrgon.width;

    } else {
      myDrgon.direction = false;
    }

    // left hero or right
    if (myHero.x <= 0) {
      myHero.x = myHero.width;
      myHero.direction = false;
    } else
    if (myHero.x >= myGameArea.canvas.width - myHero.width) {
      myHero.x = myGameArea.canvas.width - 2 * myHero.width;
      myHero.direction = true;
    }

    //  console.log("myDrgon.direction:" + myDrgon.direction);
    myDrgon.newPos();
    myDrgon.update();
    myHero.newPos();
    myHero.update();
    myHero.crashWith(myDrgon);
  }
}
