//för jqueryn i koden
$(document).ready(function(){

  const bilder = document.querySelectorAll(".memoryCard");
  //deklarerar variabler som används
  var hasFlippedCard = false;
  var lockBoard = false;
  var firstCard, secondCard;
  var movesMatch = 0;
  var timerStarted = false;
  var timeleft;
  //moves = tar emot räkningen av antal drag och sedan skriver vi ut längden//
  //2d array//
  var moves = [
    [],
    [{
      greeting: "Thank you for using my game!"
    }]
  ]

  // objektmetod och objektliteral
  var timeToCreateThisGame = {
    day: 1,
    dayFinish: 17,
    calcTime: function() {
      this.time  = this.dayFinish - this.day;
      return this.time
    }
  }
  console.log("Jag har jobbat med spelet i ungefär " + timeToCreateThisGame.calcTime() +" dagar");

  //funktionen räknar ner tiden samt låter vända kort vara kvar i 8 sekunder.
  function flipCard(){
    if(!timerStarted){
      timeleft = 60;

      var downloadTimer = setInterval(function(){
        document.querySelector(".timer").innerHTML = (timeleft);

        timeleft--;
        // en switchsats, ändrar färg på nedräkningen
        switch(timeleft) {
          case 40:
          document.querySelector(".timer").style.color = "purple";
          break;

          case 20:
          document.querySelector(".timer").style.color = "cyan";
          break;
        }
        //whileloopen vänder tillbaka korten när tiden är ute och spelet tar slut
        while(timeleft <= -1){
          clearInterval(downloadTimer);
          document.querySelector(".timer").innerHTML = "Time's up!";
          bilder.forEach(card => card.removeEventListener("click", flipCard));
          break;
        }
      },800);
      timerStarted = true;
    }

    if(lockBoard) return;

    if (this === firstCard) return;

    this.classList.add("flip");

    // first click
    if (!hasFlippedCard){

      hasFlippedCard = true;
      firstCard = this;

      return;
    }
    //second click
    hasFlippedCard = false;
    secondCard = this;

    checkForMatch();

  }
  //en popup(modal) om det är åtta matchningar före tiden är slut
  function winner() {
    if (movesMatch === 8) {
      $('#exampleModal').modal('show');
      $('#result').text("Congratulations!");
      console.log("Congratulations!");
    }
  }

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

    setTimeout(()=> {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
      resetBoard();
    }, 1000);
  }

  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

  //funktion som blandar och startar om spelet.
  $('#gameReload').click(function () {
    location.reload();
  });
  //funktion som blandar och lägger eventlistener på korten
  function startGame(){
    (function shuffle() {
      bilder.forEach(card=> {
        var randomPos = Math.floor(Math.random()*16);
        card.style.order = randomPos;
      });
    })();
    //forEach
    bilder.forEach(card => card.addEventListener("click", flipCard));

    var counter = document.querySelector(".moves");
    const stars = document.querySelectorAll(".fa-star");
    var starsList = document.querySelectorAll(".stars li");


    for (var i= 0; i < stars.length; i++){
      stars[i].style.color = "#FFD700";
      stars[i].style.visibility = "visible";
    }
  }
  document.body.onload = startGame();

});
