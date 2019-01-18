const bilder = document.querySelectorAll(".memoryCard");

<<<<<<< HEAD
var hasFlippedCard = false;
var lockBoard = false;
var firstCard, secondCard;
=======
  const bilder = document.querySelectorAll(".memoryCard");
  //deklarerar variabler som används
  var hasFlippedCard = false;
  var lockBoard = false;
  var firstCard, secondCard;
  var movesMatch = 0;
  var timerStarted = false;
  var timeleft;
  var z = false;
  //moves = tar emot räkningen av antal drag och sedan skriver vi ut längden//
  //2d array//
  var moves = [
    [],
    [{
      greeting: "Thank you for using my game!"
    }]
  ]
>>>>>>> 88a02b66b09efac49c51fe974d7218333394a415

function flipCard(){
  if(lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flip");

  if (!hasFlippedCard){
    // first click
    hasFlippedCard = true;
    firstCard = this;

    return;
  }
    //second click
    hasFlippedCard = false;
    secondCard = this;

    checkForMatch();

<<<<<<< HEAD
}

function checkForMatch() {
  var match = firstCard.dataset.framework === secondCard.dataset.framework;
  match ? disableCards() : unflipCards();
=======
  }
  //en popup(modal) om det är åtta matchningar före tiden är slut
  function winner() {
    if (movesMatch === 8) {
      $('#result').text("Congratulations!");
      $('#exampleModal').modal('show');
      z = true;
      console.log("Congratulations!");
    }
  }
$('#level3').click(function () {
  if (z == true) {
    var url = "file:///E:/0%201st%20Sem%20Linnaeus/Git/gruparbete-Jennie-Eva-Rajib-Hossam/index.html";
    $(location).attr('href',url);
  }
});
  function checkForMatch() {
    var match = firstCard.dataset.framework === secondCard.dataset.framework;
    //originalkod: match ? disableCards() : unflipCards(); som förtydligats
    if(match){
      disableCards();
      movesMatch++;
      console.log("match:" + movesMatch);
      // array metod
      moves[0].push("moves");
      console.log(moves[0]);
      document.getElementById("moves").innerHTML = "Match: " + movesMatch;
      document.getElementById("totalMoves").innerHTML = "Moves: " + moves[0].length; //array metod
      console.log(moves[1][0]);
      winner();
    } else {
      unflipCards();
      // array metod
      moves[0].push("moves");
      console.log(moves[0]);
      document.getElementById("totalMoves").innerHTML = "Moves: " + moves[0].length; // array metod
      console.log(movesMatch);
    }
  }
  //tar bort möjligheten att clicka på de vända korten, och återställer om olika.
  function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetBoard();
  }

  //funktion som förhindrar att kort vänds tillbaka innnan kontroll för matchning gjorts
  function unflipCards(){
    lockBoard = true;
>>>>>>> 88a02b66b09efac49c51fe974d7218333394a415

}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  resetBoard();
}

function unflipCards(){
  lockBoard = true;

  setTimeout(()=> {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

<<<<<<< HEAD
    resetBoard();
    }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  bilder.forEach(card=> {
    var randomPos = Math.floor(Math.random()*16);
    card.style.order = randomPos;
  });
})();
bilder.forEach(card => card.addEventListener("click", flipCard));
=======

    for (var i= 0; i < stars.length; i++){
      stars[i].style.color = "#FFD700";
      stars[i].style.visibility = "visible";
    }
  }
  document.body.onload = startGame();
$('.back').click(function () {
  $('.front').css('top','0px');
});
});
>>>>>>> 88a02b66b09efac49c51fe974d7218333394a415
