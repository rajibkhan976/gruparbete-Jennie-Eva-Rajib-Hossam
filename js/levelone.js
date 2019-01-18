//Rajib
$(document).ready(function(){
  //adding event to a button and game title
  var playerStrike = document.getElementById('play');
  playerStrike.addEventListener('click', levelOne);
  var gameTitle = document.getElementById('title');
  gameTitle.addEventListener('mouseover', changeColor);
  function changeColor () {
    $('#life').css('color', '#00ff00');
    $('#result').css('color', '#00ff00');
    $('#score').css('color', '#00ff00');
    $('#position').css('color', '#00ff00');
    $('#snake').css('color', '#00ff00');
    $('#ladder').css('color', '#00ff00');
  }
  //Declaration of array, variables and object for the function
  var possibleScore = [12,11,10,9,8,7,6,5,4,3,2,1];
  possibleScore.sort();
  possibleScore.reverse();
  var playersPosition = 0, playerGoal = 50, goalDiff = 0, liv = 10, z = false, htmlClass, remCSS, numStrike = 0;
  var rutaValue = {
    1  : 'one', 2  : 'two',   3  : 'three', 4  : 'four', 5  : 'five',
    6  : 'six', 7  : 'seven', 8  : 'eight', 9  : 'nine', 10 : 'ten',
    11 : 'eleven',  12 : 'twelve',    13 : 'thirteen', 14 : 'fourteen', 15 : 'fifteen',
    16 : 'sixteen', 17 : 'seventeen', 18 : 'eighteen', 19 : 'nineteen', 20 : 'twenty',
    21 : 'twentyone', 22 : 'twentytwo',   23 : 'twentythree', 24 : 'twentyfour', 25 : 'twentyfive',
    26 : 'twentysix', 27 : 'twentyseven', 28 : 'twentyeight', 29 : 'twentynine', 30 : 'thirty',
    31 : 'thirtyone', 32 : 'thirtytwo',   33 : 'thirtythree', 34 : 'thirtyfour', 35 : 'thirtyfive',
    36 : 'thirtysix', 37 : 'thirtyseven', 38 : 'thirtyeight', 39 : 'thirtynine', 40 : 'forty',
    41 : 'fortyone',  42 : 'fortytwo',    43 : 'fortythree',  44 : 'fortyfour',  45 : 'fortyfive',
    46 : 'fortysix',  47 : 'fortyseven',  48 : 'fortyeight',  49 : 'fortynine',  50 : 'fifty'
  };
  Object.freeze(rutaValue);
  console.log(rutaValue);
  //Declaration of the function that will run each time the player will click the play button
  function levelOne () {
    //The for loop that will run once, each time the player click the play button while playing the game
    for (var c = 0; c < 1; c++) {
        //Calculating goal difference
        goalDiff = playerGoal - playersPosition;
        console.log("Your are " + goalDiff + " behind from your goal.");
        //Random assigninment of player's score
        if (Array.isArray(possibleScore)) {
        var randomScore = Math.floor(Math.random() * possibleScore.length);
        var playerScore = possibleScore[randomScore];
        $('#result').text("");
        $('#score').text("You scored " + playerScore + ".");
        console.log("You have scored " + playerScore);
        }
        //Checking whether the player scored more than needed to win the game
        if (goalDiff < playerScore) {
          $('#snake').text("You have scored more than needed, so you need to strike again.");
          console.log("You have scored more than needed so you need to strike again");
          continue;
        }
        //Assigning player postion based on current score
        playersPosition += playerScore;
        $('#life').text("You have " + liv + " lives.");
        $('#position').text("Your position is " + playersPosition + ".");
        console.log("Your current position is " + playersPosition);
        //Checking whether the player gets a ladder
        $('#ladder').text("");
        if (playersPosition == 5) {
          playersPosition = 27;
          $('#ladder').text("You have get a ladder and now you are in " + playersPosition + ".");
          console.log("You have get a ladder and now you are in " + playersPosition);
        }
        //Checking whether the player gets a ladder
        if (playersPosition == 12) {
          playersPosition = 34;
          $('#ladder').text("You have get a ladder and now you are in " + playersPosition + ".");
          console.log("You have get a ladder and now you are in " + playersPosition);
        }
        //Checking whether the player has been beaten by a snake
        $('#snake').text("");
        if (playersPosition == 24) {
          playersPosition = 16;
          $('#snake').text("You have been beaten by a snake and therefore now you are in " + playersPosition + ".");
          console.log("You have been beaten by a snake and therefore now you are in " + playersPosition);
        }
        //Checking whether the player has been beaten by a snake
        if (playersPosition == 33) {
          playersPosition = 22;
          $('#snake').text("You have been beaten by a snake and therefore now you are in " + playersPosition + ".");
          console.log("You have been beaten by a snake and therefore now you are in " + playersPosition);
        }
        //Checking whether the player gets a ladder and won the game
        $(remCSS).css("background-color", "");
        if (playersPosition == 40) {
          $('#snake').text("You have got a ladder.");
          playersPosition = 50;
          htmlClass = ".fifty";
          remCSS = ".fifty";
          console.log(htmlClass);
          $(htmlClass).css("background-color", "gray");
          $('#ladder').text("Now you are in " + playersPosition + ".");
          console.log("You have get a ladder and now you are in " + playersPosition);
          $('#result').text("You won the game.");
          console.log("You won the game");
          playersPosition = 0;
          z = true;
          if (z == true) {
            var url = "../index.html";
            $(location).attr('href', url);
          }
        }
        //Checking whether the player has been beaten by a snake
        if (playersPosition == 43) {
          playersPosition = 32;
          $('#snake').text("You have been beaten by a snake and therefore now you are in " + playersPosition + ".");
          console.log("You have been beaten by a snake and therefore now you are in " + playersPosition);
        }
        //Checking whether the player fulfilled the condition to loose a life and go down to position 1
        if (playersPosition == 49) {
          liv -= 1;
          $('#snake').text("You have lost a life & now you have " + liv + " life.");
          playersPosition = 1;
          $('#ladder').text("You should start again from " + playersPosition + ".");
          console.log("You have lost one life and now you are in position " + playersPosition);
        }
        //Changing the color of the box based on the score and current position of the player
        for (var i in rutaValue) {
          if (playersPosition == i) {
            htmlClass = "." + rutaValue[i];
            remCSS = "." + rutaValue[i];
            console.log(htmlClass);
            $(htmlClass).css("background-color", "gray");
          }
        }
        //Checking whether the player has reached the goal
        if (playersPosition === playerGoal) {
          $('#result').text("You won the game.");
          $('#snake').text("");
          $('#ladder').text("");
          console.log("You won the game");
          playersPosition = 0;
          z = true;
          if (z == true) {
            var url = "../index.html";
            $(location).attr('href', url);
          }
        }
    }
  }
});
